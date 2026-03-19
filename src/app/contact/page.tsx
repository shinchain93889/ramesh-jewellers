
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactSection } from '@/components/sections/contact-section';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <header className="bg-secondary/20 text-foreground py-24 text-center border-b border-primary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6 text-primary">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              We would love to hear from you. Whether you have a question about a collection or want to start a custom project.
            </p>
          </div>
        </header>
        <ContactSection />

        {/* Simple Map Placeholder Section */}
        <section className="h-[400px] w-full bg-muted relative">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-lg italic">
            <div className="text-center">
              <p>Map Integration placeholder</p>
              <p className="text-sm">Ramesh Jewellers, Transit Camp (Rudrapur), Shamshan Ghat Road, Udham Singh Nagar</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
