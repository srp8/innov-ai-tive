import { useState } from 'react';
import NavLogo from './navbar/NavLogo';
import DesktopNav from './navbar/DesktopNav';
import AuthButtons from './navbar/AuthButtons';
import MobileMenuButton from './navbar/MobileMenuButton';
import MobileMenu from './navbar/MobileMenu';
import { useScrollHandler } from './navbar/ScrollHandler';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollHandler();
  // Placeholder for authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle for mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-scrolled navbar-curved' : 'navbar-initial bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between h-16 items-center ${
          isScrolled ? 'justify-center' : 'justify-between'
        }`}>
          {/* Logo */}
          <NavLogo isScrolled={isScrolled} />
          
          {/* Desktop navigation */}
          <DesktopNav isScrolled={isScrolled} />
          
          {/* Action buttons */}
          <AuthButtons isScrolled={isScrolled} isAuthenticated={isAuthenticated} />
          
          {/* Mobile menu button */}
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      
      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} isAuthenticated={isAuthenticated} />
    </nav>
  );
}
