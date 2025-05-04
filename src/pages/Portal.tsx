
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold mb-6 text-center font-inter">
                Welcome to your InnovAItive Portal!
              </h1>
              
              {userRole === 'student' ? (
                <div className="text-center">
                  <p className="text-lg mb-8">
                    Student features coming soon! You'll be able to upload lecture recordings, 
                    view simplified explanations, and access study guides.
                  </p>
                  <Button className="bg-primary-DEFAULT hover:bg-primary-DEFAULT/90">
                    Upload Lecture (Coming Soon)
                  </Button>
                </div>
              ) : userRole === 'professor' ? (
                <div className="text-center">
                  <p className="text-lg mb-8">
                    Professor features coming soon! You'll be able to manage slides, approve 
                    AI-generated materials, and share them with your students.
                  </p>
                  <Button className="bg-primary-DEFAULT hover:bg-primary-DEFAULT/90">
                    Manage Content (Coming Soon)
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <p>Loading your portal...</p>
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
