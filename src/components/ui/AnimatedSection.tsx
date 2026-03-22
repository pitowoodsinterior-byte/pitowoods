import { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn' | 'zoomIn';
  delay?: number;
}

export function AnimatedSection({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animations = {
    fadeIn: 'opacity-0',
    slideUp: 'opacity-0 translate-y-4',
    slideLeft: 'opacity-0 translate-x-4',
    slideRight: 'opacity-0 -translate-x-4',
    scaleIn: 'opacity-0 scale-95',
    rotateIn: 'opacity-0 -rotate-6 scale-95',
    zoomIn: 'opacity-0 scale-90',
  };

  const visibleClasses = {
    fadeIn: 'opacity-100',
    slideUp: 'opacity-100 translate-y-0',
    slideLeft: 'opacity-100 translate-x-0',
    slideRight: 'opacity-100 translate-x-0',
    scaleIn: 'opacity-100 scale-100',
    rotateIn: 'opacity-100 rotate-0 scale-100',
    zoomIn: 'opacity-100 scale-100',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-400 ease-out ${
        isVisible ? visibleClasses[animation] : animations[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
