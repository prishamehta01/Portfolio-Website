import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Terminal, Sparkles, Code, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentTagline = personalInfo.taglines[taglineIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTagline.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentTagline) {
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause at end before deleting
        }
      } else {
        setDisplayText(currentTagline.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setTaglineIndex((prevIndex) => (prevIndex + 1) % personalInfo.taglines.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex, typingSpeed]);

  return (
    <section id="home" className="hero-section section">
      <div className="container hero-container">
        {/* Left Column: Bio & Text */}
        <div className="hero-content">
          {/* Availability Badge */}
          {personalInfo.availableForHire && (
            <div className="availability-badge">
              <span className="pulse-dot" />
              <span>Available for New Projects & Roles</span>
            </div>
          )}

          {/* Main Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Dynamic Typing Subtitle */}
          <div className="typing-container">
            <Terminal size={22} className="terminal-icon" />
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </div>

          {/* Description */}
          <p className="hero-bio">
            {personalInfo.bio}
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              <span>Let's Connect</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="PrishaMehtaResume.pdf"
              className="btn btn-outline"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>

          </div>

          {/* Social Media Links */}
          <div className="hero-socials">
            <span className="socials-label">Follow Me:</span>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Developer Monogram & Code Visual */}
        <div className="hero-visual">
          <div className="avatar-wrapper code-avatar-wrapper">
            <div className="avatar-glow-ring" />

            {/* Sleek Monogram & Code Visual Card */}
            <div className="code-visual-card glass-card">
              <div className="code-visual-header">
                <div className="code-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="code-filename">PrishaMehta.config.js</span>
              </div>
              <div className="code-visual-body">
                <div className="monogram-badge gradient-text">PM</div>
                <pre className="code-snippet">
                  <code>
                    <span className="code-keyword">const</span> developer = &#123;<br />
                    &nbsp;&nbsp;name: <span className="code-string">'{personalInfo.name}'</span>,<br />
                    &nbsp;&nbsp;role: <span className="code-string">'{personalInfo.title}'</span>,<br />
                    &nbsp;&nbsp;status: <span className="code-string">'Building Great Software'</span>,<br />
                    &nbsp;&nbsp;passions: [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Full-Stack Web'</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'AI Integrations'</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Cloud Systems'</span><br />
                    &nbsp;&nbsp;]<br />
                    &#125;;
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating Badge 1 */}
            <div className="floating-badge badge-top-right glass-card animate-float">
              <div className="badge-icon-wrap">
                <Code size={18} className="badge-icon" />
              </div>
              <div className="badge-info">
                <span className="badge-value">Full-Stack</span>
                <span className="badge-label">Architecture</span>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="floating-badge badge-bottom-left glass-card animate-float" style={{ animationDelay: '2s' }}>
              <div className="badge-icon-wrap">
                <Sparkles size={18} className="badge-icon" />
              </div>
              <div className="badge-info">
                <span className="badge-value">AI Systems</span>
                <span className="badge-label">Integrations</span>
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className="floating-experience-card glass-card">
              <CheckCircle size={20} className="check-badge" />
              <div>
                <div className="exp-years">{personalInfo.yearsOfExperience}+ Years</div>
                <div className="exp-label">Professional Software Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
