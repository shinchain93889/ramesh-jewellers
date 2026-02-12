
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="group flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
            <span className="text-xl font-bold font-headline">R</span>
          </div>
          <span className="text-xl font-headline font-bold tracking-tight text-secondary">
            RAMESH <span className="text-primary">JEWELLERS</span>
          </span>
        </Link>
        <div className="hidden space-x-8 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Our Services</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact Us</Link>
        </div>
        <div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Inquiry
          </Button>
        </div>
      </div>
    </nav>
  );
}
