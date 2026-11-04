import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  // rounded-lg (8px角丸) を基準に設定
  const baseStyle = "inline-flex items-center justify-center font-bold transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-lg";
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700",
    outline: "border-2 border-gray-200 bg-transparent hover:bg-gray-50 text-gray-700",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700"
  };
  const sizes = {
    sm: "h-8 px-4 text-sm",     // 高さ32px
    md: "h-12 px-4 text-base",  // 高さ48px
    lg: "h-14 px-6 text-lg w-full" // 高さ56px
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}