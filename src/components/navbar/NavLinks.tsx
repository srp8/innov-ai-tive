
import { Link } from 'react-router-dom';

interface NavLinksProps {
  toggleMenu?: () => void;
}

export default function NavLinks({ toggleMenu }: NavLinksProps) {
  const handleClick = () => {
    if (toggleMenu) toggleMenu();
  };

  return (
    <>
      <Link 
        to="/" 
        className="navbar-item px-3 py-2 text-sm font-medium text-white hover:text-neon-blue transition-colors"
        onClick={handleClick}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="navbar-item px-3 py-2 text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors"
        onClick={handleClick}
      >
        About
      </Link>
      <Link 
        to="/services" 
        className="navbar-item px-3 py-2 text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors"
        onClick={handleClick}
      >
        Services
      </Link>
      <Link 
        to="/pricing" 
        className="navbar-item px-3 py-2 text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors"
        onClick={handleClick}
      >
        Pricing
      </Link>
      <Link 
        to="/contact" 
        className="navbar-item px-3 py-2 text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors"
        onClick={handleClick}
      >
        Contact
      </Link>
    </>
  );
}
