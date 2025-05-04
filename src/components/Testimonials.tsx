
import { useState, useEffect } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  isVisible: boolean;
  delay: number;
}

function Testimonial({ quote, author, role, isVisible, delay }: TestimonialProps) {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isVisible, delay]);

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-500 transform ${
      show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // For demo purposes, make visible immediately
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 font-inter">What Users Say</h2>
        <p className="text-center text-gray-500 italic mb-12">Real testimonials coming soon!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Testimonial 
            quote="InnovAItive made studying so easy!"
            author="Student"
            role="University Student"
            isVisible={isVisible}
            delay={100}
          />
          
          <Testimonial 
            quote="A game-changer for creating study resources."
            author="Professor"
            role="University Faculty"
            isVisible={isVisible}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}
