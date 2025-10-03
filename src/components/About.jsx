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
      description: "Optimized apps with lazy loading, code splitting & modern caching techniques."
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Full-Stack Expertise",
      description: "From frontend to backend, I build secure, scalable, and stunning web apps."
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Creative Problem-Solving",
      description: "I blend creativity with logic to deliver solutions that actually move the needle."
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Cloud & Firebase",
      description: "Seamless integration with Firebase, AWS & modern cloud platforms for scale."
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
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              I’m <span className="font-semibold text-primary-light dark:text-primary-dark">Muhammad Fuzail</span> — a Full-Stack MERN Developer and Visual Content Specialist.
              I help brands, startups, and creators build high-performance web apps and scroll-stopping content that delivers real results.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              With a strong grip on React, Node.js, Express, MongoDB, Firebase,supabase, and Tailwind CSS, I create fast, secure, and modern applications with clean UI and seamless UX.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I also bring visual storytelling to life through pro-level video editing for YouTube and social media — mixing cinematic transitions, pacing, and creativity to capture attention and build your brand.
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
