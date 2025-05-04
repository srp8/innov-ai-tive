
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Placeholder for authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle for mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-primary-DEFAULT font-bold text-xl md:text-2xl font-inter">
              InnovAItive
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary-DEFAULT">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-DEFAULT">
              About
            </Link>
            
            {isAuthenticated ? (
              <Link to="/portal">
                <Button variant="default" className="bg-primary-DEFAULT hover:bg-primary-DEFAULT/90">
                  Portal
                </Button>
              </Link>
            ) : (
              <Button 
                variant="default" 
                className="bg-primary-DEFAULT hover:bg-primary-DEFAULT/90"
                onClick={() => {
                  // This would be connected to Clerk authentication later
                  console.log('Login/Signup clicked');
                }}
              >
                Login / Signup
              </Button>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-DEFAULT focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary-DEFAULT"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-DEFAULT"
              onClick={toggleMenu}
            >
              About
            </Link>
            
            {isAuthenticated ? (
              <Link 
                to="/portal" 
                className="block px-3 py-2" 
                onClick={toggleMenu}
              >
                <Button className="w-full bg-primary-DEFAULT hover:bg-primary-DEFAULT/90">
                  Portal
                </Button>
              </Link>
            ) : (
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-primary-DEFAULT hover:bg-primary-DEFAULT/90"
                  onClick={() => {
                    console.log('Login/Signup clicked');
                    setIsMenuOpen(false);
                  }}
                >
                  Login / Signup
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
