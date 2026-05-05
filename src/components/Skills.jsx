import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Python', 
    'React', 'Node.js', 'MongoDB', 'Git', 'GitHub', 
    'Vercel Hosting', 'Firebase Hosting'
  ];

  // Duplicate the list for the infinite marquee effect
  const duplicatedSkills = [...skillsList, ...skillsList];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <motion.div 
          className="marquee-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="marquee">
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="skill-card glass-panel">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
