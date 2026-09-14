import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#home" className="nav-logo">
              <div className="logo-icon-wrap">
                <Code2 size={20} className="logo-icon" />
              </div>
              <span className="logo-text">
                {personalInfo.name.split(' ')[0]}
                <span className="gradient-text">.{personalInfo.name.split(' ')[1]}</span>
              </span>
            </a>
            <p className="footer-tagline">
              Crafting high-impact web software and intelligent AI solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <div className="footer-links-grid">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="footer-social-icons">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & <Heart size={14} className="heart-icon" />
          </p>

          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
