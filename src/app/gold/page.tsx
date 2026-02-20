import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const goldItems = [
  { name: 'Gold Bangle', category: 'Bangle', price: '₹1,20,000', imageId: 'cat-bangles' },
  { name: 'Gold Necklace', category: 'Necklace', price: '₹2,45,000', imageId: 'cat-necklaces' },
  { name: 'Gold Pendant', category: 'Pendant', price: '₹45,000', imageId: 'gold-pendant' },
  { name: 'Gold Stylish Pendant', category: 'Pendant', price: '₹55,000', imageId: 'gold-stylish-pendant' },
];

export default function GoldPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <header className="bg-secondary py-16 md:py-24 text-center border-b border-primary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">The <span className="gold-gradient">Gold</span> Collection</h1>
            <p className="text-muted-foreground tracking-widest uppercase text-[10px] md:text-xs">22K & 24K Pure Craftsmanship</p>
          </div>
        </header>

        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {goldItems.map((item, idx) => {
              const img = PlaceHolderImages.find(i => i.id === item.imageId);
              return (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative h-[350px] md:h-[450px] border border-primary/10 overflow-hidden mb-6">
                    {img && (
                      <Image
                        src={img.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-primary text-black px-8 py-3 font-bold uppercase tracking-widest text-xs">Quick View</button>
                    </div>
                  </div>
                  <div className="text-center space-y-1">
                    <span className="text-[10px] text-primary uppercase tracking-[0.2em]">{item.category}</span>
                    <h3 className="text-lg md:text-xl font-headline font-bold">{item.name}</h3>
                    <p className="text-muted-foreground font-light text-sm md:text-base">{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
