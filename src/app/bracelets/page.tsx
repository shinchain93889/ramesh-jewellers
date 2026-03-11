import { CategorySection } from '@/components/sections/category-section';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function BraceletsPage() {
  return (
    <CategorySection
      id="bracelets"
      title="Bracelets"
      banner="/goldbangle.jpg"
      description="Elegant bracelets to complement your look, crafted with precision and care."
      products={PlaceHolderImages.filter(img => img.category === 'bracelets' || img.category === 'bangles')}
    />
  );
}
