
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export function ProjectsPage() {
  const projects = [
    {
      type: 'Residential',
      title: 'Modern Villa Interior',
      location: 'Bangalore',
      date: '2026',
      area: '3500 sq.ft',
      description: 'Complete home interior with contemporary design, featuring open-plan living, modular kitchen, and luxury bedrooms.',
      images: [
        '/images/img_14.jpeg',
        '/images/img_10.jpeg',
        '/images/img_12.jpeg',
      ],
    },
    {
      type: 'Residential',
      title: 'Luxury Apartment Renovation',
      location: 'Mumbai',
      date: '2026',
      area: '2200 sq.ft',
      description: 'Full renovation of a luxury apartment with Italian marble, designer lighting, and smart home integration.',
      images: [
        '/images/img_11.jpeg',
        '/images/img_15.jpeg',
        '/images/img_1.jpeg',
      ],
    },
    {
      type: 'Commercial',
      title: 'Tech Startup Office',
      location: 'Gurgaon',
      date: '2023',
      area: '5000 sq.ft',
      description: 'Modern office space with collaborative work areas, private cabins, and a vibrant breakout zone.',
      images: [
        '/images/img_13.jpeg',
        '/images/img_16.jpeg',
        '/images/img_20.jpeg',
      ],
    },
    {
      type: 'Residential',
      title: 'Heritage Home Restoration',
      location: 'Delhi',
      date: '2023',
      area: '4000 sq.ft',
      description: 'Careful restoration of a 1950s home, blending original architectural elements with modern amenities.',
      images: [
        '/images/img_19.jpeg',
        '/images/img_21.jpeg',
        '/images/img_18.jpeg',
      ],
    },
    {
      type: 'Commercial',
      title: 'Boutique Retail Store',
      location: 'Chennai',
      date: '2023',
      area: '1500 sq.ft',
      description: 'High-end retail space with custom display units, elegant lighting, and a sophisticated customer experience.',
      images: [
        '/images/img_7.jpeg',
        '/images/img_22.jpeg',
        '/images/img_13.jpeg',
      ],
    },
    {
      type: 'Residential',
      title: 'Compact Smart Apartment',
      location: 'Pune',
      date: '2023',
      area: '1200 sq.ft',
      description: 'Space-optimized design for a compact apartment with multifunctional furniture and smart storage solutions.',
      images: [
        '/images/img_10.jpeg',
        '/images/img_15.jpeg',
        '/images/img_12.jpeg',
      ],
    },
    {
      type: 'Residential',
      title: 'Bohemian Beach House',
      location: 'Goa',
      date: '2024',
      area: '2800 sq.ft',
      description: 'A relaxed, naturally lit home filled with rattan furniture, organic textures, and coastal elements.',
      images: [
        '/images/img_new_5.jpg',
        '/images/img_new_3.jpg',
        '/images/img_new_8.jpg',
      ],
    },
  ];

  return (
    <div className="pt-24 bg-white dark:bg-gray-900">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              subtitle="Our Work"
              title="Featured Projects"
              description="Explore our portfolio of completed residential and commercial projects"
            />
          </AnimatedSection>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <AnimatedSection key={index}>
                <Card hover={false} className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {project.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative overflow-hidden ${imgIndex === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                          }`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - ${imgIndex + 1}`}
                          className="w-full h-64 lg:h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-peacock-100 dark:bg-peacock-900/30 text-peacock-700 dark:text-peacock-400 px-4 py-1 rounded-full text-sm font-semibold">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
