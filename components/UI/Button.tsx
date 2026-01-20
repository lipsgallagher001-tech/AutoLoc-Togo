
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50';
  
  const variants = {
    primary: 'bg-[#1D7AFC] text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20',
    secondary: 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200',
    outline: 'border-2 border-[#1D7AFC] text-[#1D7AFC] hover:bg-blue-50',
    whatsapp: 'bg-[#25D366] text-white hover:bg-green-600 shadow-lg shadow-green-500/20',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
