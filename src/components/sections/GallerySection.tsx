import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';

type Category = 'all' | 'kitchen' | 'living' | 'bedroom' | 'office';

interface Design {
  category: string;
  image: string;
  title: string;
  style: string;
}

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all' as Category, label: 'All Designs' },
    { id: 'kitchen' as Category, label: 'Kitchens' },
    { id: 'living' as Category, label: 'Living Rooms' },
    { id: 'bedroom' as Category, label: 'Bedrooms' },
    { id: 'office' as Category, label: 'Offices' },
  ];

  const designs: Design[] = [
    { category: 'kitchen', image: '/images/img_1.jpeg', title: 'Modern Kitchen', style: 'Contemporary Indian' },
    { category: 'living', image: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2024/09/02081635/indian-house-interior-design-photos-of-mandala-art-on-the-wall.jpg', title: 'Luxury Living Room', style: 'Modern Indian Luxury' },
    { category: 'bedroom', image: 'https://i-media.vyaparify.com/vcards/blogs/92713/elegant-white-wardrobe-designs-for-bedroom.jpg', title: 'Master Bedroom', style: 'Minimalist Wardrobe' },
    { category: 'living', image: 'https://st.hzcdn.com/simgs/5811713f0b2a389b_16-0004/home-design.jpg', title: 'Drawing Room', style: 'Traditional Indian' },
    { category: 'office', image: '/images/img_2.jpg', title: 'Corporate Office', style: 'Professional' },
    { category: 'kitchen', image: '/images/img_3.jpg', title: 'Classic Kitchen', style: 'Warm Indian' },
    { category: 'bedroom', image: '/images/img_4.jpg', title: 'Elegant Bedroom', style: 'Classic' },
    { category: 'kitchen', image: '/images/img_10.jpeg', title: 'Compact Kitchen', style: 'Space-Saving' },
    { category: 'office', image: '/images/img_6.jpg', title: 'Modern Workspace', style: 'Contemporary Indian' },
  ];

  const filteredDesigns = activeCategory === 'all'
    ? designs
    : designs.filter(design => design.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => setLightboxIndex(i => i !== null ? (i - 1 + filteredDesigns.length) % filteredDesigns.length : null);
  const goNext = () => setLightboxIndex(i => i !== null ? (i + 1) % filteredDesigns.length : null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  };

  return (
    <section id="designs" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn">
          <SectionTitle
            subtitle="Portfolio"
            title="Designs That Inspire Living"
            description="Explore our curated collection of completed projects across various design styles"
          />
        </AnimatedSection>

        <AnimatedSection animation="slideUp">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-peacock-700 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-peacock-50 dark:hover:bg-gray-700'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigns.map((design, index) => (
            <AnimatedSection key={`${activeCategory}-${index}`} animation={index % 3 === 0 ? 'zoomIn' : index % 3 === 1 ? 'slideLeft' : 'slideRight'} delay={index * 80}>
              <div
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {design.title}
                  </h3>
                  <p className="text-peacock-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {design.style}
                  </p>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredDesigns[lightboxIndex].image}
              alt={filteredDesigns[lightboxIndex].title}
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-bold">{filteredDesigns[lightboxIndex].title}</h3>
              <p className="text-peacock-400 mt-1">{filteredDesigns[lightboxIndex].style}</p>
              <p className="text-gray-500 text-sm mt-2">{lightboxIndex + 1} / {filteredDesigns.length}</p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </section>
  );
}
