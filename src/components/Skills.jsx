import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const skills = [
    // 💻 Development Skills
    { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-pink-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-700' },
    { name: 'React.js', level: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'React Native', level: 80, color: 'from-blue-400 to-indigo-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
    { name: 'Express.js', level: 85, color: 'from-gray-500 to-gray-700' },
    { name: 'MongoDB', level: 80, color: 'from-green-400 to-green-600' },
    { name: 'Firebase', level: 75, color: 'from-yellow-500 to-orange-500' },
    { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'Git', level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'AWS', level: 70, color: 'from-yellow-500 to-orange-600' },

    // 🎬 Video & Content Creation Skills
    { name: t('skills.videoEditing', 'Video Editing (YouTube, Shorts, Reels)'), level: 88, color: 'from-pink-500 to-purple-600' },
    { name: t('skills.storytelling', 'Storytelling & Script Structuring'), level: 80, color: 'from-purple-500 to-indigo-600' },
    { name: t('skills.cinematic', 'Cinematic Transitions & Effects'), level: 82, color: 'from-red-500 to-pink-600' },
    { name: t('skills.colorGrading', 'Color Grading & Sound Sync'), level: 78, color: 'from-indigo-500 to-violet-600' },
    { name: t('skills.contentStrategy', 'Content Repurposing Strategy'), level: 75, color: 'from-green-500 to-emerald-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('skills.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <motion.div
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;