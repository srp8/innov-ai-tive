
import { Lightbulb, Clipboard, Brain } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function FeatureCardsSection() {
  return (
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
  );
}
