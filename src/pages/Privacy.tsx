
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8 text-center font-inter">Privacy Policy</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose max-w-none">
                <p className="mb-4">
                  <strong>Last Updated:</strong> May 1, 2025
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to InnovAItive's Privacy Policy. This document outlines how we collect, use, and 
                  protect your personal information when you use our services.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Account information (name, email, role)</li>
                  <li>Content you upload (lectures, slides)</li>
                  <li>Feedback and correspondence</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-6 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide and maintain our services</li>
                  <li>Process and complete transactions</li>
                  <li>Send service announcements and updates</li>
                  <li>Improve and develop new features</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-6 mb-4">4. GDPR Compliance</h2>
                <p className="text-gray-700 mb-4">
                  For users in the European Union, we comply with GDPR requirements:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-6 mb-4">5. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information, including 
                  encryption, access controls, and regular security assessments.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-4">6. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy, please contact us at privacy@innovaitive.example.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
