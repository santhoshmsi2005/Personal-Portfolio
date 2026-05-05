import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-container">
        <div className="footer-content">
          <a href="#home" className="logo glow-text">SM.</a>
          <p className="footer-text">Building digital experiences with code and creativity.</p>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/santhoshmsi2005" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/santhosh-m-230434395" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
          <a href="#contact"><Mail size={20} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Santhosh M. Built with <Heart size={14} className="heart-icon" /> and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
