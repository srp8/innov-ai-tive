
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Portal() {
  // Placeholder for user role - would come from auth service in real app
  const [userRole, setUserRole] = useState<'student' | 'professor' | null>(null);
  
  // Simulate fetching user data
  useEffect(() => {
    // This would be replaced with actual authentication check
    const role = Math.random() > 0.5 ? 'student' : 'professor';
    setUserRole(role as 'student' | 'professor');
    
    // Apply dark background to body
    document.body.classList.add('bg-charcoal');
    
    return () => {
      document.body.classList.remove('bg-charcoal');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glassmorphism rounded-lg p-8">
              <h1 className="text-3xl font-bold mb-6 text-center font-poppins text-neon-blue">
                Welcome to your InnovAItive Portal!
              </h1>
              
              {userRole === 'student' ? (
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 10c3.976 0 7-1.374 7-3s-3.024-3-7-3-7 1.374-7 3 3.024 3 7 3Z" />
                      <path d="M5 10v4c0 1.626 3.024 3 7 3s7-1.374 7-3v-4" />
                      <path d="M5 14v4c0 1.626 3.024 3 7 3s7-1.374 7-3v-4" />
                    </svg>
                  </div>
                  <p className="text-lg mb-8 text-gray-300">
                    Student features coming soon! You'll be able to upload lecture recordings, 
                    view simplified explanations, and access study guides.
                  </p>
                  <Button className="bg-neon-blue text-charcoal hover:bg-neon-purple glow-on-hover rounded-full">
                    Upload Lecture (Coming Soon)
                  </Button>
                </div>
              ) : userRole === 'professor' ? (
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  </div>
                  <p className="text-lg mb-8 text-gray-300">
                    Professor features coming soon! You'll be able to manage slides, approve 
                    AI-generated materials, and share them with your students.
                  </p>
                  <Button className="bg-neon-purple text-charcoal hover:bg-neon-blue glow-on-hover rounded-full">
                    Manage Content (Coming Soon)
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-charcoal-light mx-auto mb-6 flex items-center justify-center animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-400">Loading your portal...</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
