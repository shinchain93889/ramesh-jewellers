
import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-headline font-bold text-primary">RAMESH JEWELLERS</h3>
          <p className="text-muted-foreground max-w-xs leading-relaxed">
            Crafting elegance since 1985. We pride ourselves on tradition, quality, and timeless designs.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-lg font-headline font-semibold text-primary">Contact Information</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin className="text-primary mt-1 shrink-0" size={18} />
              <span className="text-muted-foreground">123 Gold Bazaar Street, Diamond District, Mumbai - 400001</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-primary shrink-0" size={18} />
              <span className="text-muted-foreground">+91 22 1234 5678</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-primary shrink-0" size={18} />
              <span className="text-muted-foreground">info@rameshjewellers.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-headline font-semibold text-primary">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ramesh Jewellers Online. All rights reserved.
      </div>
    </footer>
  );
}
