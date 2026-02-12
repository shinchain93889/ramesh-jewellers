import { Navbar } from '@/components/navbar';
import { HeroCarousel } from '@/components/sections/hero-carousel';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const categories = [
  { id: 'cat-rings', title: 'Rings', link: '/gold' },
  { id: 'cat-necklaces', title: 'Necklaces', link: '/gold' },
  { id: 'cat-bangles', title: 'Bangles', link: '/gold' },
  { id: 'cat-earrings', title: 'Earrings', link: '/gold' },
  { id: 'cat-bridal', title: 'Bridal Sets', link: '/bridal' },
  { id: 'cat-chains', title: 'Chains', link: '/gold' },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        
        {/* Collections Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">Exquisite Collections</span>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground">Explore Our <span className="gold-gradient italic">Treasures</span></h2>
              <div className="w-16 md:w-24 h-[1px] bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {categories.map((cat, idx) => {
                const img = PlaceHolderImages.find(i => i.id === cat.id);
                return (
                  <Link href={cat.link} key={idx} className="group relative h-[350px] md:h-[450px] overflow-hidden border border-primary/10">
                    {img && (
                      <Image 
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        data-ai-hint={img.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-center">
                      <h3 className="text-xl md:text-2xl font-headline font-bold text-white mb-2">{cat.title}</h3>
                      <div className="w-12 h-[1px] bg-primary mx-auto mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Collection</span>
                    </div>
                  </Link>
                );
              })}
            </div>
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
