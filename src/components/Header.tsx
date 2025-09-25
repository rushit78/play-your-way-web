import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import logoImage from '@/assets/logo.png';

const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="GetMySport" className="h-8 w-8" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">GetMySport</h1>
              <p className="text-xs text-muted-foreground -mt-1">Your Game, Your Way</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>info@getmysport.com</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;