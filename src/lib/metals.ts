import { unstable_cache } from 'next/cache';

/** Cache tag for revalidating metal rates from cron (6am, 1pm, 8pm IST). */
export const METAL_RATES_TAG = 'metal-rates';

async function fetchMetalRatesUncached(): Promise<{
    gold: { price24K: number; price22K: number };
    silver: { price1Gram: number; price1Kg: number };
    lastUpdated: string;
} | null> {
    const API_KEY = process.env.METALS_API_KEY;

    if (!API_KEY || API_KEY === 'your_gold_api_key_here') {
        console.error("METALS_API_KEY (GoldAPI key) is not defined or is set to the placeholder.");
        return null;
    }

    try {
        const res = await fetch(
            `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=INR&currencies=XAU,XAG`,
            { method: 'GET', cache: 'no-store' }
        );

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`Failed to fetch metal prices: ${res.status} ${res.statusText}`, errorText);
            return null;
        }

        const data = await res.json();

        if (!data || !data.success || !data.rates || !data.rates.XAU || !data.rates.XAG) {
            console.error("Failed to retrieve valid metal rates from MetalPriceAPI");
            return null;
        }

        // MetalPriceAPI returns rate of 1 INR to XAU/XAG. So 1 / rate = INR per 1 Troy Ounce.
        const goldPricePerOunce = 1 / data.rates.XAU;
        const silverPricePerOunce = 1 / data.rates.XAG;

        // Indian retail prices include additional charges on top of the spot price:
        //   - 3% GST (mandatory)
        //   - ~4% local levies, hallmarking & dealer premium
        // Total adjustment: ~7% above spot price to match Indian market retail rates.
        const INDIA_RETAIL_FACTOR = 1.07;

        // 1 Troy Ounce = 31.1034768 Grams
        const TROY_OUNCE_IN_GRAMS = 31.1034768;

        // Calculate per gram prices
        const goldPricePerGram24K = (goldPricePerOunce / TROY_OUNCE_IN_GRAMS) * INDIA_RETAIL_FACTOR;
        const goldPricePerGram22K = goldPricePerGram24K * (22 / 24);
        const silverPricePerGram = (silverPricePerOunce / TROY_OUNCE_IN_GRAMS) * INDIA_RETAIL_FACTOR;

        // Ensure we have valid numbers
        if (!goldPricePerGram24K || !silverPricePerGram) {
            return null;
        }

        return {
            gold: {
                price24K: goldPricePerGram24K,
                price22K: goldPricePerGram22K,
            },
            silver: {
                price1Gram: silverPricePerGram,
                price1Kg: silverPricePerGram * 1000,
            },
            lastUpdated: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
        };

    } catch (error) {
        console.error("Error fetching metal rates:", error);
        return null;
    }
}

/**
 * Returns cached gold/silver rates. Cache is revalidated by cron at 6:00, 13:00, and 20:00 IST.
 * Max age 24h between cron runs.
 */
export const getMetalRates = async () => {
    return unstable_cache(
        fetchMetalRatesUncached,
        ['metal-rates'],
        { revalidate: 86400, tags: [METAL_RATES_TAG] }
    )();
};
