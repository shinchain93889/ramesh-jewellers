"use client";

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { QuickView } from '@/components/quick-view';

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (img: any) => {
    setSelectedItem({
      name: img.description,
      imageUrl: img.imageUrl,
      category: "Gallery Collection"
    });
    setIsQuickViewOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <header className="py-24 text-center border-b border-primary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-headline font-bold mb-4">Our <span className="gold-gradient">Gallery</span></h1>
            <p className="text-muted-foreground tracking-widest uppercase text-xs">Visualizing Luxury and Tradition</p>
          </div>
        </header>

        <section className="py-24 container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {PlaceHolderImages.concat(PlaceHolderImages).map((img, idx) => (
              <div
                key={idx}
                className="relative break-inside-avoid border border-primary/10 group cursor-pointer overflow-hidden"
                onClick={() => handleQuickView(img)}
              >
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  width={800}
                  height={1200}
                  className="w-full h-auto grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                  <h4 className="text-xl font-headline text-primary mb-2">{img.description}</h4>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white">Ramesh Exclusive</span>
                  <button className="mt-4 bg-primary text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest">Quick View</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <QuickView
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        item={selectedItem}
      />
    </div>
  );
}
