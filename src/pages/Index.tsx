
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { StudentCarousel } from '@/components/carousel/StudentCarousel';
import { ProfessorCarousel } from '@/components/carousel/ProfessorCarousel';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import SpaceBackground from '@/components/SpaceBackground';

export default function Index() {
  // Apply dark background to body
  useEffect(() => {
    document.body.classList.add('bg-charcoal');
    
    return () => {
      document.body.classList.remove('bg-charcoal');
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <SpaceBackground />
      <Navbar />
      <Hero />
      <StudentCarousel />
      <ProfessorCarousel />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}
