import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-primary py-24 border-t border-primary/20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <div className="flex flex-col">
            <span className="text-2xl font-headline font-bold tracking-widest">
              RAMESH
            </span>
            <span className="text-[12px] tracking-[0.4em] uppercase text-muted-foreground">
              Jewellers
            </span>
          </div>
          <p className="text-muted-foreground max-w-xs leading-relaxed font-light text-sm">
            Excellence in jewelry since 1985. We define luxury through tradition and meticulous craftsmanship.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold">Quick Links</h4>
          <ul className="space-y-4 text-sm font-light text-muted-foreground">
            <li><Link href="/about" className="hover:text-primary transition-colors uppercase tracking-widest">About Us</Link></li>
            <li><Link href="/gold" className="hover:text-primary transition-colors uppercase tracking-widest">Gold Collection</Link></li>
            <li><Link href="/silver" className="hover:text-primary transition-colors uppercase tracking-widest">Silver Collection</Link></li>
            <li><Link href="/bridal" className="hover:text-primary transition-colors uppercase tracking-widest">Bridal Sets</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold">Support</h4>
          <ul className="space-y-4 text-sm font-light text-muted-foreground">
            <li><Link href="/gallery" className="hover:text-primary transition-colors uppercase tracking-widest">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors uppercase tracking-widest">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors uppercase tracking-widest">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors uppercase tracking-widest">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold">Visit Atelier</h4>
          <ul className="space-y-4 text-sm font-light text-muted-foreground">
            <li className="flex items-start space-x-3">
              <MapPin className="text-primary mt-1 shrink-0" size={16} />
              <span>123 Gold Bazaar Street, Diamond District, Mumbai - 400001</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-primary shrink-0" size={16} />
              <span>+91 22 1234 5678</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-primary shrink-0" size={16} />
              <span>concierge@rameshjewellers.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-24 pt-8 border-t border-primary/10 text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        © {new Date().getFullYear()} Ramesh Jewellers Online. All rights reserved.
      </div>
    </footer>
  );
}