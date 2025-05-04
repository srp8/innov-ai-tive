
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Apply dark background to body
  useEffect(() => {
    document.body.classList.add('bg-charcoal');
    
    return () => {
      document.body.classList.remove('bg-charcoal');
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission to Supabase
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      setEmail('');
      setMessage('');
      setName('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal-dark">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8 font-poppins">
              <span className="text-neon-blue neon-text">Contact</span> Us
            </h1>
            
            <div className="glassmorphism rounded-lg p-8">
              <p className="text-gray-300 text-center mb-8">
                Have questions about InnovAItive? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-neon-blue mb-2 font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    className="bg-charcoal border-charcoal-light text-white placeholder:text-gray-400 focus:border-neon-blue"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-neon-blue mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-charcoal border-charcoal-light text-white placeholder:text-gray-400 focus:border-neon-blue"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-neon-blue mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md bg-charcoal border-charcoal-light text-white placeholder:text-gray-400 focus:border-neon-blue px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    type="submit"
                    className="bg-neon-blue text-charcoal hover:bg-neon-purple glow-on-hover rounded-full px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
              
              <div className="mt-12 pt-8 border-t border-charcoal-light text-center">
                <p className="text-neon-purple mb-2">Alternative Contact Methods</p>
                <p className="text-gray-300">Email: <a href="mailto:info@innovaitive.example.com" className="text-neon-blue hover:text-neon-purple">info@innovaitive.example.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
