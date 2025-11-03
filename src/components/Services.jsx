import { motion } from 'framer-motion';
import { FaCode, FaVideo, FaMobile, FaServer, FaPaintBrush, FaChartLine } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      items: t('services.webDev.items', { returnObjects: true })
    },
    {
      icon: <FaServer className="text-4xl" />,
      title: t('services.backend.title'),
      description: t('services.backend.description'),
      items: t('services.backend.items', { returnObjects: true })
    },
    {
      icon: <FaVideo className="text-4xl" />,
      title: t('services.video.title'),
      description: t('services.video.description'),
      items: t('services.video.items', { returnObjects: true })
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      items: t('services.mobile.items', { returnObjects: true })
    },
    {
      icon: <FaPaintBrush className="text-4xl" />,
      title: t('services.design.title'),
      description: t('services.design.description'),
      items: t('services.design.items', { returnObjects: true })
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      items: t('services.seo.items', { returnObjects: true })
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('services.title')}
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('services.description')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: darkMode 
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                  : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-gray-700 dark:text-gray-300">{t('services.includes', 'Includes:')}</h4>
                <ul className="flex flex-wrap gap-2">
                  {service.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
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
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white hover:shadow-xl rounded-lg font-medium transition-all"
          >
            {t('services.consultation')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;