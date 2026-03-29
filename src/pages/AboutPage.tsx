import { Target, Eye, Award, Users, TrendingUp, Heart } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export function AboutPage() {
  const values = [
    { icon: Award, title: 'Quality', description: 'Uncompromising standards in materials and craftsmanship' },
    { icon: Heart, title: 'Integrity', description: 'Honest pricing and transparent processes' },
    { icon: Users, title: 'Customer Focus', description: 'Your vision is our priority' },
    { icon: TrendingUp, title: 'Innovation', description: 'Blending heritage with modern technology' },
  ];

  return (
    <div className="pt-24 bg-white dark:bg-gray-900">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              subtitle="Our Story"
              title="A Legacy Built Since 1980"
              description="45+ years of crafting beautiful, functional spaces for families across generations"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  What started in 1980 as a small woodworking workshop has grown into a
                  full-service interior design company spanning three generations. Our
                  journey reflects India's own transformation – from traditional craftsmanship
                  to embracing modern design while never losing sight of quality and integrity.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today, we combine our heritage of fine craftsmanship with cutting-edge
                  technology, offering modular kitchens, complete home interiors, and
                  commercial spaces that stand the test of time.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  With over 10,000 homes designed and an in-house manufacturing facility,
                  we maintain control over every aspect of quality – from raw material
                  selection to final installation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <img
                  src="/images/img_3.jpg"
                  alt="Our workshop"
                  loading="lazy"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-peacock-700 to-teal-700 dark:from-peacock-600 dark:to-teal-600 text-white p-8 rounded-xl shadow-xl">
                  <p className="text-4xl font-bold">45+</p>
                  <p className="text-lg">Years of Excellence</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="bg-gradient-to-br from-peacock-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl hover:shadow-2xl transition-all duration-300">
                <Target className="w-12 h-12 text-peacock-700 dark:text-peacock-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To design homes that balance beauty, functionality, and longevity. We believe
                  that great design should enhance daily living while standing the test of time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-peacock-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl hover:shadow-2xl transition-all duration-300">
                <Eye className="w-12 h-12 text-peacock-700 dark:text-peacock-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To be India's most trusted interior brand, blending our century-old heritage
                  with innovation, setting new standards in design excellence and customer service.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionTitle
              title="Our Core Values"
              description="Principles that have guided us for over 45 years"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-peacock-200 dark:border-peacock-700"
                >
                  <value.icon className="w-12 h-12 text-peacock-700 dark:text-peacock-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
