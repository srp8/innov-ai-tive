import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavLogo from './navbar/NavLogo';
import NavLinks from './navbar/NavLinks';
import NavActions from './navbar/NavActions';
import MobileMenu from './navbar/MobileMenu';

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
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-scrolled navbar-curved' : 'navbar-initial bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLogo isScrolled={isScrolled} />
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8 transition-all duration-500">
            <NavLinks />
          </div>
          
          {/* Action buttons */}
          <div className="hidden md:flex items-center navbar-actions space-x-4">
            <NavActions isAuthenticated={isAuthenticated} />
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
      
      {/* Mobile menu */}
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        isAuthenticated={isAuthenticated} 
        toggleMenu={toggleMenu} 
      />
    </nav>
  );
}
