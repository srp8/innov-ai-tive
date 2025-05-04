
import { Lightbulb, Clipboard, Brain } from 'lucide-react';
import { useEffect, useState } from 'react';

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
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform hover:scale-105 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-primary-DEFAULT mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 font-inter">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-inter">Value Propositions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="For Students" 
            description="Understand complex lectures with fifth-grader-level explanations."
            icon={<Lightbulb size={32} />}
            delay={100}
          />
          
          <FeatureCard 
            title="For Professors" 
            description="Save time with auto-generated, accurate study resources."
            icon={<Clipboard size={32} />}
            delay={300}
          />
          
          <FeatureCard 
            title="AI-Powered" 
            description="Real-time transcription and slide alignment, powered by cutting-edge AI."
            icon={<Brain size={32} />}
            delay={500}
          />
        </div>
      </div>
    </section>
  );
}
