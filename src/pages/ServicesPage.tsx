import { Check } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function ServicesPage() {
  const services = [
    {
      title: 'Modular Kitchens',
      description: 'Transform your kitchen into a chef paradise with our custom modular solutions',
      features: [
        'Smart storage solutions and pull-out systems',
        'Premium hardware from leading brands',
        'Custom layouts tailored to your space',
        'Wide range of finishes and materials',
        'Ergonomic design for comfort',
        'Integrated appliances',
      ],
      image: '/images/img_10.jpeg',
    },
    {
      title: 'Full Home Interiors',
      description: 'Complete home transformation with end-to-end design and execution services',
      features: [
        'Living room, bedroom, dining, and more',
        'Coordinated design across all spaces',
        'Single point of contact',
        'Unified timeline and execution',
        'Storage-optimized solutions',
        'Furniture and decor sourcing',
      ],
      image: '/images/img_14.jpeg',
    },
    {
      title: 'Living & Dining Spaces',
      description: 'Create elegant, functional spaces perfect for daily living and entertaining',
      features: [
        'Custom furniture design',
        'Space planning and layout',
        'Lighting design and installation',
        'Color consultation',
        'Statement pieces and accents',
        'Multi-functional furniture',
      ],
      image: '/images/img_11.jpeg',
    },
    {
      title: 'Bedrooms & Wardrobes',
      description: 'Personalized sanctuaries with smart storage and luxury finishes',
      features: [
        'Walk-in closet designs',
        'Built-in wardrobe systems',
        'Bed with storage options',
        'Vanity and dressing areas',
        'Ambient lighting solutions',
        'Premium finishes and materials',
      ],
      image: '/images/img_12.jpeg',
    },
    {
      title: 'Commercial Interiors',
      description: 'Professional office and retail spaces that reflect your brand identity',
      features: [
        'Brand-aligned design',
        'Productivity-focused layouts',
        'Ergonomic workstations',
        'Meeting room setups',
        'Reception and common areas',
        'Retail display solutions',
      ],
      image: '/images/img_13.jpeg',
    },
    {
      title: 'Renovation & Turnkey Projects',
      description: 'Complete renovation services from concept to completion with single-point responsibility',
      features: [
        'Full project management',
        'Civil and structural work',
        'Electrical and plumbing',
        'False ceiling and flooring',
        'Painting and finishing',
        'Quality control and handover',
      ],
      image: '/images/img_8.jpeg',
    },
  ];

  return (
    <div className="pt-24 bg-white dark:bg-gray-900">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              subtitle="What We Offer"
              title="Comprehensive Interior Solutions"
              description="From concept to completion, we handle every aspect of your interior project with precision and care"
            />
          </AnimatedSection>

          <div className="space-y-16">
            {services.map((service, index) => {
              const id = ['modular-kitchens', 'full-home', 'living-dining', 'bedrooms', 'commercial', 'renovation'][index];
              return (
              <AnimatedSection key={index}>
                <div id={id}>
                  <Card hover={false} className="overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>
                    <div className={`p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-peacock-600 dark:text-peacock-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button href="#contact">Get Quote</Button>
                    </div>
                  </div>
                </Card>
                </div>
              </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
