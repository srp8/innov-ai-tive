
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import NavActions from './NavActions';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isMenuOpen: boolean;
  isAuthenticated: boolean;
  toggleMenu: () => void;
}

export default function MobileMenu({ isMenuOpen, isAuthenticated, toggleMenu }: MobileMenuProps) {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden glassmorphism shadow-lg animate-slide-in">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavLinks toggleMenu={toggleMenu} />
        
        <div className="pt-4 pb-2 border-t border-charcoal-light/20">
          <NavActions isAuthenticated={isAuthenticated} toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  );
}
