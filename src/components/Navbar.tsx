
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Routes', href: '#popular-routes' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-red to-brand-darkRed flex items-center justify-center">
              <span className="text-white font-bold text-xl">RB</span>
            </div>
            <span className={cn(
              "font-bold text-2xl transition-colors duration-300",
              isScrolled ? 'text-brand-red' : 'text-white'
            )}>
              RideBus
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-all duration-300 hover:text-brand-red relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-red after:transition-all after:duration-300",
                isScrolled ? 'text-gray-800' : 'text-white'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <SignedOut>
            <Button
              variant="ghost"
              className={cn(
                "font-medium transition-colors",
                isScrolled ? 'text-gray-800 hover:text-brand-red hover:bg-gray-100/60' : 'text-white hover:text-white hover:bg-white/10'
              )}
              onClick={() => navigate('/sign-in')}
            >
              Sign In
            </Button>
            <Button
              className="bg-brand-red hover:bg-brand-darkRed text-white transition-colors duration-300"
              onClick={() => navigate('/sign-up')}
            >
              Sign Up
            </Button>
          </SignedOut>
          
          <SignedIn>
            <Button
              className="bg-brand-red hover:bg-brand-darkRed text-white transition-colors duration-300 mr-2"
              onClick={() => navigate('/dashboard')}
            >
              Book Now
            </Button>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                }
              }}
            />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-red"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-800 hover:text-brand-red py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-3 border-t">
              <SignedOut>
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  onClick={() => {
                    navigate('/sign-in');
                    setMobileMenuOpen(false);
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  className="w-full justify-center bg-brand-red hover:bg-brand-darkRed"
                  onClick={() => {
                    navigate('/sign-up');
                    setMobileMenuOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </SignedOut>
              
              <SignedIn>
                <Button 
                  className="w-full justify-center bg-brand-red hover:bg-brand-darkRed"
                  onClick={() => {
                    navigate('/dashboard');
                    setMobileMenuOpen(false);
                  }}
                >
                  Dashboard
                </Button>
                <div className="flex justify-center py-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
