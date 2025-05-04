
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface AuthButtonsProps {
  isScrolled: boolean;
  isAuthenticated: boolean;
}

export default function AuthButtons({ isScrolled, isAuthenticated }: AuthButtonsProps) {
  return (
    <div className={`hidden md:flex items-center navbar-actions ${
      isScrolled ? 'space-x-2 ml-4' : 'space-x-4'
    }`}>
      {isAuthenticated ? (
        <Link to="/portal">
          <Button className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-6">
            Portal
          </Button>
        </Link>
      ) : (
        <>
          <Button 
            className={`text-white hover:text-neon-blue transition-colors ${
              isScrolled ? 'px-4 py-1' : 'px-6 py-2'
            }`}
            variant="ghost"
            onClick={() => {
              console.log('Login clicked');
            }}
          >
            Login
          </Button>
          
          <Button 
            className={`bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full ${
              isScrolled ? 'px-4 py-1' : 'px-6 py-2'
            }`}
            onClick={() => {
              console.log('Sign Up clicked');
            }}
          >
            Sign Up
          </Button>
        </>
      )}
    </div>
  );
}
