import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGlobe, FaPaperPlane, FaInstagram } from 'react-icons/fa';
import { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x6e9xfd', 'template_zsffkrc', form.current, 'heaUqJPof_zyfDjBE')
      .then((result) => {
        console.log('Email sent:', result.text);
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.error('Error:', error.text);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 dark:opacity-5"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 dark:opacity-5"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="section-title dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white/70 dark:bg-gray-700/50 backdrop-blur-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white/70 dark:bg-gray-700/50 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white/70 dark:bg-gray-700/50 backdrop-blur-sm"
                  placeholder="Hello Muhammad, I'd like to discuss a project..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white px-6 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 rounded-xl transition-all">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-primary-light dark:text-primary-dark">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Email</h4>
                    <a 
                      href="mailto:fuzailkhalil142@gmail.com" 
                      className="text-primary-light dark:text-primary-dark hover:underline break-all"
                    >
                      fuzailkhalil142@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 rounded-xl transition-all">
                  <div className="p-3 rounded-xl bg-blue-600 text-white">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/muhammad-fuzail-3980592aa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline break-all"
                    >
                      linkedin.com/in/muhammad-fuzail-3980592aa
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 rounded-xl transition-all">
                  <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
                    <FaGlobe className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Karachi Division, Sindh, Pakistan</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">Also find me on:</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/sheikh_umer_27788/" 
                      className="p-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/muhammad-fuzail-3980592aa" 
                      className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;