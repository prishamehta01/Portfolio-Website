import React, { useState } from 'react';
import { FolderGit2, Star, GitFork, ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & Cloud', 'Full Stack'];

  const filteredProjects = projectsData.filter((proj) => {
    return activeCategory === 'All' || proj.category === activeCategory;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Recent <span className="gradient-text">Projects & Apps</span>
          </h2>
          <p className="section-subtitle">
            Explore a curated selection of full-stack web applications, AI operations platforms, and cloud tools I've built.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`proj-cat-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card glass-card-interactive">
              {/* Card Image Container */}
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm view-details-btn"
                  >
                    <Eye size={16} />
                    <span>View Case Study</span>
                  </button>
                </div>
                {project.featured && (
                  <span className="featured-badge">
                    <Sparkles size={12} />
                    <span>Featured</span>
                  </span>
                )}
              </div>

              {/* Card Info */}
              <div className="project-card-content">
                <div className="project-meta-row">
                  <span className="project-cat">{project.category}</span>
                  <div className="project-stats">
                    <span title="Stars">
                      <Star size={14} className="star-icon" /> {project.stars}
                    </span>
                    <span title="Forks">
                      <GitFork size={14} /> {project.forks}
                    </span>
                  </div>
                </div>

                <h3 className="project-title" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h3>

                <p className="project-desc">{project.shortDesc}</p>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="project-tag-pill more">+{project.tags.length - 4}</span>
                  )}
                </div>

                {/* Card Footer Links */}
                <div className="project-card-footer">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="project-link-btn read-more"
                  >
                    <span>Details & Architecture</span>
                  </button>

                  <div className="project-external-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-icon-link"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-icon-link"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
