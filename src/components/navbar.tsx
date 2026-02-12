import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link href="/" className="group flex items-center space-x-2">
          <div className="flex h-12 w-12 items-center justify-center border-2 border-primary text-primary transition-transform group-hover:scale-105">
            <span className="text-2xl font-bold font-headline">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-headline font-bold tracking-widest text-primary">
              RAMESH
            </span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              Jewellers
            </span>
          </div>
        </Link>
        <div className="hidden space-x-6 lg:flex">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest">Home</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest">About Us</Link>
          <Link href="/gold" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest">Gold</Link>
          <Link href="/silver" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest">Silver</Link>
          <Link href="/bridal" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest">Bridal</Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest">Gallery</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest">Contact</Link>
        </div>
        <div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-6">
            Inquiry
          </Button>
        </div>
      </div>
    </nav>
  );
}