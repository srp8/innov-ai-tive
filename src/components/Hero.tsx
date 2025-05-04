
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="min-h-screen pt-24 flex items-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center">
          <div 
            className={`w-full max-w-4xl space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} 
            style={{animationDelay: '0.2s'}}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              <span className="text-neon-blue neon-text">Revolutionize Learning</span>
              <br />
              with AI-Driven Lecture Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Instantly transcribe, align, and simplify lectures into study guides that click—approved by your professor.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <div className="relative">
                <Button 
                  size="lg"
                  className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-8 py-6"
                  onClick={() => console.log('Student signup')}
                  onMouseEnter={() => setActiveTooltip('lectures')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  Empower your Lectures
                </Button>
                {activeTooltip === 'lectures' && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-charcoal-dark p-2 rounded text-white text-sm neon-border whitespace-nowrap">
                    For Students
                  </div>
                )}
              </div>
              
              <div className="relative">
                <Button 
                  size="lg"
                  className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-8 py-6"
                  onClick={() => console.log('Professor signup')}
                  onMouseEnter={() => setActiveTooltip('class')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  Empower your Class
                </Button>
                {activeTooltip === 'class' && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-charcoal-dark p-2 rounded text-white text-sm neon-border whitespace-nowrap">
                    For Professors
                  </div>
                )}
              </div>
              
              <div className="relative">
                <Link to="/about">
                  <Button 
                    size="lg"
                    className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-8 py-6"
                    onMouseEnter={() => setActiveTooltip('institution')}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    Empower your Institution
                  </Button>
                </Link>
                {activeTooltip === 'institution' && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-charcoal-dark p-2 rounded text-white text-sm neon-border whitespace-nowrap">
                    For Universities
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
