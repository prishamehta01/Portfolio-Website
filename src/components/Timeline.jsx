import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight, CheckCircle } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('work');
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="section timeline-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Career Path</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            A timeline of my software engineering roles, team leadership, and academic background.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="timeline-tabs-wrap">
          <button
            onClick={() => setActiveTab('work')}
            className={`timeline-tab-btn ${activeTab === 'work' ? 'active' : ''}`}
          >
            <Briefcase size={18} />
            <span>Work Experience</span>
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`timeline-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
          >
            <GraduationCap size={18} />
            <span>Education</span>
          </button>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-line" />

          {activeTab === 'work' &&
            experienceData.map((item, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div key={idx} className="timeline-item animate-fade-in">
                  {/* Timeline Dot Icon */}
                  <div className="timeline-dot">
                    <Briefcase size={16} />
                  </div>

                  {/* Card Content */}
                  <div className={`timeline-card glass-card ${isExpanded ? 'expanded' : ''}`}>
                    <div
                      className="timeline-card-header"
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    >
                      <div>
                        <span className="timeline-period">
                          <Calendar size={14} /> {item.period}
                        </span>
                        <h3 className="timeline-role">{item.role}</h3>
                        <div className="timeline-company-row">
                          <span className="timeline-company">{item.company}</span>
                          <span className="timeline-location">
                            <MapPin size={12} /> {item.location}
                          </span>
                        </div>
                      </div>

                      <button className="expand-toggle-btn" aria-label="Toggle details">
                        <ChevronRight
                          size={20}
                          className={`chevron-icon ${isExpanded ? 'rotated' : ''}`}
                        />
                      </button>
                    </div>

                    <p className="timeline-desc">{item.description}</p>

                    {/* Expandable Achievements */}
                    {isExpanded && (
                      <div className="timeline-details animate-fade-in">
                        <h4 className="achievements-heading">Key Accomplishments & Impact:</h4>
                        <ul className="achievements-list">
                          {item.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="achievement-item">
                              <CheckCircle size={16} className="ach-icon" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Pills */}
                        <div className="timeline-tech-row">
                          <span className="tech-row-label">Stack Used:</span>
                          {item.technologies.map((tech, tIdx) => (
                            <span key={tIdx} className="timeline-tech-pill">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

          {activeTab === 'education' &&
            educationData.map((edu, idx) => (
              <div key={idx} className="timeline-item animate-fade-in">
                <div className="timeline-dot">
                  <GraduationCap size={16} />
                </div>

                <div className="timeline-card glass-card expanded">
                  <div className="timeline-card-header">
                    <div>
                      <span className="timeline-period">
                        <Calendar size={14} /> {edu.period}
                      </span>
                      <h3 className="timeline-role">{edu.degree}</h3>
                      <div className="timeline-company-row">
                        <span className="timeline-company">{edu.institution}</span>
                      </div>
                    </div>
                  </div>

                  <p className="timeline-desc">{edu.details}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
