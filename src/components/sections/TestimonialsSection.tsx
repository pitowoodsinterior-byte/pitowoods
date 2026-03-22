import { Star, Quote } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Karthik Rajan',
      location: 'Anna Nagar, Chennai',
      rating: 5,
      text: 'Pitowoods transformed our entire home in Anna Nagar beautifully. The modular kitchen is stunning and every corner reflects quality craftsmanship. Truly the best interior team in Chennai!',
      project: 'Full Home Interior',
    },
    {
      name: 'Meera Sundaram',
      location: 'Velachery, Chennai',
      rating: 5,
      text: "I had my living and dining area redesigned by Pitowoods and I couldn't be happier. They understood our Tamil home sensibilities perfectly and delivered a modern yet warm space. Highly recommend!",
      project: 'Living & Dining',
    },
    {
      name: 'Suresh Balaji',
      location: 'Adyar, Chennai',
      rating: 5,
      text: 'Got our office done by Pitowoods in record time without compromising on quality. The team was professional, punctual and the final result was beyond our expectations. Very proud to show it off!',
      project: 'Commercial Interior',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="scaleIn">
          <SectionTitle
            subtitle="Client Stories"
            title="Loved by Homeowners"
          />
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-peacock-500 text-peacock-500" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">4.8</span>
            <span className="text-gray-600 dark:text-gray-400">Google Rating</span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="rotateIn" delay={index * 100}>
              <Card className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <Quote className="w-10 h-10 text-peacock-700 dark:text-peacock-500 mb-4 opacity-50" />
                  <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-peacock-500 text-peacock-500" />
                    ))}
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.location}
                    </p>
                    <p className="text-xs text-peacock-700 dark:text-peacock-500 mt-1">
                      {testimonial.project}
                    </p>
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
