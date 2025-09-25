import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin, Heart, User, Calendar } from 'lucide-react';
import logoImage from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Find Grounds', href: '#grounds', icon: MapPin },
    { name: 'My Bookings', href: '#bookings', icon: Calendar },
    { name: 'Wishlist', href: '#wishlist', icon: Heart },
    { name: 'Dashboard', href: '#dashboard', icon: User },
  ];

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Login
                </Button>
                <Button variant="hero" className="w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;