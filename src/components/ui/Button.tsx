import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transform relative overflow-hidden';

  const variants = {
    primary: 'bg-gradient-to-r from-peacock-600 to-teal-600 hover:from-peacock-700 hover:to-teal-700 text-white shadow-lg hover:shadow-peacock-500/50',
    secondary: 'bg-navy-600 hover:bg-navy-700 text-white dark:bg-navy-700 dark:hover:bg-navy-800 shadow-lg',
    outline: 'border-2 border-peacock-600 text-peacock-600 hover:bg-peacock-600 hover:text-white dark:border-peacock-400 dark:text-peacock-400 dark:hover:bg-peacock-600 dark:hover:text-white shadow-md',
    gradient: 'bg-gradient-to-r from-peacock-500 via-teal-500 to-navy-500 hover:from-peacock-600 hover:via-teal-600 hover:to-navy-600 text-white shadow-xl animate-shimmer bg-[length:200%_100%]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      e.preventDefault();
      if (href.startsWith('http')) {
        window.open(href, '_blank');
      } else {
        window.location.hash = href;
      }
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </button>
  );
}
