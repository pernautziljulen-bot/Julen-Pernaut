import React from 'react';

interface AvatarDisplayProps {
  avatar: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const AvatarDisplay: React.FC<AvatarDisplayProps> = ({ 
  avatar, 
  size = 'md',
  className = ''
}) => {
  let baseSize = '';

  // Responsive Tailwind Classes
  switch (size) {
    case 'sm':
      baseSize = 'text-2xl md:text-3xl'; 
      break;
    case 'md':
      baseSize = 'text-3xl md:text-5xl';
      break;
    case 'lg':
      baseSize = 'text-5xl md:text-7xl';
      break;
    case 'xl':
      baseSize = 'text-7xl md:text-9xl';
      break;
  }

  return (
    <div className={`relative flex items-center justify-center ${className} select-none`}>
      {/* Base Avatar (Animal) - No background container */}
      <span className={`z-10 leading-none ${baseSize} filter drop-shadow-lg transform hover:scale-110 transition-transform duration-300`}>
        {avatar}
      </span>
    </div>
  );
};