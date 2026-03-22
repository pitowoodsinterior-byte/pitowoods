import { ArrowRight, Phone } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-peacock-50 via-teal-50 to-cyan-50 dark:from-navy-900 dark:via-navy-800 dark:to-black">
      <div className="absolute inset-0 bg-[url('/images/img_7.jpeg')] bg-cover bg-center opacity-15"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-peacock-50/60 dark:to-black/80"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-peacock-400/20 dark:bg-peacock-600/10 blur-3xl -top-20 -left-20 animate-liquidFloat"></div>
        <div className="absolute w-96 h-96 bg-teal-400/20 dark:bg-teal-600/10 blur-3xl -bottom-20 -right-20 animate-liquidFloat" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-72 h-72 bg-cyan-400/15 dark:bg-cyan-600/10 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-morphBounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fadeIn">
          <div className="inline-flex justify-center w-full sm:w-auto mb-4 sm:mb-6 animate-slideUp px-4 sm:px-0">
            <span className="inline-block max-w-full text-peacock-700 dark:text-peacock-400 font-semibold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest bg-peacock-100 dark:bg-peacock-900/40 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-lg border border-peacock-200 dark:border-peacock-800 text-center leading-snug">
              Since 1980 · 45+ Years of Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-gray-900 dark:text-white mb-6 leading-tight animate-slideUp">
            Designing Timeless
            <br />
            <span className="bg-gradient-to-r from-peacock-600 via-teal-600 to-navy-600 bg-clip-text text-transparent">
              Homes Since 1980
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeIn font-sans font-light">
            Blending heritage craftsmanship with modern modular interiors to create homes that last generations
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 animate-scaleIn w-full max-w-md sm:max-w-none mx-auto">
            <a
              href="tel:+919600118359"
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 flex items-center justify-center space-x-2 bg-gradient-to-r from-peacock-600 to-teal-600 text-white shadow-xl hover:shadow-peacock-500/50 border-4 border-white ring-4 ring-peacock-200 dark:ring-peacock-800"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-peacock-400 via-teal-400 to-peacock-400 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-500 -z-10"></div>
            </a>
            <a
              href="#designs"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 flex items-center justify-center space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-peacock-700 dark:text-peacock-400 shadow-xl border-2 border-peacock-200 dark:border-peacock-700"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '45+', label: 'Years Experience' },
              { number: '5,000+', label: 'Homes Designed' },
              { number: '50+', label: 'Expert Craftsmen' },
              { number: '4.8★', label: 'Customer Rating' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slideUp border border-peacock-200 dark:border-peacock-700 hover:animate-jelly cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-peacock-600 to-teal-600 bg-clip-text text-transparent mb-1 font-serif">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-peacock-400 dark:border-peacock-600 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-peacock-500 dark:bg-peacock-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
