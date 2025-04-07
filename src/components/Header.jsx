import { useState, useContext } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
            Muhammad Fuzail
          </a>

          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;