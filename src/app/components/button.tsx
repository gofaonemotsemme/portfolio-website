import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode; // What the button displays (text, icon, etc.)
  onClick?: () => void; // Optional function to handle button clicks
  className?: string; // Optional prop for custom CSS classes
  disabled?: boolean; // Optional prop to disable the button
  // You can add more specific props like 'type', 'aria-label', etc., as needed
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};