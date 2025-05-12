
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface NavActionsProps {
  isAuthenticated: boolean;
  toggleMenu?: () => void;
}

export default function NavActions({ isAuthenticated, toggleMenu }: NavActionsProps) {
  const handleAction = () => {
    if (toggleMenu) toggleMenu();
  };

  return (
    <>
      {isAuthenticated ? (
        <Link to="/portal" onClick={handleAction}>
          <Button className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-6">
            Portal
          </Button>
        </Link>
      ) : (
        <>
          <Button 
            className="text-white hover:text-neon-blue transition-colors px-6 py-2"
            variant="ghost"
            onClick={() => {
              console.log('Login clicked');
              if (toggleMenu) toggleMenu();
            }}
          >
            Login
          </Button>
          
          <Button 
            className="bg-transparent border-2 border-neon-blue text-white hover:text-neon-blue glow-on-hover rounded-full px-6 py-2"
            onClick={() => {
              console.log('Sign Up clicked');
              if (toggleMenu) toggleMenu();
            }}
          >
            Sign Up
          </Button>
        </>
      )}
    </>
  );
}
