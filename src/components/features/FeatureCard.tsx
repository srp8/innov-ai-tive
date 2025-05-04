
import { useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

export default function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
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
