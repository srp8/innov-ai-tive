
import { Upload, Brain, Book } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface StepProps {
  number: number;
  title: string;
  icon: React.ReactNode;
  isVisible: boolean;
}

function Step({ number, title, icon, isVisible }: StepProps) {
  return (
    <div className={`flex flex-col items-center transition-all duration-500 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="bg-primary-DEFAULT rounded-full w-16 h-16 flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <div className="bg-primary-DEFAULT text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mb-2">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 text-center">{title}</h3>
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
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-inter">How InnovAItive Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Step 
            number={1} 
            title="Upload lecture audio and slides" 
            icon={<Upload size={24} />}
            isVisible={isVisible}
          />
          
          <Step 
            number={2} 
            title="AI processes and aligns content" 
            icon={<Brain size={24} />}
            isVisible={isVisible}
          />
          
          <Step 
            number={3} 
            title="Get simple explanations and summaries" 
            icon={<Book size={24} />}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
}
