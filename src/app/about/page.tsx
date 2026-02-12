import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <header className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <Image 
            src={PlaceHolderImages[0].imageUrl}
            alt="About Ramesh Jewellers"
            fill
            className="object-cover opacity-30"
          />
          <div className="container relative z-10 px-4">
            <h1 className="text-6xl md:text-8xl font-headline font-bold mb-6">Our <span className="gold-gradient">Legacy</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
              Crafting stories in gold and silver since 1985.
            </p>
          </div>
        </header>

        <section className="py-24 container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16 text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-headline font-bold text-primary italic">The Ramesh Tradition</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Founded in the heart of the diamond district, Ramesh Jewellers began with a simple mission: to create jewelry that speaks of love, commitment, and heritage. What started as a small boutique has grown into a destination for fine jewelry lovers across the globe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
              <div className="space-y-4">
                <h3 className="text-2xl font-headline text-primary">Authenticity</h3>
                <p className="text-sm text-muted-foreground">Every piece is certified and hallmark-stamped for purity and quality assurance.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-headline text-primary">Craftsmanship</h3>
                <p className="text-sm text-muted-foreground">Our master artisans bring decades of experience to every intricate detail.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-headline text-primary">Integrity</h3>
                <p className="text-sm text-muted-foreground">Transparent pricing and ethical stone sourcing are the foundations of our brand.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}