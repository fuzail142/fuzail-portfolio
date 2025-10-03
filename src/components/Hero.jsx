import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import profileImage from '../assets/fuzail.png';

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const [text] = useTypewriter({
    words: [
      'MERN Stack Developer',
      'Frontend Specialist',
      'Backend Engineer',
      'Visual Content Creator',
      'YouTube & Reels Editor',
      'Problem Solver',
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 relative overflow-hidden"
    >
      {/* Floating 3D shapes in background */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 dark:bg-blue-400/10"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 dark:bg-purple-400/10"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-green-500/10 dark:bg-green-400/10"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">Muhammad Fuzail</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-10">
            <span className="font-mono">{text}</span>
            <Cursor cursorColor={darkMode ? '#60a5fa' : '#3b82f6'} />
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            I craft blazing-fast web apps using React, Node.js, MongoDB & Firebase — and also produce engaging visual content including YouTube videos, Reels, Shorts, and social media edits with storytelling, transitions, and pacing that keeps viewers hooked.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#projects"
              className="border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark shadow-2xl transition-all duration-500 hover:scale-105 group">
            <img 
              src={profileImage}
              alt="Muhammad Fuzail - Professional MERN Stack Developer and Video Editor"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = darkMode 
                  ? "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%231f2937' width='200' height='200'/%3E%3Ctext fill='%2360a5fa' font-family='sans-serif' font-size='72' dy='.35em' text-anchor='middle' x='100' y='100'%3EMF%3C/text%3E%3C/svg%3E"
                  : "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23bfdbfe' width='200' height='200'/%3E%3Ctext fill='%233b82f6' font-family='sans-serif' font-size='72' dy='.35em' text-anchor='middle' x='100' y='100'%3EMF%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 px-4">
              <span className="text-white text-lg font-medium text-center w-full">
                MERN + Visual Content Expert
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;