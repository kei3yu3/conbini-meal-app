import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center font-bold transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700",
    outline: "border-2 border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700"
  };
  const sizes = {
    sm: "h-9 px-3 text-sm rounded-md",
    md: "h-11 px-4 text-base rounded-lg",
    lg: "h-14 px-6 text-xl w-full rounded-2xl shadow-lg" // モバイル用の大型ボタン
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}