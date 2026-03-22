import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { AnimatedSection } from '../components/ui/AnimatedSection';

type Category = 'all' | 'kitchen' | 'living' | 'bedroom' | 'office' | 'before-after';

interface Design {
  category: string;
  image: string;
  title: string;
  location: string;
  style: string;
  materials?: string;
  beforeImage?: string;
}

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash;
      if (h.includes('kitchen')) setActiveCategory('kitchen');
      else if (h.includes('living')) setActiveCategory('living');
      else if (h.includes('bedroom')) setActiveCategory('bedroom');
      else if (h.includes('office')) setActiveCategory('office');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const categories = [
    { id: 'all' as Category, label: 'All Designs' },
    { id: 'kitchen' as Category, label: 'Kitchens' },
    { id: 'living' as Category, label: 'Living Rooms' },
    { id: 'bedroom' as Category, label: 'Bedrooms' },
    { id: 'office' as Category, label: 'Offices' },
    { id: 'before-after' as Category, label: 'Before & After' },
  ];

  const designs: Design[] = [
    { category: 'kitchen', image: '/images/img_10.jpeg', title: 'Contemporary Kitchen', location: 'Mumbai', style: 'Modern', materials: 'Acrylic & Quartz' },
    { category: 'living', image: '/images/img_11.jpeg', title: 'Luxury Living Space', location: 'Delhi', style: 'Contemporary', materials: 'Marble & Wood' },
    { category: 'bedroom', image: '/images/img_12.jpeg', title: 'Master Suite', location: 'Bangalore', style: 'Minimalist', materials: 'Laminate & Glass' },
    { category: 'kitchen', image: '/images/img_1.jpeg', title: 'Traditional Kitchen', location: 'Chennai', style: 'Classic', materials: 'Solid Wood' },
    { category: 'office', image: '/images/img_13.jpeg', title: 'Corporate Office', location: 'Pune', style: 'Professional', materials: 'Veneer & Steel' },
    { category: 'living', image: '/images/img_14.jpeg', title: 'Scandinavian Living', location: 'Hyderabad', style: 'Nordic', materials: 'Oak & Linen' },
    { category: 'bedroom', image: '/images/img_15.jpeg', title: 'Classic Bedroom', location: 'Kolkata', style: 'Traditional', materials: 'Teak Wood' },
    { category: 'kitchen', image: '/images/img_10.jpeg', title: 'Compact Kitchen', location: 'Mumbai', style: 'Space-Saving', materials: 'Laminate' },
    { category: 'office', image: '/images/img_16.jpeg', title: 'Modern Workspace', location: 'Gurgaon', style: 'Contemporary', materials: 'Glass & Metal' },
    { category: 'before-after', beforeImage: '/images/img_17.jpeg', image: '/images/img_18.jpeg', title: 'Complete Renovation', location: 'Delhi', style: 'Modern', materials: 'Mixed Materials' },
    { category: 'before-after', beforeImage: '/images/img_19.jpeg', image: '/images/img_10.jpeg', title: 'Kitchen Makeover', location: 'Mumbai', style: 'Contemporary', materials: 'Quartz & Acrylic' },
    { category: 'kitchen', image: '/images/img_new_3.jpg', title: 'Industrial Kitchen', location: 'Ahmedabad', style: 'Industrial', materials: 'Concrete & Steel' },
    { category: 'kitchen', image: '/images/img_new_4.jpg', title: 'Farmhouse Kitchen', location: 'Jaipur', style: 'Rustic', materials: 'Reclaimed Wood' },
    { category: 'living', image: '/images/img_new_5.jpg', title: 'Bohemian Living', location: 'Goa', style: 'Boho Chic', materials: 'Rattan & Cotton' },
    { category: 'living', image: '/images/img_2.jpg', title: 'Industrial Living', location: 'Mumbai', style: 'Industrial', materials: 'Brick & Leather' },
    { category: 'bedroom', image: '/images/img_new_7.jpg', title: 'Rustic Bedroom', location: 'Shimla', style: 'Rustic', materials: 'Pine Wood' },
    { category: 'bedroom', image: '/images/img_new_8.jpg', title: 'Zen Bedroom', location: 'Kerala', style: 'Minimalist', materials: 'Bamboo & Linen' },
    { category: 'office', image: '/images/img_new_9.jpg', title: 'Creative Studio', location: 'Bangalore', style: 'Modern', materials: 'Plywood & Glass' },
    { category: 'office', image: '/images/img_new_10.jpg', title: 'Home Office', location: 'Delhi', style: 'Contemporary', materials: 'Walnut Wood' },
  ];

  const filteredDesigns = activeCategory === 'all'
    ? designs
    : designs.filter(design => design.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredDesigns.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredDesigns.length) % filteredDesigns.length);
  };

  return (
    <div className="pt-24 bg-white dark:bg-gray-900">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              subtitle="Portfolio"
              title="Designs That Define Timeless Living"
              description="Explore our extensive collection of completed projects showcasing diverse styles and spaces"
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                      ? 'bg-peacock-700 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-peacock-50 dark:hover:bg-gray-700 shadow-md'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDesigns.map((design, index) => (
              <AnimatedSection key={index}>
                {design.beforeImage ? (
                  <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={design.beforeImage}
                        alt={`${design.title} - Before`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <img
                        src={design.image}
                        alt={`${design.title} - After`}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                      />
                      <div className="absolute top-4 right-4 bg-peacock-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Before & After
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold mb-1">{design.title}</h3>
                      <p className="text-peacock-300 text-sm">{design.location} • {design.style}</p>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => openLightbox(index)}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={design.image}
                        alt={design.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {design.title}
                      </h3>
                      <p className="text-peacock-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {design.location} • {design.style}
                      </p>
                      {design.materials && (
                        <p className="text-gray-300 text-xs mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          {design.materials}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-peacock-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={previousImage}
            className="absolute left-4 text-white hover:text-peacock-400 transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-peacock-400 transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-6xl max-h-[90vh] p-4">
            <img
              src={filteredDesigns[currentImageIndex]?.image}
              alt={filteredDesigns[currentImageIndex]?.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-bold mb-2">
                {filteredDesigns[currentImageIndex]?.title}
              </h3>
              <p className="text-peacock-400">
                {filteredDesigns[currentImageIndex]?.location} • {filteredDesigns[currentImageIndex]?.style}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
