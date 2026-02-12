
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const detailedServices = [
  {
    title: "Bespoke Jewelry Design",
    description: "Start with an idea, leave with a legacy. Our custom design process includes high-resolution 3D renderings and careful gemstone selection to ensure the final piece is exactly what you envisioned.",
    image: PlaceHolderImages.find(img => img.id === 'service-custom'),
    features: ["Initial Sketching", "3D CAD Modeling", "Stone Sourcing", "Hand-Finishing"]
  },
  {
    title: "Restoration & Repair",
    description: "Whether it's a simple chain soldering or a complex restoration of a century-old antique, our bench jewelers treat every piece with the utmost care and precision.",
    image: PlaceHolderImages.find(img => img.id === 'service-repair'),
    features: ["Ring Resizing", "Prong Re-tipping", "Stone Resetting", "Clasp Replacement"]
  },
  {
    title: "Professional Spa & Cleaning",
    description: "Jewelry should always shine. Our professional spa service includes ultrasonic cleaning, steam cleaning, and a high-polish finish to restore the original luster of your gold and diamonds.",
    image: PlaceHolderImages.find(img => img.id === 'service-cleaning'),
    features: ["Ultrasonic Bath", "Steam Cleaning", "Rhodium Plating", "Safety Inspections"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <header className="bg-secondary text-primary-foreground py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-80 max-w-2xl mx-auto font-light">
              Beyond the showroom, we offer comprehensive expertise to care for your jewelry and create new masterpieces.
            </p>
          </div>
        </header>

        <section className="py-24">
          <div className="container mx-auto px-4 space-y-32">
            {detailedServices.map((service, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
                <div className="w-full md:w-1/2 relative h-[400px] group overflow-hidden">
                  {service.image && (
                    <Image 
                      src={service.image.imageUrl}
                      alt={service.image.description}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint={service.image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary">{service.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4 pt-4">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2 text-secondary font-medium">
                        <CheckCircle2 className="text-primary" size={20} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
