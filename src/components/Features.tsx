
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

interface FeatureItemProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  buttonText?: string;
}

function FeatureItem({ title, description, image, reverse, buttonText }: FeatureItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-20`}
      ref={itemRef}
    >
      <div 
        className={`w-full md:w-1/2 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-poppins">
          {title}
        </h2>
        <p className="text-gray-300 mb-6">
          {description}
        </p>
        {buttonText && (
          <Button 
            className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-8 py-6"
          >
            {buttonText}
          </Button>
        )}
      </div>
      <div 
        className={`w-full md:w-1/2 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="rounded-lg overflow-hidden neon-border">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto" 
          />
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureItem
          title="Master Any Lecture"
          description="Transform complex lectures into clear, digestible content. Our AI analyzes your lecture recordings and automatically creates concise notes, summaries, and visual aids that highlight key concepts, making studying more efficient and effective."
          image="/professor-dashboard.png"
          buttonText="Try it now"
        />
        <FeatureItem
          title="Amplify Your Teaching"
          description="Professors can visualize student engagement and understanding in real-time. Track which concepts resonated and which need reinforcement, allowing you to tailor future lectures for maximum effectiveness."
          image="/professor-dashboard.png"
          reverse={true}
          buttonText="Request a demo"
        />
      </div>
    </section>
  );
}
