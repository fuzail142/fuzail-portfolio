import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import calculator from '../assets/images/CAL.png';
import teacafe from '../assets/images/teacafe.png';
import weather from '../assets/images/weather.png';

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  const projects = [
    {
      id: 1,
      title: "Ultimate Web Calculator",
      description:
        "Tired of boring calculators? Say hello to a sleek, ultra-modern, and super-responsive calculator that not only looks great but also handles complex math like a pro!",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: calculator,
      liveUrl: "https://calculator-vi8h.vercel.app/",
      codeUrl: "https://github.com/fuzail142/calculator",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "Designed with a modern UI, smooth animations, and a beautiful gradient background, this app delivers real-time weather updates for any city. Built using React and enhanced with Framer Motion, it ensures a seamless user experience across all devices.",
      technologies: ["React", "CSS", "Framer Motion", "Open-Meteo API"],
      imageUrl: weather,
      liveUrl: "https://net-weather.vercel.app/",
      codeUrl: "https://github.com/fuzail142/beat-weather",
    },
    {
      id: 3,
      title: "TeaCafe",
      description:
        "TeaCafe is a modern, responsive e-commerce website designed for tea enthusiasts. Built with React, Vite, and Tailwind CSS, this project showcases a beautiful UI with smooth animations, a functional shopping cart, and an intuitive filtering system.",
      technologies: ["React", "Vite", "TailwindCSS", "Framer Motion", "React Icons"],
      imageUrl: teacafe,
      liveUrl: "https://teacafe.vercel.app/",
      codeUrl: "https://github.com/fuzail142/teacafe",
    },
  ];
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of my recent projects. Each one was built to solve specific problems and deliver exceptional user experiences.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-light dark:text-primary-dark hover:underline"
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    <FaGithub className="mr-1" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://github.com/fuzail142"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
          >
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;