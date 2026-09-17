import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [accent, setAccent] = useState(() => {
    const saved = localStorage.getItem('portfolio_accent');
    return (saved === 'violet' || saved === 'emerald') ? saved : 'violet';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem('portfolio_accent', accent);
  }, [accent]);

  return (
    <div className="portfolio-app">
      <Navbar
        accent={accent}
        setAccent={setAccent}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
