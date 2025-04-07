import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';

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