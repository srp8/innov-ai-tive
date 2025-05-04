
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

export default function StudentSection() {
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
    <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal-light" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-8 font-poppins text-neon-blue neon-text ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Master Any Lecture
        </h2>
        <p className={`text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Get fifth-grader-level explanations and real-time slide alignment to ace your studies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <StudentSectionImage isVisible={isVisible} />
          <StudentSectionContent isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}

function StudentSectionImage({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
      <div className="glassmorphism rounded-lg overflow-hidden p-1">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-md"></div>
          <img 
            src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Student using InnovAItive" 
            className="relative z-10 w-full h-auto rounded opacity-90"
          />
        </div>
        <div className="p-4 relative z-10">
          <h3 className="text-neon-blue font-semibold mb-2 font-poppins">
            Complex Lecture → Simple Understanding
          </h3>
          <div className="flex space-x-4">
            <div className="w-1/2 rounded bg-charcoal-light/50 p-3 text-xs text-gray-300">
              <div className="text-neon-blue font-semibold mb-1">Original:</div>
              The quantum mechanical model acknowledges both the wave and particle nature of electrons...
            </div>
            <div className="w-1/2 rounded bg-charcoal-light/50 p-3 text-xs text-gray-300">
              <div className="text-neon-purple font-semibold mb-1">InnovAItive:</div>
              Electrons act like both tiny balls (particles) and waves, just like light can...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentSectionContent({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`text-center md:text-left ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
      <h3 className="text-2xl font-bold mb-4 font-poppins text-white">
        <span className="text-neon-blue">Difficult concepts</span> become crystal clear
      </h3>
      <p className="text-gray-300 mb-6">
        InnovAItive takes complex academic content from your lectures and transforms it into straightforward explanations that feel like they were written just for you.
      </p>
      <p className="text-gray-300 mb-8">
        By aligning the audio with slides and breaking down difficult concepts into simpler terms, you'll grasp the material faster than ever before.
      </p>
      <Button 
        className="bg-neon-blue text-charcoal hover:bg-neon-purple glow-on-hover rounded-full"
        onClick={() => console.log('Student signup')}
      >
        Study Smarter Now
      </Button>
    </div>
  );
}
