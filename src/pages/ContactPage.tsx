import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '019ca8fb-f38a-4b2b-afaa-229343181571',
          ...formData
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Click to Call'],
      action: 'tel:+919600118359',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['pitowoods.interior@gmail.com'],
      action: 'mailto:pitowoods.interior@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: ['43 Balaji Nagar main road', ' Kolathur, Chennai 600099'],
      action: 'https://maps.app.goo.gl/5Xns2tsnyebvNShm7?g_st=aw',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon – Sat: 10:00 AM – 7:00 PM', 'Sunday: By Appointment Only'],
      action: null,
    },
  ];

  return (
    <div className="pt-24 bg-white dark:bg-gray-900">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              subtitle="Get In Touch"
              title="Start Your Design Journey"
              description="Contact us today for a free consultation and let's bring your vision to life"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <AnimatedSection>
              <Card hover={false}>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">We'll respond within 1 business day.</p>
                  
                  {status === 'success' && (
                    <div className="mb-6 p-4 bg-peacock-50 dark:bg-peacock-900/20 text-peacock-700 dark:text-peacock-400 rounded-xl border border-peacock-200 dark:border-peacock-800 text-sm font-medium animate-fadeIn">
                      ✅ Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800 text-sm font-medium animate-fadeIn">
                      ❌ {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-peacock-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all outline-none"
                        placeholder="Your Full Name"
                        disabled={status === 'loading'}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-peacock-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all outline-none"
                          placeholder="you@example.com"
                          disabled={status === 'loading'}
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-peacock-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all outline-none"
                          placeholder="+91 98765 43210"
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-peacock-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all outline-none"
                        disabled={status === 'loading'}
                      >
                        <option value="">Select a service</option>
                        <option value="Modular Kitchen">Modular Kitchen</option>
                        <option value="Full Home Interior">Full Home Interior</option>
                        <option value="Living & Dining">Living &amp; Dining</option>
                        <option value="Bedroom & Wardrobe">Bedroom &amp; Wardrobe</option>
                        <option value="Commercial Interior">Commercial Interior</option>
                        <option value="Renovation & Turnkey">Renovation &amp; Turnkey</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-peacock-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all resize-none outline-none"
                        placeholder="Tell us about your project..."
                        disabled={status === 'loading'}
                      ></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full flex items-center justify-center space-x-2" disabled={status === 'loading'}>
                      <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                      <Send className={`w-5 h-5 ${status === 'loading' ? 'animate-bounce' : ''}`} />
                    </Button>
                  </form>
                </div>
              </Card>
            </AnimatedSection>

            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={index}>
                  <Card>
                    <div className="p-6 flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-peacock-100 dark:bg-peacock-900/30 rounded-xl flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-peacock-700 dark:text-peacock-400" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 dark:text-gray-400 text-sm">
                            {info.action && idx === 0 ? (
                              <a
                                href={info.action}
                                className="hover:text-peacock-600 dark:hover:text-peacock-400 transition-colors font-medium"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection>
            <Card hover={false} className="overflow-hidden">
              <div className="aspect-[21/9] w-full">
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=46GF%2BFWW%20Mahendra%20Enterprises,%20Balaji%20Nagar,%20Kolathur,%20Chennai,%20Tamil%20Nadu%20600099&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pitowoods Location — Chennai, India"
                ></iframe>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
