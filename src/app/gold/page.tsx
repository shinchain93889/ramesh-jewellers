import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const goldItems = [
  { name: 'Traditional Harram', category: 'Necklace', price: '₹2,45,000' },
  { name: 'Bridal Jhumkas', category: 'Earrings', price: '₹85,000' },
  { name: 'Floral Bangles', category: 'Bangles', price: '₹1,20,000' },
  { name: 'Temple Gold Set', category: 'Bridal', price: '₹5,60,000' },
  { name: 'Modern Gold Chain', category: 'Chains', price: '₹45,000' },
  { name: 'Designer Ring', category: 'Rings', price: '₹35,000' },
];

export default function GoldPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <header className="bg-secondary py-24 text-center border-b border-primary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-headline font-bold mb-4">The <span className="gold-gradient">Gold</span> Collection</h1>
            <p className="text-muted-foreground tracking-widest uppercase text-xs">22K & 24K Pure Craftsmanship</p>
          </div>
        </header>

        <section className="py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {goldItems.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-[400px] border border-primary/10 overflow-hidden mb-6">
                  <Image 
                    src={PlaceHolderImages[idx % PlaceHolderImages.length].imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-primary text-black px-8 py-3 font-bold uppercase tracking-widest text-xs">Quick View</button>
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <span className="text-[10px] text-primary uppercase tracking-[0.2em]">{item.category}</span>
                  <h3 className="text-xl font-headline font-bold">{item.name}</h3>
                  <p className="text-muted-foreground font-light">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}