import Image from 'next/image';

interface CategorySectionProps {
  id: string;
  title: string;
  banner: string;
  description: string;
  products: { imageUrl: string; description: string }[];
}

export function CategorySection({ id, title, banner, description, products }: CategorySectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <Image
              src={banner}
              alt={title + ' Banner'}
              width={900}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-[300px] md:h-[400px] border-4 border-gold"
              style={{ background: 'linear-gradient(90deg, #fffbe6 0%, #f5e9c7 100%)' }}
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-gold mb-4">{title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">{description}</p>
            <div className="w-16 h-1 bg-gold mx-auto md:mx-0 mb-2"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-2 border border-gold/30 hover:shadow-gold transition-all">
              <Image
                src={product.imageUrl}
                alt={product.description}
                width={300}
                height={300}
                className="rounded-md object-cover w-full h-48 border border-gold/20"
              />
              <div className="mt-2 text-center text-sm text-foreground font-medium">{product.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
