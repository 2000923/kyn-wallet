import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200';
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-opacity-90',
    secondary: 'bg-transparent border border-neutral-300 text-neutral-900 hover:bg-neutral-50',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
