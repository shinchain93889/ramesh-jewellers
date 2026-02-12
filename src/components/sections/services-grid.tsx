
import { Sparkles, Hammer, Scale, Droplets } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "Custom Design",
    description: "Work with our master craftsmen to bring your unique vision to life in a one-of-a-kind piece.",
    icon: Sparkles,
  },
  {
    title: "Professional Repairs",
    description: "Expert restoration and repair for your most cherished heirlooms and everyday pieces.",
    icon: Hammer,
  },
  {
    title: "Appraisals",
    description: "Certified appraisals for insurance, resale, or estate purposes by our experienced gemologists.",
    icon: Scale,
  },
  {
    title: "Deep Cleaning",
    description: "Complimentary professional ultrasonic cleaning and inspection to keep your jewelry shining.",
    icon: Droplets,
  }
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-secondary">Our Expertise</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="border-none shadow-none bg-transparent group hover:bg-white hover:shadow-xl transition-all duration-300 p-6 rounded-none">
              <CardHeader className="flex items-center justify-center pb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle className="text-xl font-headline font-bold text-secondary">{service.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
