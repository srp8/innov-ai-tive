
import { Upload, Brain, Book } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
}

function Step({ number, title, description, icon, isVisible }: StepProps) {
  return (
    <div className={`flex flex-col items-center transition-all duration-500 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="bg-neon-blue rounded-full w-16 h-16 flex items-center justify-center text-charcoal mb-4 glow-on-hover">
        {icon}
      </div>
      <div className="bg-neon-purple text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mb-2">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-white text-center font-poppins">{title}</h3>
      <p className="text-gray-300 text-center mt-2 max-w-xs">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-dark to-charcoal" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 font-poppins text-white">
          How <span className="text-neon-blue neon-text">InnovAItive</span> Works
        </h2>
        
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Our advanced AI platform simplifies the process of turning complex lectures into
          clear, concise study materials in just three simple steps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-0.5">
            <div className="h-full w-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-30"></div>
          </div>
          
          <Step 
            number={1} 
            title="Upload lecture content" 
            description="Simply upload your lecture recording and slide deck through our intuitive interface."
            icon={<Upload size={24} />}
            isVisible={isVisible}
          />
          
          <Step 
            number={2} 
            title="AI processes the data" 
            description="Our neural networks align audio with visuals and identify key concepts to simplify."
            icon={<Brain size={24} />}
            isVisible={isVisible}
          />
          
          <Step 
            number={3} 
            title="Access simplified material" 
            description="Get clear explanations and summaries that make complex topics easy to understand."
            icon={<Book size={24} />}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
}
