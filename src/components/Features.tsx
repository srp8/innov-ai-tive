
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Lightbulb, Clipboard, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`glassmorphism rounded-lg p-6 transition-all duration-500 transform hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-neon-blue mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 font-poppins text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default function Features() {
  const studentSectionRef = useRef<HTMLDivElement>(null);
  const professorSectionRef = useRef<HTMLDivElement>(null);
  const [studentSectionVisible, setStudentSectionVisible] = useState(false);
  const [professorSectionVisible, setProfessorSectionVisible] = useState(false);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.target === studentSectionRef.current && entry.isIntersecting) {
          setStudentSectionVisible(true);
        }
        if (entry.target === professorSectionRef.current && entry.isIntersecting) {
          setProfessorSectionVisible(true);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (studentSectionRef.current) {
      observer.observe(studentSectionRef.current);
    }
    if (professorSectionRef.current) {
      observer.observe(professorSectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Value Prop 1: Student Focus */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal-light" ref={studentSectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-8 font-poppins text-neon-blue neon-text ${studentSectionVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Master Any Lecture
          </h2>
          <p className={`text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12 ${studentSectionVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Get fifth-grader-level explanations and real-time slide alignment to ace your studies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`${studentSectionVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
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
            
            <div className={`text-center md:text-left ${studentSectionVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
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
          </div>
        </div>
      </section>
      
      {/* Value Prop 2: Professor Focus */}
      <section className="py-20 bg-charcoal" ref={professorSectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-8 font-poppins text-neon-purple neon-text ${professorSectionVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Amplify Your Teaching
          </h2>
          <p className={`text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12 ${professorSectionVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Save time with auto-generated study resources and seamless slide tracking via our plugin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`text-center md:text-left order-2 md:order-1 ${professorSectionVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
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
            
            <div className={`order-1 md:order-2 ${professorSectionVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
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
          </div>
        </div>
      </section>
      
      {/* Feature Cards */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="For Students" 
              description="Understand complex lectures with fifth-grader-level explanations that make difficult concepts click."
              icon={<Lightbulb size={32} />}
              delay={100}
            />
            
            <FeatureCard 
              title="For Professors" 
              description="Save time with auto-generated, accurate study resources that complement your teaching style."
              icon={<Clipboard size={32} />}
              delay={300}
            />
            
            <FeatureCard 
              title="AI-Powered" 
              description="Real-time transcription and slide alignment, powered by cutting-edge neural networks."
              icon={<Brain size={32} />}
              delay={500}
            />
          </div>
        </div>
      </section>
    </>
  );
}
