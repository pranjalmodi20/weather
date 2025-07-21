import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Weather Forecast</h4>
          <p>Your reliable weather companion</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Settings">Settings</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Weather Data</h4>
          <p>Powered by OpenWeatherMap API</p>
          <p>Updated every 10 minutes</p>
        </div>
        
        <div className="footer-section social-links">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
      
      
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Weather Forecast App. All rights reserved.</p>
        </div>

    </footer>
  );
};

export default Footer;