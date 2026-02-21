"use client";

import * as React from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface QuickViewProps {
    isOpen: boolean;
    onClose: () => void;
    item: {
        name: string;
        category?: string;
        price?: string;
        imageUrl: string;
        description?: string;
    } | null;
}

export function QuickView({ isOpen, onClose, item }: QuickViewProps) {
    if (!item) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl border-primary/20 bg-secondary p-0 overflow-hidden rounded-none">
                <div className="flex flex-col md:flex-row h-full">
                    <div className="relative w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden">
                        <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                        <div className="space-y-2">
                            {item.category && (
                                <span className="text-[10px] text-primary uppercase tracking-[0.3em] font-bold">
                                    {item.category}
                                </span>
                            )}
                            <DialogHeader className="p-0 text-left">
                                <DialogTitle className="text-3xl font-headline font-bold text-foreground">
                                    {item.name}
                                </DialogTitle>
                            </DialogHeader>
                        </div>

                        {item.price && (
                            <p className="text-2xl font-bold text-primary italic">
                                {item.price}
                            </p>
                        )}

                        <DialogDescription className="text-muted-foreground font-light leading-relaxed">
                            {item.description || "Exquisitely crafted with the finest attention to detail, this piece represents the pinnacle of Ramesh Jewellers' legacy of artistry."}
                        </DialogDescription>

                        <div className="pt-6 space-y-4">
                            <Button className="w-full bg-primary text-black hover:bg-white transition-colors rounded-none font-bold uppercase tracking-widest py-6">
                                Enquire Now
                            </Button>
                            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                                SKU: RJ-2026-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
