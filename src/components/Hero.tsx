
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Simulate checking for slow connections and loading a fallback image
    const loadFallback = setTimeout(() => {
      if (animationRef.current) {
        animationRef.current.innerHTML = `
          <div class="bg-primary-light/10 rounded-lg p-4 flex items-center justify-center h-full">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Student using laptop" 
              class="max-h-64 object-cover rounded"
            />
          </div>
        `;
      }
    }, 300); // Low timeout for demo purposes
    
    return () => clearTimeout(loadFallback);
  }, []);

  return (
    <section className="gradient-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className={`w-full lg:w-1/2 text-white space-y-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight">
              Master Lectures with AI-Powered Study Guides
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              InnovAItive transcribes lectures, aligns them with slides, and creates simple explanations—approved by your professor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg"
                className="bg-white text-primary-DEFAULT hover:bg-white/90"
                onClick={() => console.log('Student signup')}
              >
                For Students: Get Started
              </Button>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  For Professors: Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div 
            className={`w-full lg:w-1/2 mt-10 lg:mt-0 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} 
            style={{animationDelay: '0.4s'}}
            ref={animationRef}
          >
            {/* Placeholder for Lottie animation */}
            <div className="bg-white/10 rounded-lg p-6 flex items-center justify-center h-64 md:h-80">
              <div className="flex flex-col items-center text-white">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="animate-bounce"
                >
                  <path d="M16 6l4 14"></path>
                  <path d="M12 6v14"></path>
                  <path d="M8 8v12"></path>
                  <path d="M4 4v16"></path>
                </svg>
                <div className="w-full h-2 bg-white/30 rounded-full mt-6 overflow-hidden">
                  <div className="h-full bg-white w-3/4 rounded-full"></div>
                </div>
                <div className="mt-8 border border-white/20 p-4 rounded w-full max-w-xs">
                  <div className="h-2 bg-white/50 rounded-full w-3/4 mb-2"></div>
                  <div className="h-2 bg-white/40 rounded-full mb-2"></div>
                  <div className="h-2 bg-white/30 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
