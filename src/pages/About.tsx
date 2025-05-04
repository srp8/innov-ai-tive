
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function About() {
  // Apply dark background to body
  useEffect(() => {
    document.body.classList.add('bg-charcoal');
    
    return () => {
      document.body.classList.remove('bg-charcoal');
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal-dark">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-poppins">
              <span className="text-neon-blue neon-text">About</span> InnovAItive
            </h1>
            
            <div className="glassmorphism rounded-lg p-8">
              <div className="mb-8 mx-auto w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple"></div>
              
              <p className="text-lg text-gray-300 mb-6">
                InnovAItive uses cutting-edge AI to create simple, professor-approved study guides from lectures.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-neon-blue">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                We believe that education should be accessible and understandable for everyone. 
                Our mission is to bridge the gap between complex academic content and student comprehension 
                by leveraging neural networks to transform lecture materials into clear, 
                concise study resources that enhance learning outcomes.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-neon-blue">How It Works</h2>
              <p className="text-gray-300 mb-6">
                Our platform uses advanced machine learning algorithms to process lecture recordings and 
                accompanying slides. The AI analyzes the content, identifies key concepts, and creates 
                simplified explanations that maintain academic accuracy while being easier to understand. 
                Professors can review and approve these materials before they're made available to students, 
                ensuring quality and accuracy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="glassmorphism rounded-lg p-6 border border-neon-blue/30">
                  <h3 className="text-xl font-semibold mb-3 text-neon-blue">For Students</h3>
                  <p className="text-gray-300">
                    Access clear, simplified explanations of complex topics that help you truly understand 
                    the material rather than just memorizing it. Our AI-generated study guides break down difficult 
                    concepts into digestible pieces, making your study time more efficient and effective.
                  </p>
                </div>
                
                <div className="glassmorphism rounded-lg p-6 border border-neon-purple/30">
                  <h3 className="text-xl font-semibold mb-3 text-neon-purple">For Professors</h3>
                  <p className="text-gray-300">
                    Save valuable time while improving student outcomes. Our platform automatically generates 
                    high-quality study materials from your existing lectures and slides, which you can review 
                    and approve before they're shared with students. This ensures academic integrity while 
                    reducing the time spent creating supplementary materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
