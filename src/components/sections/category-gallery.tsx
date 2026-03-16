"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { QuickView } from '@/components/quick-view';

type CategoryGalleryProps = {
  initialCategory?: string;
};

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'rings', label: 'Rings' },
  { id: 'bangles', label: 'Bangles' },
  { id: 'anklets', label: 'Anklets' },
  { id: 'necklaces', label: 'Necklaces' },
];

export function CategoryGallery({ initialCategory = 'all' }: CategoryGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const excludedAboutImageIds = ['ab8', 'ab9', 'ab10', 'ab14', 'ab15'];

  const baseImages = PlaceHolderImages.filter(
    (img) => !excludedAboutImageIds.includes(img.id)
  );

  const filteredImages = selectedCategory === 'all'
    ? baseImages
    : baseImages.filter(img =>
        img.category &&
        img.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
      );

  const handleQuickView = (img: any) => {
    setSelectedItem({
      name: img.description,
      imageUrl: img.imageUrl,
      category: selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
    });
    setIsQuickViewOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">Jewelry Collections</span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground">Browse Our <span className="gold-gradient italic">Collections</span></h2>
          <div className="w-16 md:w-24 h-[1px] bg-primary mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              className={`rounded-full px-6 md:px-8 py-2 text-xs md:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'border-primary/30 text-foreground hover:border-primary hover:bg-primary/5'
              }`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredImages.map((img, idx) => (
              <div
                key={`${selectedCategory}-${idx}`}
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
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">View Details</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No items found in this category.</p>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {selectedItem && (
        <QuickView
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
          item={selectedItem}
        />
      )}
    </section>
  );
}
