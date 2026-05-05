import React from 'react';
import { ExternalLink, ShoppingCart, MessageSquare, CheckSquare } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'NexMart',
      description: 'A full-stack E-commerce platform featuring secure payments, user authentication, and an intuitive product dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      icon: <ShoppingCart size={48} />,
      github: 'https://github.com/santhoshmsi2005/nexmart',
      live: '#'
    },
    {
      id: 2,
      title: 'ChatStream',
      description: 'Real-time chat application supporting private and group messaging, online status indicators, and media sharing.',
      tech: ['React', 'Socket.io', 'Express', 'Tailwind CSS'],
      icon: <MessageSquare size={48} />,
      github: 'https://github.com/santhoshmsi2005/chatstream',
      live: '#'
    },
    {
      id: 3,
      title: 'TaskSync',
      description: 'A collaborative task management tool with drag-and-drop functionality, real-time syncing, and customizable boards.',
      tech: ['React', 'Tailwind CSS', 'Firebase Hosting'],
      icon: <CheckSquare size={48} />,
      github: 'https://github.com/santhoshmsi2005/tasksync',
      live: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map(project => (
            <motion.div variants={itemVariants} key={project.id} className="project-card glass-panel">
              <div className="project-image-placeholder">
                {project.icon}
                <div className="overlay"></div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="icon-link">
                    <FaGithub size={20} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="icon-link">
                    <ExternalLink size={20} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
