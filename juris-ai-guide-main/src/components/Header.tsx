
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Contract Analyzer', path: '/contract-analyzer' },
    { name: 'AI Lawyer', path: '/ai-lawyer' },
    { name: 'Scheme Recommender', path: '/scheme-recommender' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'FAQs', path: '/faqs' },
    {name: "Sign In", path: "/signIn"},
    {name: "Sign Up", path: "/signUp"},
  ];

  return (
    <header className="border-b bg-white dark:bg-black dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-juris-primary">JurisAI</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium text-gray-700 hover:text-juris-primary transition-colors dark:text-gray-200 dark:hover:text-juris-secondary"
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" asChild>
              <Link to="/ai-lawyer">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 hover:text-juris-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm font-medium text-gray-700 hover:text-juris-primary transition-colors block px-3 py-2 rounded-md dark:text-gray-200 dark:hover:text-juris-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" asChild>
                <Link to="/ai-lawyer" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
