"use client";

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { QuickView } from '@/components/quick-view';

export default function BridalPage() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (img: any) => {
    setSelectedItem({
      name: "The Eternal Heritage Set",
      imageUrl: img.imageUrl,
      category: "Bridal Masterpiece",
      price: "Price on Request"
    });
    setIsQuickViewOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="relative h-screen flex items-center justify-center text-center">
          <Image
            src={PlaceHolderImages.find(img => img.id === 'cat-bridal')?.imageUrl || ''}
            alt="Bridal Collection"
            fill
            className="object-cover brightness-50"
          />
          <div className="container relative z-10 px-4 space-y-6">
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs">For Your Forever</span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-white">The <span className="gold-gradient">Bridal</span> Edit</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light tracking-wide">
              Magnificent sets designed for the most precious day of your life.
            </p>
            <div className="pt-8">
              <Button size="lg" className="bg-primary text-black hover:bg-white transition-colors px-12 h-16 rounded-none font-bold uppercase tracking-widest">
                Book A Bridal Consultation
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold mb-4">Signature <span className="gold-gradient italic">Wedding Sets</span></h2>
              <div className="w-16 h-[1px] bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2, 3, 4].map((i) => {
                const img = PlaceHolderImages[i % PlaceHolderImages.length];
                return (
                  <div key={i} className="group border border-primary/10 overflow-hidden relative h-[500px]">
                    <Image
                      src={img.imageUrl}
                      alt="Bridal Masterpiece"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                      <h3 className="text-3xl font-headline text-white mb-2">The Eternal Heritage Set</h3>
                      <p className="text-primary tracking-widest text-xs uppercase mb-6">Polki & Gold Fusion</p>
                      <div className="flex space-x-4">
                        <Button
                          variant="outline"
                          className="w-fit border-white text-white hover:bg-primary hover:border-primary hover:text-black"
                        >
                          Request Inquiry
                        </Button>
                        <Button
                          onClick={() => handleQuickView(img)}
                          className="bg-white text-black hover:bg-primary rounded-none"
                        >
                          Quick View
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
