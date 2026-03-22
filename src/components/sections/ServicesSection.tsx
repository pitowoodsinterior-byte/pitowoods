import { Home, Utensils, Sofa, Bed, Building, Wrench, HardHat, Flame } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';

export function ServicesSection() {
  const services = [
    {
      icon: Utensils,
      title: 'Modular Kitchens',
      description: 'Custom layouts, premium materials, ergonomic designs with modern finishes',
      features: ['Smart Storage', 'Premium Hardware', 'Custom Layouts'],
      image: '/images/img_1.jpeg', // Using a direct image from the requested Pexels search
    },
    {
      icon: Home,
      title: 'Full Home Interiors',
      description: 'Complete home transformation from living to bedroom spaces',
      features: ['Turnkey Solutions', 'End-to-End Service', 'Single Timeline'],
      image: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2024/09/02081635/indian-house-interior-design-photos-of-mandala-art-on-the-wall.jpg',
    },
    {
      icon: Sofa,
      title: 'Living & Dining',
      description: 'Elegant spaces designed for comfort and social gatherings',
      features: ['Custom Furniture', 'Space Planning', 'Lighting Design'],
      image: 'https://st.hzcdn.com/simgs/5811713f0b2a389b_16-0004/home-design.jpg',
    },
    {
      icon: Bed,
      title: 'Bedrooms & Wardrobes',
      description: 'Personalized sanctuaries with optimized storage solutions',
      features: ['Walk-in Closets', 'Built-in Storage', 'Luxury Finishes'],
      image: 'https://i-media.vyaparify.com/vcards/blogs/92713/elegant-white-wardrobe-designs-for-bedroom.jpg',
    },
    {
      icon: Building,
      title: 'Commercial Interiors',
      description: 'Professional office and retail space design solutions',
      features: ['Brand Integration', 'Productivity Focus', 'Modern Aesthetics'],
      image: '/images/img_2.jpg', // Commercial
    },
    {
      icon: Wrench,
      title: 'Renovation & Turnkey',
      description: 'Complete renovation services from concept to completion',
      features: ['Project Management', 'Quality Control', 'Timely Delivery'],
      image: '/images/img_8.jpeg',
    },
    {
      icon: HardHat,
      title: 'Civil Works',
      description: 'Structural and civil work to build the foundation of your dream space',
      features: ['Flooring & Tiling', 'False Ceiling', 'Masonry & Plastering'],
      image: 'https://www.architectureideas.info/wp-content/uploads/2013/09/houseconstruction-india.jpg',
    },
    {
      icon: Flame,
      title: 'Pooja Room',
      description: 'Beautifully crafted sacred spaces that blend tradition with elegant design',
      features: ['Mandir Woodwork', 'Marble & Stone', 'Sacred Lighting'],
      image: 'https://interioreradotin.files.wordpress.com/2019/08/pooja-room_7-browse-for-unlimited-indian-home-design-and-remodeling-ideas-remodeling-pooja-rooms-puja-rooms.jpg',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="zoomIn">
          <SectionTitle
            subtitle="What We Do"
            title="Complete Interior Solutions Under One Roof"
            description="From modular kitchens to full home makeovers, we bring your vision to life with precision and care"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="zoomIn" delay={index * 100}>
              <Card>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-peacock-100 dark:bg-peacock-900/30 text-peacock-700 dark:text-peacock-500 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
