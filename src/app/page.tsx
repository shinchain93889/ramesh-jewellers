
import { Navbar } from '@/components/navbar';
import { HeroCarousel } from '@/components/sections/hero-carousel';
import { ServicesGrid } from '@/components/sections/services-grid';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export default function Home() {
  const bridalImg = PlaceHolderImages.find(img => img.id === 'collection-bridal');

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        
        {/* Featured Teaser Section */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 relative h-[500px] animate-fade-in">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary z-0"></div>
                {bridalImg && (
                  <Image 
                    src={bridalImg.imageUrl}
                    alt={bridalImg.description}
                    fill
                    className="object-cover z-10 shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                    data-ai-hint={bridalImg.imageHint}
                  />
                )}
              </div>
              <div className="w-full md:w-1/2 space-y-8 animate-fade-in delay-200">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Crafting Excellence</span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-secondary leading-tight">
                  Where Tradition Meets <br /><span className="text-primary italic">Modern Luxury</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  For over three decades, Ramesh Jewellers has been synonymous with the finest craftsmanship and most exquisite designs in the heart of the diamond district. Each piece is a testament to our dedication to quality and our passion for the art of fine jewelry.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  From traditional bridal sets that honor heritage to contemporary minimalist designs for the modern woman, we offer a curated selection that caters to every milestone of your life.
                </p>
                <div className="pt-4">
                  <Button variant="outline" size="lg" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-8 h-14 uppercase tracking-widest font-bold text-sm">
                    Our Story
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesGrid />

        {/* Call to Action Bar */}
        <section className="bg-secondary py-16 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Found your dream piece?</h2>
            <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">Visit us today or book a private consultation with our master designers.</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-16 text-lg uppercase font-bold rounded-none shadow-xl">
              Book Consultation
            </Button>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
