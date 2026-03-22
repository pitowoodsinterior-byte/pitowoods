import { HeroSection } from '../components/sections/HeroSection';
import { LegacySection } from '../components/sections/LegacySection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { MaterialsSection } from '../components/sections/MaterialsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { GallerySection } from '../components/sections/GallerySection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CTASection } from '../components/sections/CTASection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <LegacySection />
      <ServicesSection />
      <MaterialsSection />
      <GallerySection />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
