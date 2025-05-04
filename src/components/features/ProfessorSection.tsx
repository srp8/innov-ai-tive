
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ProfessorSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-charcoal" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-8 font-poppins text-neon-purple neon-text ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Amplify Your Teaching
        </h2>
        <p className={`text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Save time with auto-generated study resources and seamless slide tracking via our plugin.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ProfessorSectionContent isVisible={isVisible} />
          <ProfessorSectionVideo isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}

function ProfessorSectionContent({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`text-center md:text-left order-2 md:order-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
      <h3 className="text-2xl font-bold mb-4 font-poppins text-white">
        <span className="text-neon-purple">Supercharge</span> your teaching materials
      </h3>
      <p className="text-gray-300 mb-6">
        Focus on delivering engaging lectures while our AI automatically creates supplementary study guides that reinforce your teaching.
      </p>
      <p className="text-gray-300 mb-8">
        Approve or modify the generated content before distribution, ensuring academic accuracy while saving hours of preparation time.
      </p>
      <Link to="/about">
        <Button 
          className="bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-charcoal purple-glow-on-hover rounded-full"
        >
          Teach with Ease
        </Button>
      </Link>
    </div>
  );
}

function ProfessorSectionVideo({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`order-1 md:order-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
      <div className="glassmorphism rounded-lg overflow-hidden">
        <div className="relative p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 blur-md"></div>
          <video 
            className="relative z-10 w-full h-auto rounded opacity-90"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://cdn.coverr.co/videos/coverr-typing-on-laptop-1585/1080p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-4 relative z-10">
          <div className="flex items-center justify-between">
            <h3 className="text-neon-purple font-semibold font-poppins">Professor Dashboard</h3>
            <span className="px-2 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-xs">Coming Soon</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="glassmorphism rounded p-2 text-center text-xs text-gray-300">
              <div className="h-1 w-3/4 mx-auto bg-neon-purple mb-2"></div>
              Lectures
            </div>
            <div className="glassmorphism rounded p-2 text-center text-xs text-gray-300">
              <div className="h-1 w-1/2 mx-auto bg-neon-blue mb-2"></div>
              Materials
            </div>
            <div className="glassmorphism rounded p-2 text-center text-xs text-gray-300">
              <div className="h-1 w-4/5 mx-auto bg-neon-purple mb-2"></div>
              Feedback
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
