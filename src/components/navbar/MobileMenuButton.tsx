
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileMenuButton({ isMenuOpen, toggleMenu }: MobileMenuButtonProps) {
  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-neon-blue focus:outline-none transition-colors"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}
