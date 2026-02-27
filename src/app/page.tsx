import { Navbar } from '@/components/navbar';
import { HeroCarousel } from '@/components/sections/hero-carousel';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getMetalRates } from '@/lib/metals';
import { CollectionsGrid } from '@/components/sections/collections-grid';
import { formatPrice } from '@/lib/utils';

const categories = [
  { id: 'cat-rings', title: 'Rings', link: '/gold' },
  { id: 'cat-necklaces', title: 'Necklaces', link: '/gold' },
  { id: 'cat-bangles', title: 'Bangles', link: '/gold' },
  { id: 'cat-earrings', title: 'Earrings', link: '/gold' },
  { id: 'cat-bridal', title: 'Bridal Sets', link: '/bridal' },
  { id: 'cat-chains', title: 'Chains', link: '/gold' },
];

export default async function Home() {
  const rates = await getMetalRates();

  // Defaults (Fallback to estimated Feb 2026 rates if API fails)
  const fallbackDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  const displayDate = rates?.lastUpdated || fallbackDate;

  // Base rates per gram (fallback values include GST + local levies for Indian retail)
  const gold24kPerGram = rates ? rates.gold.price24K : 16255;
  const gold22kPerGram = rates ? rates.gold.price22K : 14900;
  const silver1gPrice = rates ? rates.silver.price1Gram : 96;
  const silver1kgPrice = rates ? rates.silver.price1Kg : 96000;

  // Display Rates (Gold per 10g as requested)
  const gold24k_10g = gold24kPerGram * 10;
  const gold22k_10g = gold22kPerGram * 10;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />

        {/* Daily Rates Section */}
        <section className="py-12 bg-secondary/20 border-b border-primary/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-headline font-bold mb-2">Today's <span className="gold-gradient">Gold & Silver</span> Rates</h3>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">As of {displayDate}</p>
                {!rates && <p className="text-[10px] text-red-400 mt-1">*Live rates unavailable, showing estimates</p>}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full md:w-auto">
                <div className="bg-background p-4 border border-primary/20 text-center min-w-[120px]">
                  <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Gold 24K (10g)</span>
                  <span className="text-lg font-bold text-primary">{formatPrice(gold24k_10g)}</span>
                </div>
                <div className="bg-background p-4 border border-primary/20 text-center min-w-[120px]">
                  <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Gold 22K (10g)</span>
                  <span className="text-lg font-bold text-primary">{formatPrice(gold22k_10g)}</span>
                </div>
                <div className="bg-background p-4 border border-primary/20 text-center min-w-[120px]">
                  <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Silver (1g)</span>
                  <span className="text-lg font-bold text-slate-500">{formatPrice(silver1gPrice)}</span>
                </div>
                <div className="bg-background p-4 border border-primary/20 text-center min-w-[120px]">
                  <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Silver (1kg)</span>
                  <span className="text-lg font-bold text-slate-500">{formatPrice(silver1kgPrice)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">Exquisite Collections</span>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground">Explore Our <span className="gold-gradient italic">Treasures</span></h2>
              <div className="w-16 md:w-24 h-[1px] bg-primary mx-auto"></div>
            </div>

            <CollectionsGrid categories={categories} />
          </div>
        </section>


        {/* Featured Teaser Section */}
        <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 relative h-[400px] md:h-[600px]">
                <div className="absolute inset-0 border border-primary/30 translate-x-4 translate-y-4 hidden md:block"></div>
                {PlaceHolderImages.find(img => img.id === 'cat-bridal') && (
                  <Image
                    src={PlaceHolderImages.find(img => img.id === 'cat-bridal')!.imageUrl}
                    alt="Bridal Masterpiece"
                    fill
                    className="object-cover"
                    data-ai-hint="bridal jewelry"
                  />
                )}
              </div>
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Our Legacy</span>
                <h2 className="text-3xl md:text-5xl font-headline font-bold leading-tight">
                  Timeless Artistry for <br className="hidden md:block" /><span className="gold-gradient italic">Your Special Moments</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
                  With over 35 years of heritage, Ramesh Jewellers blends traditional Indian craftsmanship with contemporary luxury. Each piece is meticulously hand-forged to become an heirloom for generations.
                </p>
                <div className="pt-4">
                  <Button variant="outline" size="lg" className="rounded-none border-primary text-primary hover:bg-primary hover:text-black px-8 h-12 md:h-14 uppercase tracking-widest font-bold text-xs">
                    Read Our Story
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
