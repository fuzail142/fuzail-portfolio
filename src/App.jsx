import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './i18n';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SEO 
          title="Muhammad Fuzail | MERN Stack Developer & Video Editor"
          description="Professional developer specializing in React, Node.js and video editing with 3+ years experience. Based in Pakistan."
        />
        
        <div className="overflow-x-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </div>
        <Analytics />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;