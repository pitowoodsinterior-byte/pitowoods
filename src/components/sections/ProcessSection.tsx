import { MessageSquare, Home, Palette, Package, Hammer, CheckCircle } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Free Consultation & Design Brief',
      description: 'Share your vision, requirements, and budget with our design experts',
    },
    {
      icon: Home,
      title: 'Site Visit & Measurements',
      description: 'Accurate measurements and site assessment by our technical team',
    },
    {
      icon: Palette,
      title: '3D Design & Cost Estimate',
      description: 'Photorealistic 3D designs with detailed, transparent pricing',
    },
    {
      icon: Package,
      title: 'Material Finalization',
      description: 'Choose from premium materials, finishes, and hardware options',
    },
    {
      icon: Hammer,
      title: 'Manufacturing & Installation',
      description: 'In-house manufacturing followed by expert installation',
    },
    {
      icon: CheckCircle,
      title: 'Quality Check & Handover',
      description: 'Thorough inspection and final handover with warranty',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp">
          <SectionTitle
            subtitle="How We Work"
            title="A Simple, Transparent Process"
            description="From consultation to completion, we ensure a seamless experience at every step"
          />
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-peacock-700 via-peacock-500 to-peacock-700 dark:from-peacock-600 dark:via-peacock-400 dark:to-peacock-600 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <AnimatedSection key={index} animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'} delay={index * 150}>
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-peacock-700 dark:bg-peacock-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  <div className="mb-4 text-peacock-700 dark:text-peacock-500">
                    <step.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
