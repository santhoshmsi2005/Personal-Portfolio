import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! (Simulation)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ask Me Anything
        </motion.h2>
        
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Get In Touch</h3>
            <p>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="info-item">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div>
                <h4>Email</h4>
                <p>santhosh.m@example.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass-panel" 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Hello Santhosh, I'd like to discuss..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
