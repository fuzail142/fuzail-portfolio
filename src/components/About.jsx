import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaLightbulb, FaServer } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const features = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Speed & Performance",
      description: "Optimized applications with lazy loading, code splitting, and modern caching techniques."
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Full-Stack Expertise",
      description: "From pixel-perfect UIs to robust backends, I handle all aspects with proficiency."
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Innovative Solutions",
      description: "Solving complex challenges with elegant, scalable solutions that stand the test of time."
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Cloud Integration",
      description: "Experience with AWS, Firebase, and other cloud platforms for scalable deployments."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              I'm <span className="font-semibold text-primary-light dark:text-primary-dark">Muhammad Fuzail</span>, a passionate MERN Stack Developer dedicated to creating exceptional digital experiences that drive real business results.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              I specialize in building <span className="font-semibold">high-performance web applications</span> using cutting-edge technologies like React, Node.js, Express, and MongoDB.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              My approach combines <span className="font-semibold">technical expertise</span> with a keen eye for <span className="font-semibold">modern design</span> to deliver solutions that are not only functional but visually stunning.
            </p>
          </motion.div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-primary-light dark:text-primary-dark mr-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">{feature.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 pl-16">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;