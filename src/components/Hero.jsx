import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ['MERN Stack Developer', 'Web Developer', 'UI Enthusiast'];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const tick = () => {
    let i = loopNum % titles.length;
    let fullText = titles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(1500); // pause at end
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="hero-section section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="greeting">Hello, I'm</motion.h2>
          <motion.h1 
            variants={itemVariants} 
            className="name glow-text"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Santhosh M
          </motion.h1>
          <motion.h3 variants={itemVariants} className="title">
            <span className="typed-text">{text}</span>
            <span className="typing-cursor"></span>
          </motion.h3>
          <motion.p variants={itemVariants} className="description">
            I craft responsive, dynamic, and beautiful web applications using modern technologies. 
            Let's build something amazing together.
          </motion.p>
          <motion.div variants={itemVariants} className="cta-group">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </motion.div>
          <motion.div variants={itemVariants} className="social-links">
            <a href="https://github.com/santhoshmsi2005" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/santhosh-m-230434395" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="#contact"><Mail /></a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual animate-float"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Abstract visual representation */}
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="glass-card">
            <div className="code-snippet">
              <span className="code-keyword">const</span> user = {'{'}
              <br/>
              &nbsp;&nbsp;name: <span className="code-string">'Santhosh'</span>,
              <br/>
              &nbsp;&nbsp;role: <span className="code-string">'MERN Dev'</span>
              <br/>
              {'}'};
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
