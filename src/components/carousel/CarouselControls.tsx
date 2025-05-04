
import { motion } from 'framer-motion';
import React from 'react';

interface CarouselControlsProps {
  activeIndex: number;
  totalPanels: number;
  onSelect: (index: number) => void;
  color: string;
}

export const CarouselControls = ({ activeIndex, totalPanels, onSelect, color }: CarouselControlsProps) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalPanels }).map((_, index) => (
        <motion.button
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            color === 'blue' ? 'focus:ring-neon-blue' : 'focus:ring-neon-purple'
          }`}
          style={{
            backgroundColor: activeIndex === index 
              ? color === 'blue' ? '#00D4FF' : '#7C3AED' 
              : '#2D2D2D'
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onSelect(index)}
          aria-label={`Navigate to panel ${index + 1}`}
          animate={{
            boxShadow: activeIndex === index 
              ? `0 0 10px ${color === 'blue' ? '#00D4FF' : '#7C3AED'}` 
              : 'none'
          }}
        />
      ))}
    </div>
  );
};
