import { ReactNode } from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string | ReactNode;
  description?: string;
  centered?: boolean;
}

export function SectionTitle({ subtitle, title, description, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="text-peacock-700 dark:text-peacock-400 font-semibold text-sm uppercase tracking-wide mb-2 animate-fadeIn">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif bg-gradient-to-r from-gray-900 to-peacock-700 dark:from-white dark:to-peacock-400 bg-clip-text text-transparent mb-4 animate-slideUp">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fadeIn">
          {description}
        </p>
      )}
    </div>
  );
}
