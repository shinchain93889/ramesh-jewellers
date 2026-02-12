"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroItems = [
  {
    title: "Eternal Bridal Collection",
    subtitle: "Make your special day unforgettable with our handcrafted pieces.",
    image: PlaceHolderImages.find(img => img.id === 'hero-ring'),
    cta: "Explore Collection"
  },
  {
    title: "The Gold Standard",
    subtitle: "Discover timeless 22K gold necklaces and bangles.",
    image: PlaceHolderImages.find(img => img.id === 'hero-necklace'),
    cta: "View Designs"
  },
  {
    title: "Diamond Radiance",
    subtitle: "Exquisite diamonds that capture the light and your heart.",
    image: PlaceHolderImages.find(img => img.id === 'hero-earrings'),
    cta: "Shop Diamonds"
  }
];

export function HeroCarousel() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {heroItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[550px] md:h-[700px] w-full flex items-center">
                <div className="absolute inset-0 z-0">
                  {item.image && (
                    <Image
                      src={item.image.imageUrl}
                      alt={item.image.description}
                      fill
                      className="object-cover brightness-[0.5] md:brightness-[0.7]"
                      priority={index === 0}
                      data-ai-hint={item.image.imageHint}
                    />
                  )}
                </div>
                <div className="container mx-auto px-4 z-10 relative">
                  <div className="max-w-2xl text-white space-y-4 md:space-y-6 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold leading-tight">
                      {item.title}
                    </h1>
                    <p className="text-base md:text-2xl font-light opacity-90 max-w-lg leading-relaxed">
                      {item.subtitle}
                    </p>
                    <div className="pt-4">
                      <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6 md:px-10 py-5 md:py-7 text-sm md:text-lg uppercase tracking-widest font-semibold transition-all hover:scale-105">
                        {item.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-8 text-white border-white hover:bg-white hover:text-secondary" />
          <CarouselNext className="right-8 text-white border-white hover:bg-white hover:text-secondary" />
        </div>
      </Carousel>
    </section>
  );
}
