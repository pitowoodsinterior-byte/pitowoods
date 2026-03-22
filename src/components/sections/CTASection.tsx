import { ArrowRight, Phone } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-peacock-700 via-teal-600 to-navy-700 dark:from-peacock-900 dark:via-teal-900 dark:to-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute w-96 h-96 bg-white blur-3xl -top-20 -left-20 animate-liquidFloat"></div>
        <div className="absolute w-96 h-96 bg-white blur-3xl -bottom-20 -right-20 animate-liquidFloat" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-80 h-80 bg-white blur-3xl top-1/2 right-1/4 animate-morphBounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-peacock-200 text-sm uppercase tracking-widest font-semibold mb-4">Start Today</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6">
              Your Dream Home Starts Here
            </h2>
            <p className="text-xl text-peacock-100 mb-10 max-w-3xl mx-auto">
              Let our century of expertise transform your space into something extraordinary.
              Book your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto justify-center bg-white text-peacock-700 hover:bg-peacock-50 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-105 flex items-center space-x-2 shadow-xl"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+919600118359"
                className="w-full sm:w-auto justify-center border-2 border-white/80 text-white hover:bg-white hover:text-peacock-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105 flex items-center space-x-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
