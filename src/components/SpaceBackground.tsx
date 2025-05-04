
import { useEffect, useRef, useState } from 'react';

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxGridOpacity = 0.05; // Maximum opacity for grid lines

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll position as percentage (0 to 1) within the first 300px of scrolling
      const position = Math.min(window.scrollY / 300, 1);
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // Make taller than screen to cover scrolling content
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars: {x: number, y: number, radius: number, speed: number}[] = [];
    const numberOfStars = 100;
    const maxSpeed = 0.1;
    
    // Create stars
    for (let i = 0; i < numberOfStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * maxSpeed
      });
    }

    // Draw grid
    const drawGrid = () => {
      // Calculate grid opacity based on scroll position
      const gridOpacity = scrollPosition * maxGridOpacity;
      
      ctx.strokeStyle = `rgba(255, 255, 255, ${gridOpacity})`;
      ctx.lineWidth = 1;
      
      // Draw vertical lines
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid with scroll-based opacity
      drawGrid();
      
      // Draw and update stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move star
        star.y -= star.speed;
        
        // Reset position if star moves off screen
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [scrollPosition]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full space-gradient-bg z-0" />
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
    </>
  );
}
