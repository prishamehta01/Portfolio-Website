import React, { useState, useEffect } from 'react';
import { Sun, Moon, Palette, Menu, X, Code2, Sparkles, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ accent, setAccent }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accentMenuOpen, setAccentMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const accents = [
    { id: 'violet', name: 'Electric Violet', color: '#a855f7' },
    { id: 'emerald', name: 'Emerald Wave', color: '#10b981' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // ScrollSpy active link detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-logo">
          <div className="logo-icon-wrap">
            <Code2 size={22} className="logo-icon" />
          </div>
          <span className="logo-text">
            {personalInfo.name.split(' ')[0]}
            <span className="gradient-text">.{personalInfo.name.split(' ')[1]}</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="nav-actions">
          {/* Accent Color Menu Toggle */}
          <div className="accent-picker-wrapper">
            <button
              onClick={() => setAccentMenuOpen(!accentMenuOpen)}
              className="action-btn"
              title="Change Accent Color"
              aria-label="Change Accent Color"
            >
              <Palette size={18} />
            </button>

            {accentMenuOpen && (
              <div className="accent-dropdown glass-card">
                <div className="dropdown-title">Select Color Theme</div>
                <div className="accent-options">
                  {accents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setAccent(item.id);
                        setAccentMenuOpen(false);
                      }}
                      className={`accent-option ${accent === item.id ? 'selected' : ''}`}
                    >
                      <span className="color-swatch" style={{ backgroundColor: item.color }} />
                      <span>{item.name}</span>
                      {accent === item.id && <Check size={14} className="check-icon" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Hire Me CTA Button */}
          <a href="#contact" className="btn btn-primary nav-cta">
            <Sparkles size={16} />
            <span>Hire Me</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-card">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary mobile-cta"
            >
              Get In Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
