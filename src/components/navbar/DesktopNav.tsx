
import { Link } from 'react-router-dom';

interface DesktopNavProps {
  isScrolled: boolean;
}

export default function DesktopNav({ isScrolled }: DesktopNavProps) {
  return (
    <div className={`hidden md:flex items-center transition-all duration-500 ${
      isScrolled ? 'space-x-6 flex-grow justify-center' : 'space-x-8'
    }`}>
      <Link to="/" className="navbar-item px-3 py-2 text-sm font-medium text-white hover:text-neon-blue transition-colors">
        Home
      </Link>
      <Link to="/about" className="navbar-item px-3 py-2 text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors">
        About
      </Link>
      <Link to="/services" className="navbar-item px-3 py-2 text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors">
        Services
      </Link>
      <Link to="/pricing" className="navbar-item px-3 py-2 text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors">
        Pricing
      </Link>
      <Link to="/contact" className="navbar-item px-3 py-2 text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors">
        Contact
      </Link>
    </div>
  );
}
