import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }) + ' PST'
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);

    // Simulate server submission delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, a job opportunity, or just want to chat tech? Send me a message!
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            {/* Direct Email Card */}
            <div className="contact-card glass-card">
              <div className="contact-card-header">
                <div className="contact-icon-wrap">
                  <Mail size={22} className="contact-icon" />
                </div>
                <div>
                  <div className="contact-label">Direct Email</div>
                  <div className="contact-value">{personalInfo.email}</div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className={`btn btn-secondary btn-sm copy-btn ${copied ? 'copied' : ''}`}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Location & Timezone Card */}
            <div className="contact-card glass-card">
              <div className="contact-card-header">
                <div className="contact-icon-wrap">
                  <MapPin size={22} className="contact-icon" />
                </div>
                <div>
                  <div className="contact-label">Based In</div>
                  <div className="contact-value">{personalInfo.location}</div>
                </div>
              </div>
              <div className="timezone-row">
                <Clock size={16} className="clock-icon" />
                <span>Local Time: {currentTime}</span>
              </div>
            </div>

            {/* Quick Status Banner */}
            <div className="contact-status-card glass-card">
              <Sparkles size={20} className="status-sparkle" />
              <div>
                <h4>Fast Response Guaranteed</h4>
                <p>I typically reply to emails within 24 hours on business days.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col glass-card">
            <h3 className="form-heading">Send a Message</h3>

            {submitted ? (
              <div className="form-success-message animate-scale-up">
                <div className="success-icon-wrap">
                  <Check size={32} />
                </div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out, {personalInfo.name.split(' ')[0]} will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary submit-btn"
                >
                  {submitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
