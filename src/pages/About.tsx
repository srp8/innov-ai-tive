
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-inter">About InnovAItive</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg text-gray-700 mb-6">
                InnovAItive uses AI to create simple, professor-approved study guides from lectures.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                We believe that education should be accessible and understandable for everyone. 
                Our mission is to bridge the gap between complex academic content and student comprehension 
                by leveraging cutting-edge AI technology to transform lecture materials into clear, 
                concise study resources that enhance learning outcomes.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">How It Works</h2>
              <p className="text-gray-700 mb-6">
                Our platform uses advanced machine learning algorithms to process lecture recordings and 
                accompanying slides. The AI analyzes the content, identifies key concepts, and creates 
                simplified explanations that maintain academic accuracy while being easier to understand. 
                Professors can review and approve these materials before they're made available to students, 
                ensuring quality and accuracy.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">For Students</h2>
              <p className="text-gray-700 mb-6">
                Access clear, simplified explanations of complex topics that help you truly understand 
                the material rather than just memorizing it. Our AI-generated study guides break down difficult 
                concepts into digestible pieces, making your study time more efficient and effective.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">For Professors</h2>
              <p className="text-gray-700 mb-6">
                Save valuable time while improving student outcomes. Our platform automatically generates 
                high-quality study materials from your existing lectures and slides, which you can review 
                and approve before they're shared with students. This ensures academic integrity while 
                reducing the time spent creating supplementary materials.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
