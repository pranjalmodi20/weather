import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', contact: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-hero">
          <div className="contact-icon">📧</div>
          <h1>Get in Touch</h1>
          <p>Have questions or suggestions? We'd love to hear from you!</p>
        </div>

        <div className="content-layout">
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>Bikaner, Rajasthan, India</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>pranjalmodibkn@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🌐</span>
              <div>
                <h4>Website</h4>
                <p>www.weatherapp.com</p>
              </div>
            </div>
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">💼</a>
                <a href="#" className="social-icon">📷</a>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <span className="label-icon">👤</span>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <span className="label-icon">📧</span>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="contact">
                  <span className="label-icon">📱</span>
                  Contact Number
                </label>
                <input 
                  type="tel" 
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your contact number" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <span className="label-icon">💬</span>
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  placeholder="Tell us how we can help you..." 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="btn-icon">🚀</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="additional-info">
          <div className="info-card">
            <span className="info-card-icon">⚡</span>
            <h4>Quick Response</h4>
            <p>We typically respond within 24 hours</p>
          </div>
          <div className="info-card">
            <span className="info-card-icon">🔒</span>
            <h4>Secure & Private</h4>
            <p>Your information is safe with us</p>
          </div>
          <div className="info-card">
            <span className="info-card-icon">💡</span>
            <h4>Feature Requests</h4>
            <p>We love hearing your ideas for improvement</p>
          </div>
        </div>
      </div>
    </div>
  );
}