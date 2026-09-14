import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Star, GitFork, CheckCircle, Layers, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const { title, category, image, stars, forks, demoUrl, githubUrl, tags, details } = project;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container glass-card animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Banner Image */}
        <div className="modal-image-wrap">
          <img src={image} alt={title} className="modal-image" />
          <div className="modal-image-overlay" />
          <div className="modal-category-badge">{category}</div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-header-row">
            <div>
              <h2 className="modal-title">{title}</h2>
              <div className="modal-metrics">
                <span className="metric-pill">
                  <Star size={14} className="metric-icon star" />
                  {stars} Stars
                </span>
                <span className="metric-pill">
                  <GitFork size={14} className="metric-icon" />
                  {forks} Forks
                </span>
              </div>
            </div>

            {/* Modal Action Links */}
            <div className="modal-actions">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="modal-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="modal-tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <div className="modal-divider" />

          {/* Detailed Content */}
          <div className="modal-sections">
            <div className="modal-section">
              <h3 className="modal-section-heading">
                <Layers size={18} className="section-icon" />
                <span>Project Overview</span>
              </h3>
              <p className="modal-text">{details.overview}</p>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-heading">
                <ShieldCheck size={18} className="section-icon" />
                <span>Key Engineering Challenges</span>
              </h3>
              <p className="modal-text">{details.challenges}</p>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-heading">
                <CheckCircle size={18} className="section-icon" />
                <span>Key Features & Architecture</span>
              </h3>
              <ul className="modal-feature-list">
                {details.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <CheckCircle size={16} className="check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
