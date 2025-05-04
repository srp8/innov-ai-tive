
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  isAuthenticated: boolean;
}

export default function MobileMenu({ isOpen, toggleMenu, isAuthenticated }: MobileMenuProps) {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden glassmorphism shadow-lg animate-slide-in">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link 
          to="/" 
          className="block px-3 py-2 text-base font-medium text-white hover:text-neon-blue transition-colors"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-neon-blue transition-colors"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link 
          to="/services" 
          className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-neon-blue transition-colors"
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link 
          to="/pricing" 
          className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-neon-blue transition-colors"
          onClick={toggleMenu}
        >
          Pricing
        </Link>
        <Link 
          to="/contact" 
          className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-neon-blue transition-colors"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        
        <div className="pt-4 pb-2 border-t border-charcoal-light/20">
          {isAuthenticated ? (
            <Link 
              to="/portal" 
              className="block px-3 py-2" 
              onClick={toggleMenu}
            >
              <Button className="w-full bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue rounded-full">
                Portal
              </Button>
            </Link>
          ) : (
            <div className="space-y-2">
              <div className="px-3 py-2">
                <Button 
                  className="w-full"
                  variant="ghost"
                  onClick={() => {
                    console.log('Login clicked');
                    toggleMenu();
                  }}
                >
                  Login
                </Button>
              </div>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue rounded-full glow-on-hover"
                  onClick={() => {
                    console.log('Sign Up clicked');
                    toggleMenu();
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
