
import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import { CarouselControls } from './CarouselControls';
import { Canvas } from '@react-three/fiber';
import { OrbitParticles } from './OrbitParticles';

interface ThreeDCarouselProps {
  title: string;
  subtitle: string;
  color: 'blue' | 'purple';
  children: React.ReactNode;
}

export const ThreeDCarousel = ({ title, subtitle, color, children }: ThreeDCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Handle touch events for swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (diff > 50) { // Swipe left
      setActiveIndex(prev => (prev < React.Children.count(children) - 1 ? prev + 1 : prev));
    } else if (diff < -50) { // Swipe right
      setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
    }
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isVisible) {
        if (e.key === 'ArrowRight') {
          setActiveIndex(prev => (prev < React.Children.count(children) - 1 ? prev + 1 : prev));
        } else if (e.key === 'ArrowLeft') {
          setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [children, isVisible]);
  
  // Clone children and add props
  const enhancedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        index,
        totalPanels: React.Children.count(children),
        onClick: () => setActiveIndex(index),
        color: color === 'blue' ? 'blue' : 'purple',
        delay: index
      } as any);
    }
    return child;
  });
  
  const titleColor = color === 'blue' ? 'text-neon-blue' : 'text-neon-purple';
  
  return (
    <section 
      className="py-20 relative overflow-hidden"
      ref={containerRef}
      style={{ background: color === 'blue' ? 'linear-gradient(135deg, #1A1A1A 0%, #1E3A5F 100%)' : 'linear-gradient(135deg, #1A1A1A 0%, #331A5F 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold font-poppins ${titleColor} neon-text mb-4`}>
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="relative z-10">
          <div 
            className="flex justify-center items-center overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="carousel-3d-container relative flex justify-center items-center gap-4 md:gap-8">
              {enhancedChildren}
            </div>
          </div>
          
          <CarouselControls
            activeIndex={activeIndex}
            totalPanels={React.Children.count(children)}
            onSelect={setActiveIndex}
            color={color === 'blue' ? '#00D4FF' : '#7C3AED'}
          />
        </div>
        
        {/* 3D orbit particles background */}
        <div className="absolute inset-0 z-0" style={{ opacity: 0.7 }}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <OrbitParticles 
              color={color === 'blue' ? '#00D4FF' : '#7C3AED'} 
              count={30}
              active={isVisible}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
