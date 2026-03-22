import { Sparkles } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';

export function MaterialsSection() {
  const materials = [
    {
      name: 'Premium Wood',
      description: 'Solid teak, oak, and engineered wood',
      icon: '🪵',
      pattern: 'wood',
    },
    {
      name: 'Metal Frames',
      description: 'Stainless steel and aluminum structures',
      icon: '⚙️',
      pattern: 'metal',
    },
    {
      name: 'Luxury Fabrics',
      description: 'High-grade upholstery and textiles',
      icon: '🧵',
      pattern: 'fabric',
    },
    {
      name: 'Laminations',
      description: 'Durable high-pressure laminates',
      icon: '📐',
      pattern: 'laminate',
    },
    {
      name: 'Acrylic Finishes',
      description: 'Glossy acrylic and glass surfaces',
      icon: '✨',
      pattern: 'acrylic',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-peacock-50/30 to-teal-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,160,160,.1) 35px, rgba(0,160,160,.1) 70px)`
             }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-peacock-100 dark:bg-peacock-900/30 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-peacock-700 dark:text-peacock-400" />
              <span className="text-peacock-700 dark:text-peacock-400 font-semibold text-sm uppercase tracking-wide">
                Premium Quality
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-peacock-700 dark:from-white dark:to-peacock-400 bg-clip-text text-transparent mb-3">
              Materials That Define Excellence
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We source only the finest materials to ensure durability, beauty, and longevity in every project
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {materials.map((material, index) => (
            <AnimatedSection
              key={index}
              animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
            >
              <div
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border-2 border-transparent hover:border-peacock-500 dark:hover:border-peacock-400"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                  material.pattern === 'wood' ? 'bg-gradient-to-br from-amber-600 to-amber-800' :
                  material.pattern === 'metal' ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                  material.pattern === 'fabric' ? 'bg-gradient-to-br from-purple-400 to-pink-400' :
                  material.pattern === 'laminate' ? 'bg-gradient-to-br from-blue-400 to-cyan-400' :
                  'bg-gradient-to-br from-peacock-400 to-teal-400'
                }`}></div>

                <div className="absolute -top-10 -right-10 w-24 h-24 bg-peacock-100 dark:bg-peacock-900/20 rounded-full group-hover:scale-150 transition-transform duration-500 animate-blob"></div>

                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {material.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {material.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {material.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-peacock-600 via-teal-600 to-peacock-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeIn">
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-peacock-700/10 to-teal-700/10 dark:from-peacock-600/20 dark:to-teal-600/20 rounded-2xl p-6 backdrop-blur-sm border border-peacock-200 dark:border-peacock-700">
              <p className="text-sm text-gray-700 dark:text-gray-300 max-w-3xl">
                <span className="font-semibold text-peacock-700 dark:text-peacock-400">Quality Assured:</span> All materials are sourced from certified suppliers and undergo rigorous quality checks at our in-house facility
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
