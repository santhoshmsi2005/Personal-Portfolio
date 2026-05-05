import React from 'react';
import { User, Code, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Hello! I'm <strong>Santhosh M</strong>, a passionate MERN Stack and Web Developer. 
              I specialize in building robust, scalable, and visually stunning web applications. 
              With a deep understanding of both front-end aesthetics and back-end architecture, 
              I bridge the gap between design and functionality.
            </p>
            <p>
              My journey in web development started with a curiosity for how things work on the internet. 
              Today, I leverage modern tools like React, Node.js, and MongoDB to deliver comprehensive digital solutions. 
              I am constantly learning and adapting to the ever-evolving tech landscape.
            </p>
          </motion.div>

          <motion.div 
            className="about-cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="about-card glass-panel">
              <Code className="about-icon" />
              <h3>Frontend</h3>
              <p>Crafting intuitive and dynamic user interfaces using React, HTML, CSS, and Tailwind CSS.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="about-card glass-panel">
              <Server className="about-icon" />
              <h3>Backend</h3>
              <p>Building secure and scalable APIs with Node.js, Express, and Python.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="about-card glass-panel">
              <User className="about-icon" />
              <h3>Problem Solver</h3>
              <p>Approaching challenges with a logical mindset and a focus on clean, maintainable code.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
