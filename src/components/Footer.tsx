import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import logoImage from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Find Grounds', href: '#grounds' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Support', href: '#support' },
  ];

  const ownerLinks = [
    { name: 'List Your Ground', href: '#list-ground' },
    { name: 'Owner Dashboard', href: '#owner-dashboard' },
    { name: 'Owner Resources', href: '#owner-resources' },
    { name: 'Partner Program', href: '#partner' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Refund Policy', href: '#refund' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logoImage} alt="GetMySport" className="h-10 w-10" />
                <div>
                  <h3 className="text-2xl font-bold">GetMySport</h3>
                  <p className="text-primary-foreground/80 text-sm">Your Game, Your Way</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                The ultimate platform for discovering and booking sports grounds. 
                Connect with your favorite sports and find the perfect venue for your game.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-primary-foreground/80">Mumbai, Maharashtra, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="text-primary-foreground/80">+91 99999 99999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span className="text-primary-foreground/80">hello@getmysport.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Owners */}
            <div>
              <h4 className="text-lg font-semibold mb-6">For Owners</h4>
              <ul className="space-y-3">
                {ownerLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-primary-foreground/80">Get the latest updates on new grounds and features</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary min-w-[250px]"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} GetMySport. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;