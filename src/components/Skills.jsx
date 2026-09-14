import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Palette,
  Server,
  Terminal,
  Database,
  Cpu,
  Sparkles,
  Box,
  Cloud,
  GitBranch,
  Layout,
  Search,
  Check
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon string names to Lucide icons
const iconMap = {
  Code2,
  FileCode,
  Palette,
  Server,
  Terminal,
  Database,
  Cpu,
  Sparkles,
  Box,
  Cloud,
  GitBranch,
  Layout
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Frontend', 'Backend', 'AI & Cloud', 'DevOps & Tools'];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my tech stack, frameworks, database systems, and development tools.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="skills-filter-bar">
          {/* Category Tabs */}
          <div className="skills-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`skill-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="skills-search-wrap">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="search-clear-btn">
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code2;

            return (
              <div key={idx} className="skill-card glass-card glass-card-interactive">
                <div className="skill-card-top">
                  <div className="skill-icon-wrap">
                    <IconComponent size={22} className="skill-icon" />
                  </div>
                  {skill.popular && (
                    <span className="skill-popular-badge">Top Tool</span>
                  )}
                </div>

                <div className="skill-info">
                  <div className="skill-name-row">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-category-tag">{skill.category}</div>

                  {/* Animated Skill Level Bar */}
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="skills-empty-state glass-card">
            <p>No skills found matching "{searchQuery}". Try searching for another term!</p>
          </div>
        )}
      </div>
    </section>
  );
}
