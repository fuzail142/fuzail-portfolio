import { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    localStorage.setItem('preferredLanguage', lng);
    
    // Update HTML direction for RTL languages
    if (lng === 'ar' || lng === 'ur') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = lng;
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lng;
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const languageToSet = savedLanguage || i18n.language;
    
    changeLanguage(languageToSet);
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};