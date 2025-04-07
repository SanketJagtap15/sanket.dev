
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar = ({ toggleDarkMode, isDarkMode }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-primary">
              Sanket<span className="font-normal text-gray-800 dark:text-gray-200">.dev</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/experience" className="px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
                Experience
              </Link>
              <Link to="/projects" className="px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/experience"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
