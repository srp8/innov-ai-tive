
import { Link } from 'react-router-dom';

interface NavLogoProps {
  isScrolled: boolean;
}

export default function NavLogo({ isScrolled }: NavLogoProps) {
  return (
    <div 
      className={`flex-shrink-0 flex items-center navbar-logo ${
        isScrolled ? 'mr-4' : 'mr-0'
      }`}
    >
      <Link 
        to="/" 
        className={`font-bold text-xl md:text-2xl font-poppins transition-all hover:animate-glitch ${
          isScrolled ? 'text-neon-blue neon-text' : 'text-white'
        }`}
      >
        InnovAItive
      </Link>
    </div>
  );
}
