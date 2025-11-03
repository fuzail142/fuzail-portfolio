import { useState, useContext, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaGlobe, FaChevronDown } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  const languageDropdownRef = useRef(null);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', name: t('languages.en'), flag: '🇺🇸', native: 'English' },
    { code: 'es', name: t('languages.es'), flag: '🇪🇸', native: 'Español' },
    { code: 'fr', name: t('languages.fr'), flag: '🇫🇷', native: 'Français' },
    { code: 'ar', name: t('languages.ar'), flag: '🇸🇦', native: 'العربية' },
    { code: 'ur', name: t('languages.ur'), flag: '🇵🇰', native: 'اردو' },
    { code: 'zh', name: t('languages.zh'), flag: '🇨🇳', native: '中文' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg z-50 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            Muhammad Fuzail
          </a>

          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Controls Container */}
            <div className="flex items-center gap-2">
              {/* Enhanced Language Switcher */}
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                  aria-label="Change language"
                >
                  <FaGlobe className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium hidden sm:block">
                    {currentLang?.flag} {currentLang?.native}
                  </span>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50 backdrop-blur-sm">
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {t('nav.selectLanguage') || 'Select Language'}
                      </p>
                    </div>
                    
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          changeLanguage(language.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 flex items-center gap-3 group ${
                          currentLanguage === language.code 
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-400' 
                            : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span className="text-xl transform group-hover:scale-110 transition-transform">
                          {language.flag}
                        </span>
                        <div className="flex flex-col items-start">
                          <span className="font-medium text-sm">{language.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {language.native}
                          </span>
                        </div>
                        {currentLanguage === language.code && (
                          <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
              </button>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 font-medium border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Language Options */}
              <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800 mt-2 pt-4">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                  {t('nav.selectLanguage') || 'Select Language'}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        changeLanguage(language.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        currentLanguage === language.code 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800' 
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;