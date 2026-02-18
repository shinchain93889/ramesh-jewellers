
export const getMetalRates = async () => {
    const API_KEY = process.env.METALS_API_KEY;

    if (!API_KEY) {
        console.error("METALS_API_KEY (GoldAPI key) is not defined");
        return null;
    }

    // Helper to fetch data with 24-hour caching
    const fetchMetalPrice = async (symbol: string) => {
        try {
            const res = await fetch(`https://www.goldapi.io/api/${symbol}/INR`, {
                method: 'GET',
                headers: {
                    'x-access-token': API_KEY,
                    'Content-Type': 'application/json'
                },
                next: { revalidate: 86400 } // Cache for 24 hours (86400 seconds)
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error(`Failed to fetch ${symbol}: ${res.status} ${res.statusText}`, errorText);
                return null;
            }

            return res.json();
        } catch (error) {
            console.error(`Error fetching ${symbol}:`, error);
            return null;
        }
    };

    try {
        // Fetch Gold (XAU) and Silver (XAG) in parallel
        const [goldData, silverData] = await Promise.all([
            fetchMetalPrice('XAU'),
            fetchMetalPrice('XAG')
        ]);

        if (!goldData || !silverData) {
            console.error("Failed to retrieve one or more metal rates");
            return null;
        }

        // GoldAPI returns 'price' which is price per ounce, but also often includes 'price_gram_24k' etc.
        // If specific gram prices are not available, calculate from 'price' (per ounce).
        // 1 Troy Ounce = 31.1034768 Grams

        const TROY_OUNCE_IN_GRAMS = 31.1034768;

        let goldPricePerGram24K = 0;
        let goldPricePerGram22K = 0;
        let silverPricePerGram = 0;

        // Process Gold Data
        if (goldData.price_gram_24k) {
            goldPricePerGram24K = goldData.price_gram_24k;
            goldPricePerGram22K = goldData.price_gram_22k || (goldPricePerGram24K * (22 / 24));
        } else {
            // Fallback calculation
            const pricePerOunce = goldData.price;
            goldPricePerGram24K = pricePerOunce / TROY_OUNCE_IN_GRAMS;
            goldPricePerGram22K = goldPricePerGram24K * (22 / 24);
        }

        // Process Silver Data
        if (silverData.price_gram_24k) {
            silverPricePerGram = silverData.price_gram_24k;
        } else {
            const pricePerOunce = silverData.price;
            silverPricePerGram = pricePerOunce / TROY_OUNCE_IN_GRAMS;
        }

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
        console.error("Error in getMetalRates:", error);
        return null;
    }
};
