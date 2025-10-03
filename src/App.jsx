import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
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
        <Contact />
        <Footer />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;