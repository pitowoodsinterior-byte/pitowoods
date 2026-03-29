import { Award, Users, Building2, TrendingUp } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';

export function LegacySection() {
  const milestones = [
    { year: '1980', event: 'Founded with traditional woodwork craftsmanship' },
    { year: '1995', event: 'Expanded to complete home furniture solutions' },
    { year: '2005', event: 'Pioneered modular kitchen designs in the region' },
    { year: '2015', event: 'Launched full-service interior design studio' },
    { year: '2026', event: '45+ years of excellence - 10,000+ homes completed' },
  ];

  const highlights = [
    { icon: Award, title: '45+ Years', description: 'Of Interior Excellence' },
    { icon: Users, title: '5,000+', description: 'Happy Homeowners' },
    { icon: Building2, title: 'Multi-City', description: 'Presence & Service' },
    { icon: TrendingUp, title: 'In-house', description: 'Manufacturing Unit' },
  ];

  return (
    <section id="legacy" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            subtitle="Our Heritage"
            title="45 Years of Interior Excellence"
            description="Founded in 1980, our journey spans over 45 years in home décor and interior craftsmanship"
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 relative">
              <div className="absolute top-0 bottom-0 left-[38px] w-0.5 bg-gradient-to-b from-peacock-600 via-teal-500 to-peacock-600 dark:from-peacock-500 dark:via-teal-400 dark:to-peacock-500"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 z-10">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-peacock-600 to-teal-600 dark:from-peacock-500 dark:to-teal-500 flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:animate-jelly">
                        <span className="text-white font-bold text-lg">
                          {milestone.year.slice(-2)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:animate-jelly border-2 border-peacock-200 dark:border-peacock-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-peacock-100 dark:bg-peacock-900/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500 animate-blob"></div>
                        <div className="relative z-10">
                          <span className="text-3xl font-bold bg-gradient-to-r from-peacock-600 to-teal-600 bg-clip-text text-transparent mb-2 block">
                            {milestone.year}
                          </span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                            {milestone.event}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-peacock-400 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-blob"></div>
              <img
                src="https://goodhomes.wwmindia.com/content/2022/dec/varadarajan-house-121671774488.jpg"
                alt="Heritage craftsmanship"
                loading="lazy"
                className="relative rounded-2xl shadow-2xl w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm sm:w-auto sm:left-8 sm:translate-x-0 sm:bottom-8 text-white text-center sm:text-left">
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 flex flex-col items-center sm:items-start">
                  <p className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">1980 - 2026</p>
                  <p className="text-lg sm:text-xl">Crafting Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-peacock-50 to-stone-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer hover:animate-jelly group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-peacock-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <item.icon className="w-12 h-12 text-peacock-700 dark:text-peacock-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
