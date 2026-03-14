import { revalidateTag, revalidatePath } from 'next/cache';
import { getMetalRates } from '@/lib/metals';
import { NextResponse } from 'next/server';

/**
 * Cron endpoint: refreshes metal rates cache and revalidates the home page.
 * Invoked by Vercel Cron at 6:00, 13:00, and 20:00 IST.
 * Set CRON_SECRET in Vercel and Vercel will send it in Authorization: Bearer <CRON_SECRET>.
 */
export async function GET(request: Request) {
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        revalidateTag('metal-rates');
        await getMetalRates();
        revalidatePath('/');
        return NextResponse.json({
            ok: true,
            message: 'Metal rates cache refreshed',
            at: new Date().toISOString(),
        });
    } catch (error) {
        console.error('Cron refresh-metal-rates error:', error);
        return NextResponse.json(
            { error: 'Failed to refresh metal rates' },
            { status: 500 }
        );
    }
}
