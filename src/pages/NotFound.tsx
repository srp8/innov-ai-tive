
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  // Apply dark background to body
  useEffect(() => {
    document.body.classList.add('bg-charcoal');
    
    return () => {
      document.body.classList.remove('bg-charcoal');
    };
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-charcoal">
      <div className="max-w-md w-full text-center">
        <div className="glassmorphism rounded-lg p-8">
          <h1 className="text-6xl font-bold text-neon-blue neon-text mb-4">404</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <h2 className="text-2xl font-semibold text-white mb-6">Page Not Found</h2>
          <p className="text-gray-300 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-neon-blue text-charcoal hover:bg-neon-purple glow-on-hover rounded-full">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
