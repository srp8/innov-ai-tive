
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface CarouselPanelProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  index: number;
  totalPanels: number;
  onClick: () => void;
  color: string;
  delay: number;
}

export const CarouselPanel = ({ 
  title, 
  children, 
  isActive, 
  index, 
  totalPanels, 
  onClick,
  color,
  delay
}: CarouselPanelProps) => {
  const panelVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateY: -15,
      scale: 0.9,
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: isActive ? 1.05 : 0.95,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay * 0.1
      }
    },
    hover: {
      scale: isActive ? 1.08 : 1.02,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };
  
  const glowVariants = {
    inactive: {
      boxShadow: `0 0 10px rgba(${color === 'blue' ? '0, 212, 255' : '124, 58, 237'}, 0.5)`,
    },
    active: {
      boxShadow: `0 0 30px rgba(${color === 'blue' ? '0, 212, 255' : '124, 58, 237'}, 0.8)`,
    }
  };
  
  return (
    <motion.div
      className={`panel relative w-64 h-80 md:w-80 md:h-96 rounded-xl bg-charcoal-light p-5 cursor-pointer glassmorphism`}
      variants={panelVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      onClick={onClick}
      aria-label={`Navigate to ${title} panel`}
      animate={isActive ? "visible" : "visible"}
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      tabIndex={0}
      role="button"
    >
      <motion.div
        className="absolute inset-0 rounded-xl z-[-1] border"
        variants={glowVariants}
        animate={isActive ? "active" : "inactive"}
        style={{ 
          borderColor: color === 'blue' ? '#00D4FF' : '#7C3AED',
        }}
      />
      
      <div className="h-full flex flex-col justify-between">
        <div>
          <h3 
            className={`text-xl font-bold mb-2 font-poppins ${
              color === 'blue' ? 'text-neon-blue' : 'text-neon-purple'
            }`}
          >
            {title}
          </h3>
          <div className="space-y-4 flex-grow">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
