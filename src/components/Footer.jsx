import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-2">Muhammad Fuzail</h3>
            <p className="text-blue-100">MERN Stack Developer</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="https://www.linkedin.com/in/muhammad-fuzail-3980592aa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a 
              href="mailto:fuzailkhalil142@gmail.com" 
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl" />
            </a>
            <a 
              href="https://github.com/fuzail142" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~01de921c27a4bc514e" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Upwork"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
                viewBox="0 0 32 32"
              >
                <path d="M25.687 9.812a6.314 6.314 0 0 0-6.312 6.312v2.906c0 .656-.531 1.188-1.187 1.188s-1.188-.531-1.188-1.188v-4.375a.8.8 0 0 0-.812-.812.8.8 0 0 0-.812.812v3.625c0 2.469-2 4.469-4.469 4.469s-4.469-2-4.469-4.469v-7.562h2.656v7.562a1.81 1.81 0 1 0 3.625 0V9.937h2.687v1.688a6.38 6.38 0 0 1 5.094-2.562c3.5 0 6.312 2.844 6.312 6.312 0 3.5-2.844 6.312-6.312 6.312-1.031 0-2.031-.25-2.906-.688l.719-2.219c.688.438 1.531.688 2.188.688 2.062 0 3.719-1.688 3.719-3.719s-1.656-3.719-3.719-3.719z" />
              </svg>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-blue-400/30 text-center text-blue-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} Muhammad Fuzail. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React, Tailwind CSS, and ❤️</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
