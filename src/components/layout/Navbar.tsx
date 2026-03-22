import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface NavLink {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    submenu: [
      { label: 'Modular Kitchens', href: '#modular-kitchens' },
      { label: 'Full Home Interiors', href: '#full-home' },
      { label: 'Living & Dining', href: '#living-dining' },
      { label: 'Bedrooms & Wardrobes', href: '#bedrooms' },
      { label: 'Commercial Interiors', href: '#commercial' },
      { label: 'Renovation & Turnkey', href: '#renovation' },
      { label: 'Civil Works', href: '#civil-works' },
      { label: 'Pooja Room', href: '#pooja-room' },
    ],
  },
  {
    label: 'Designs',
    href: '#designs',
    submenu: [
      { label: 'Kitchen Designs', href: '#kitchen-designs' },
      { label: 'Living Room Designs', href: '#living-designs' },
      { label: 'Bedroom Designs', href: '#bedroom-designs' },
      { label: 'Office Designs', href: '#office-designs' },
    ],
  },
  { label: 'Our Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact Us', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isLinkActive = (link: NavLink) => {
    if (link.href === activeHash) return true;
    if (link.submenu) return link.submenu.some(sub => sub.href === activeHash);
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <span className="text-2xl text-peacock-600 dark:text-peacock-400 transition-transform group-hover:rotate-12 duration-300">✦</span>
            <div className="leading-tight">
              <span className="text-xl font-bold font-serif text-peacock-700 dark:text-peacock-400 transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400 tracking-wide">
                Pitowoods
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-peacock-500 dark:text-peacock-500 font-sans font-medium">Since 1980</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={link.href}
                  className={`lg:text-[13px] xl:text-sm font-medium transition-colors relative flex items-center gap-1 py-2 ${isLinkActive(link)
                    ? 'text-peacock-700 dark:text-peacock-400'
                    : 'text-gray-700 dark:text-gray-200 hover:text-peacock-600 dark:hover:text-peacock-400'
                    }`}
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-peacock-600 to-teal-600 transition-all duration-300 ${isLinkActive(link) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
                {link.submenu && activeSubmenu === link.label && (
                  <div className="absolute top-full left-0 mt-3 w-60 bg-white dark:bg-gray-800 rounded-xl shadow-2xl py-2 animate-slideUp border border-peacock-100 dark:border-peacock-800">
                    {link.submenu.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-peacock-50 dark:hover:bg-peacock-900/30 hover:text-peacock-700 dark:hover:text-peacock-400 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center lg:space-x-2 xl:space-x-4">
            <a
              href="tel:+919600118359"
              className="flex items-center space-x-1.5 lg:text-[13px] xl:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-peacock-600 dark:hover:text-peacock-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              <span>Call Now</span>
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>
            <a
              href="#contact"
              className="bg-gradient-to-r from-peacock-600 to-teal-600 hover:from-peacock-700 hover:to-teal-700 text-white lg:px-4 xl:px-5 py-2 xl:py-2.5 rounded-lg lg:text-[13px] xl:text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-2">
            <a href="tel:+919600118359" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Call us">
              <Phone className="w-5 h-5 text-peacock-600 dark:text-peacock-400" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto animate-fadeIn bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-t border-peacock-100 dark:border-peacock-900 px-4 py-6 z-40">
            <div className="flex flex-col space-y-1 pb-10">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className={`block py-2.5 px-3 rounded-lg font-medium transition-colors text-sm ${isLinkActive(link)
                      ? 'bg-peacock-50 dark:bg-peacock-900/30 text-peacock-700 dark:text-peacock-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-peacock-600 hover:bg-peacock-50/50 dark:hover:text-peacock-400'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.submenu && (
                    <div className="pl-4 space-y-0.5 mt-0.5">
                      {link.submenu.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block py-2 px-3 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-peacock-50 dark:hover:bg-peacock-900/20 hover:text-peacock-600 dark:hover:text-peacock-400 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100 dark:border-gray-800 mt-2">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-peacock-600 to-teal-600 hover:from-peacock-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all w-full block text-center shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
