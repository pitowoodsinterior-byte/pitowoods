import { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

type Page = 'home' | 'about' | 'services' | 'gallery' | 'projects' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const currentPageRef = useRef<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const pageMap: Record<string, Page> = {
        home: 'home',
        about: 'about',
        services: 'services',
        designs: 'gallery',
        projects: 'projects',
        contact: 'contact',
        'modular-kitchens': 'services',
        'full-home': 'services',
        'living-dining': 'services',
        bedrooms: 'services',
        commercial: 'services',
        renovation: 'services',
        'kitchen-designs': 'gallery',
        'living-designs': 'gallery',
        'bedroom-designs': 'gallery',
        'office-designs': 'gallery',
        process: 'home',
        reviews: 'home',
      };

      const pageName = pageMap[hash] || 'home';

      if (currentPageRef.current === pageName) {
        if (!hash || hash === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(hash);
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
        return;
      }

      currentPageRef.current = pageName;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(pageName);
        setIsTransitioning(false);

        setTimeout(() => {
          if (!hash || hash === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
          }
          const element = document.getElementById(hash);
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top: y, behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      }, 150);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-peacock-50/30 to-teal-50/30 dark:from-navy-900 dark:via-gray-900 dark:to-black transition-colors duration-500">
      <Navbar />
      <main className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
