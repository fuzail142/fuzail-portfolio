import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      id: 1,
      institution: 'S.M.I.T (Saylani Mass I.T Training)',
      degree: 'MERN Stack Developer Certification',
      period: 'January 2023 - January 2025',
      description: 'Comprehensive training in modern web development technologies including React, Node.js, Express, and MongoDB with hands-on project experience.',
      icon: <FaGraduationCap className="text-2xl" />
    },
    {
      id: 2,
      institution: 'JavaScript Essentials 1',
      degree: 'Cisco Certification',
      period: '2023',
      description: 'Certified in JavaScript fundamentals and programming concepts with focus on modern ES6+ features and best practices.',
      icon: <FaCertificate className="text-2xl" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education & Certifications
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className={`absolute top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white ${index % 2 === 0 ? 'left-8 md:left-1/2 md:-ml-12' : 'left-8 md:left-1/2 md:ml-4'}`}>
                  {edu.icon}
                </div>
                
                <motion.div
                  className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ml-14 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} hover:shadow-xl transition-shadow`}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
                    <span className="text-blue-600 font-medium">{edu.period}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;