
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Placeholder for authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle for mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Check if page is scrolled to add background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glassmorphism shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center justify-between w-full max-w-5xl">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className={`font-bold text-xl md:text-2xl font-poppins transition-all hover:animate-glitch ${
                isScrolled ? 'text-neon-blue neon-text' : 'text-white'
              }`}>
                InnovAItive
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-white hover:text-neon-blue transition-colors">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors">
                About
              </Link>
              
              {isAuthenticated ? (
                <Link to="/portal">
                  <Button className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-6">
                    Portal
                  </Button>
                </Link>
              ) : (
                <Button 
                  className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-6"
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
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-neon-blue focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glassmorphism shadow-lg animate-fade-in">
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
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue rounded-full glow-on-hover"
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
