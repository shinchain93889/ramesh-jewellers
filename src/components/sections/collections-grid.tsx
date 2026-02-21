"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { QuickView } from '@/components/quick-view';

interface Category {
    id: string;
    title: string;
    link: string;
}

interface CollectionsGridProps {
    categories: Category[];
}

export function CollectionsGrid({ categories }: CollectionsGridProps) {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

    const handleQuickView = (e: React.MouseEvent, cat: Category, imageUrl: string) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedItem({
            name: cat.title,
            imageUrl: imageUrl,
            category: "Exclusive Collection"
        });
        setIsQuickViewOpen(true);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categories.map((cat, idx) => {
                    const img = PlaceHolderImages.find(i => i.id === cat.id);
                    const imageUrl = img?.imageUrl || '';
                    return (
                        <Link href={cat.link} key={idx} className="group relative h-[350px] md:h-[450px] overflow-hidden border border-primary/10">
                            {img && (
                                <Image
                                    src={img.imageUrl}
                                    alt={img.description}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

                            {/* Quick View Button for Home Page */}
                            <div className="absolute top-4 right-4 z-20">
                                <button
                                    onClick={(e) => handleQuickView(e, cat, imageUrl)}
                                    className="bg-black/60 hover:bg-primary text-white hover:text-black p-3 backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100"
                                    title="Quick View"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M8 11h6" /><path d="M11 8v6" /></svg>
                                </button>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-center">
                                <h3 className="text-xl md:text-2xl font-headline font-bold text-white mb-2">{cat.title}</h3>
                                <div className="w-12 h-[1px] bg-primary mx-auto mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Collection</span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <QuickView
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
                item={selectedItem}
            />
        </>
    );
}
