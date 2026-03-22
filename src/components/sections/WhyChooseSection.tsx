import { Shield, Award, DollarSign, Clock, Users, Wrench } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: 'Since 1980 Legacy',
      description: '45+ years of trusted craftsmanship and design excellence',
    },
    {
      icon: Shield,
      title: 'In-house Quality Control',
      description: 'Own manufacturing facility ensures superior quality standards',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear cost breakdowns with no hidden charges or surprises',
    },
    {
      icon: Clock,
      title: 'On-time Delivery',
      description: 'Committed timelines with dedicated project tracking',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ skilled designers and craftsmen at your service',
    },
    {
      icon: Wrench,
      title: 'Post-Installation Support',
      description: 'Comprehensive warranty and after-sales service',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-peacock-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp">
          <SectionTitle
            subtitle="Our Promise"
            title="Why Homeowners Trust Us for Generations"
            description="Quality, integrity, and excellence delivered through 45+ years of service"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} animation="scaleIn" delay={index * 120}>
              <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-peacock-100 dark:bg-peacock-900/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <reason.icon className="w-12 h-12 text-peacock-700 dark:text-peacock-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
