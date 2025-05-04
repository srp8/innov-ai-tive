
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    // Simulate checking for slow connections and loading a fallback image
    const loadFallback = setTimeout(() => {
      if (animationRef.current) {
        animationRef.current.innerHTML = `
          <div class="bg-charcoal-light/30 rounded-lg p-4 flex items-center justify-center h-full">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="AI visualization" 
                class="relative z-10 max-h-96 object-cover rounded opacity-80"
              />
            </div>
          </div>
        `;
      }
    }, 300);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(loadFallback);
    };
  }, []);

  return (
    <section className="gradient-bg min-h-screen pt-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div 
            className={`w-full lg:w-1/2 text-white space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} 
            style={{animationDelay: '0.2s'}}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              <span className="text-neon-blue neon-text">Revolutionize Learning</span>
              <br />
              with AI-Driven Lecture Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              Instantly transcribe, align, and simplify lectures into study guides that click—approved by your professor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-neon-blue text-charcoal hover:bg-neon-purple glow-on-hover rounded-full"
                onClick={() => console.log('Student signup')}
              >
                Start Studying
              </Button>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-charcoal purple-glow-on-hover rounded-full"
                >
                  Empower Your Class
                </Button>
              </Link>
            </div>
          </div>
          
          <div 
            className={`w-full lg:w-1/2 mt-12 lg:mt-0 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} 
            style={{animationDelay: '0.5s'}}
            ref={animationRef}
          >
            {/* Placeholder for Three.js animation */}
            <div className="bg-charcoal-light/30 rounded-lg p-6 flex items-center justify-center h-80 md:h-96">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 blur-xl rounded-lg"></div>
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                  {/* Neural network visualization */}
                  <div className="grid grid-cols-3 gap-4 w-3/4">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i} 
                        className="h-4 w-4 bg-neon-blue rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 mt-8 w-4/5">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className="h-4 w-4 bg-neon-purple rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                      />
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-5 gap-4 mt-8 w-full">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className="h-4 w-4 bg-neon-blue rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.1 + 0.4}s` }}
                      />
                    ))}
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute inset-0 w-full h-full">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <line x1="100" y1="50" x2="160" y2="120" className="stroke-neon-blue/40 stroke-1" />
                      <line x1="200" y1="50" x2="200" y2="120" className="stroke-neon-blue/40 stroke-1" />
                      <line x1="300" y1="50" x2="240" y2="120" className="stroke-neon-blue/40 stroke-1" />
                      <line x1="120" y1="150" x2="100" y2="220" className="stroke-neon-purple/40 stroke-1" />
                      <line x1="160" y1="150" x2="150" y2="220" className="stroke-neon-purple/40 stroke-1" />
                      <line x1="240" y1="150" x2="250" y2="220" className="stroke-neon-purple/40 stroke-1" />
                      <line x1="280" y1="150" x2="300" y2="220" className="stroke-neon-purple/40 stroke-1" />
                      <line x1="100" y1="220" x2="200" y2="280" className="stroke-neon-blue/40 stroke-1" />
                      <line x1="200" y1="220" x2="200" y2="280" className="stroke-neon-blue/40 stroke-1" />
                      <line x1="300" y1="220" x2="200" y2="280" className="stroke-neon-blue/40 stroke-1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
