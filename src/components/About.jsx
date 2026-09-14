import React, { useState } from 'react';
import { User, Cpu, Award, Zap, CheckCircle2, MapPin, Mail, Globe, Trophy, GraduationCap } from 'lucide-react';
import { aboutData, personalInfo, achievementsData } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'philosophy', label: 'Engineering Philosophy', icon: Cpu },
    { id: 'achievements', label: 'Awards & Achievements', icon: Trophy },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Discover My Background</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Software Engineering Intern focused on Spring Boot backend systems, log analysis, and AI/Computer Vision solutions.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="about-grid">
          {/* Left Side Navigation Tabs */}
          <div className="about-tabs-col">
            <div className="about-nav-tabs glass-card">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`about-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  >
                    <IconComponent size={18} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Meta Cards */}
            <div className="about-meta-card glass-card">
              <div className="meta-item">
                <MapPin size={18} className="meta-icon" />
                <div>
                  <div className="meta-label">Location</div>
                  <div className="meta-val">{personalInfo.location}</div>
                </div>
              </div>
              <div className="meta-item">
                <Mail size={18} className="meta-icon" />
                <div>
                  <div className="meta-label">Email</div>
                  <div className="meta-val">{personalInfo.email}</div>
                </div>
              </div>
              <div className="meta-item">
                <GraduationCap size={18} className="meta-icon" />
                <div>
                  <div className="meta-label">Education</div>
                  <div className="meta-val">B.E. CSE (9.4 CGPA)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content Display */}
          <div className="about-content-col glass-card">
            {activeTab === 'overview' && (
              <div className="tab-pane animate-fade-in">
                <h3 className="pane-title">Backend Engineer & AI Developer</h3>
                <p className="pane-text">{aboutData.summary}</p>
                <p className="pane-text">
                  Currently at <strong>Checkpoint Systems</strong>, I engineered an in-house log analysis platform utilizing Java, Spring Boot, and OpenSearch to streamline L2/L3 support operations and lower observability costs. I have also automated over 600 regression test cases with Playwright and built AI projects like <em>AquaSentinel</em> (90% drone detection accuracy) and <em>Recall</em> (pgvector semantic memory platform).
                </p>

                <div className="highlights-grid">
                  {aboutData.highlights.map((item, idx) => (
                    <div key={idx} className="highlight-card">
                      <CheckCircle2 size={20} className="highlight-icon" />
                      <div>
                        <h4 className="highlight-title">{item.title}</h4>
                        <p className="highlight-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div className="tab-pane animate-fade-in">
                <h3 className="pane-title">Principles That Drive My Code</h3>
                <div className="philosophy-list">
                  <div className="philosophy-item">
                    <div className="philosophy-num">01</div>
                    <div>
                      <h4>Robust Object-Oriented Architecture</h4>
                      <p>Leveraging Java & Spring Boot design patterns to build clean, maintainable, and extensible backend APIs.</p>
                    </div>
                  </div>

                  <div className="philosophy-item">
                    <div className="philosophy-num">02</div>
                    <div>
                      <h4>Data-Driven Problem Solving</h4>
                      <p>Applying strong Data Structures & Algorithms knowledge (1st place S.U.I.T.S Hackathon) to optimize database queries and system performance.</p>
                    </div>
                  </div>

                  <div className="philosophy-item">
                    <div className="philosophy-num">03</div>
                    <div>
                      <h4>Automated Quality & Observability</h4>
                      <p>Combining centralized log search with automated Playwright testing pipelines to catch issues early and eliminate repetitive manual effort.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="tab-pane animate-fade-in">
                <h3 className="pane-title">Awards & Honors</h3>
                <div className="capabilities-grid">
                  {achievementsData.map((ach, idx) => (
                    <div key={idx} className="cap-card">
                      <Trophy size={24} className="cap-icon" />
                      <h4>{ach.title}</h4>
                      <p>{ach.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {aboutData.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
