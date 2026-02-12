import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gold", label: "Gold" },
  { href: "/silver", label: "Silver" },
  { href: "/bridal", label: "Bridal" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 md:h-24 items-center justify-between px-4">
        <Link href="/" className="group flex items-center space-x-2">
          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center border-2 border-primary text-primary transition-transform group-hover:scale-105">
            <span className="text-xl md:text-2xl font-bold font-headline">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-headline font-bold tracking-widest text-primary">
              RAMESH
            </span>
            <span className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              Jewellers
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-6 lg:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-6">
            Inquiry
          </Button>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-secondary border-primary/20 p-0 w-[300px]">
                <SheetHeader className="p-8 border-b border-primary/10">
                  <SheetTitle className="text-primary font-headline text-2xl tracking-widest">MENU</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-8 space-y-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors uppercase tracking-[0.2em]"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-black mt-4 rounded-none h-12 uppercase tracking-widest font-bold">
                    Quick Inquiry
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
