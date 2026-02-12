import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function SilverPage() {
  const silverImg = PlaceHolderImages.find(img => img.id === 'silver-section');
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <header className="bg-secondary py-24 text-center border-b border-primary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-headline font-bold mb-4">Sterling <span className="text-slate-400">Silver</span></h1>
            <p className="text-muted-foreground tracking-widest uppercase text-xs">Contemporary Elegance in .925 Silver</p>
          </div>
        </header>

        <section className="py-24 container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] border border-slate-700">
               {silverImg && (
                 <Image src={silverImg.imageUrl} alt="Silver Collection" fill className="object-cover" />
               )}
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold">Modern <span className="italic">Minimalism</span></h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                Our silver collection is designed for the modern woman who appreciates subtle luxury. From everyday office wear to statement dinner pieces, our sterling silver collection is plated with rhodium for long-lasting brilliance.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">925 Purity</h4>
                  <p className="text-sm text-muted-foreground">Certified sterling silver for lasting quality.</p>
                </div>
                <div>
                  <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">Artisan Made</h4>
                  <p className="text-sm text-muted-foreground">Handcrafted designs with attention to detail.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}