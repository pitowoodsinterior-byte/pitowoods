import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <span className="text-3xl text-peacock-400">✦</span>
              <div>
                <h3 className="text-xl font-bold font-serif text-white tracking-wide">Pitowoods</h3>
                <p className="text-xs text-peacock-400 uppercase tracking-widest font-sans">Est. 1980</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Crafting beautiful, functional spaces for 45+ years. Where quality craftsmanship meets modern design excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mahendran_interiors?igsh=MWxlam9lOGJ2dnFiMQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-peacock-700 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:pitowoods.interior@gmail.com"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-peacock-700 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">About Us</a></li>
              <li><a href="#services" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Our Services</a></li>
              <li><a href="#process" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Our Process</a></li>
              <li><a href="#projects" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Portfolio</a></li>
              <li><a href="#reviews" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#modular-kitchens" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Modular Kitchens</a></li>
              <li><a href="#full-home" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Full Home Interiors</a></li>
              <li><a href="#living-dining" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Living &amp; Dining</a></li>
              <li><a href="#bedrooms" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Bedrooms &amp; Wardrobes</a></li>
              <li><a href="#commercial" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Commercial Interiors</a></li>
              <li><a href="#renovation" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Renovation &amp; Turnkey</a></li>
              <li><a href="#civil-works" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Civil Works</a></li>
              <li><a href="#pooja-room" className="hover:text-peacock-400 transition-colors hover:translate-x-1 inline-block duration-200">Pooja Room</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-peacock-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">43 Balaji Nagar main road,<br />Kolathur, Chennai 99</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-peacock-400 flex-shrink-0" />
                <a href="tel:+919600118359" className="hover:text-peacock-400 transition-colors">Click to Call</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-peacock-400 flex-shrink-0" />
                <a href="mailto:pitowoods.interior@gmail.com" className="hover:text-peacock-400 transition-colors break-all">pitowoods.interior@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-sm text-center md:text-left text-gray-500">
              © {currentYear} Pitowoods. All rights reserved. Crafting Beautiful Homes Since 1980.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="hover:text-peacock-400 transition-colors text-gray-500">Privacy Policy</a>
              <a href="#terms" className="hover:text-peacock-400 transition-colors text-gray-500">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
