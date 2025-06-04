import React from 'react';

interface SeparatorProps {
  className?: string; // Optional prop to add custom CSS classes
}

export const Separator: React.FC<SeparatorProps> = ({ className }) => {
  return <div className={`border-b border-[#A35167] ${className}`} />;
};

export default Separator;