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

export interface HeroItem {
  title: string;
  subtitle: string;
  image?: {
    imageUrl: string;
    description: string;
    imageHint: string;
  };
  cta: string;
}

interface HeroCarouselProps {
  items: HeroItem[];
}

export function HeroCarousel({ items }: HeroCarouselProps) {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[550px] md:h-[700px] w-full flex items-center justify-center">
                {/* Full-width bridal jewelry background image for first slide */}
                {index === 0 && item.image && (
                  <Image
                    src={item.image.imageUrl}
                    alt={item.image.description}
                    fill
                    className="object-cover w-full h-full"
                    style={{ zIndex: 0 }}
                    priority
                    data-ai-hint={item.image.imageHint}
                  />
                )}
                {/* For other slides, fallback to their images if present */}
                {index !== 0 && item.image && (
                  <Image
                    src={item.image.imageUrl}
                    alt={item.image.description}
                    fill
                    className="object-cover w-full h-full"
                    style={{ zIndex: 0 }}
                    priority={index === 0}
                    data-ai-hint={item.image.imageHint}
                  />
                )}
                {/* Dark overlay for premium look and text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
                <div className="container mx-auto px-4 z-20 relative flex flex-col items-start justify-center h-full">
                  <div className="max-w-2xl text-white space-y-4 md:space-y-6 animate-fade-in drop-shadow-xl">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold leading-tight">
                      {item.title}
                    </h1>
                    <p className="text-base md:text-2xl font-light opacity-90 max-w-lg leading-relaxed">
                      {item.subtitle}
                    </p>
                    <div className="pt-4">
                      <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6 md:px-10 py-5 md:py-7 text-sm md:text-lg uppercase tracking-widest font-semibold transition-all hover:scale-105 shadow-lg">
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


