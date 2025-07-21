import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Footer from "../Footer";

const About = () => {
  
  return (   
    <div className="about-container">
      <div className="hero-section">
        <div className="weather-icon">🌤️</div>
        <h1>About Weather App</h1>
        <p className="hero-description">
          Welcome to the Weather App! This web application provides real-time weather updates for cities around the world.
          It uses reliable weather APIs to fetch data like temperature, humidity, wind speed, and more.
        </p>
      </div>

      <div className="content-grid">
        <div className="feature-card">
          <div className="card-header">
            <span className="card-icon">⚡</span>
            <h2>Features</h2>
          </div>
          <ul className="feature-list">
            <li>
              <span className="feature-icon">🔍</span>
              <span>Search weather by city name</span>
            </li>
            <li>
              <span className="feature-icon">🌡️</span>
              <span>Current temperature and humidity</span>
            </li>
            <li>
              <span className="feature-icon">📊</span>
              <span>Minimum & maximum temperature</span>
            </li>
            <li>
              <span className="feature-icon">🌪️</span>
              <span>Feels-like temperature</span>
            </li>
            <li>
              <span className="feature-icon">📱</span>
              <span>Clean and responsive user interface</span>
            </li>
          </ul>
        </div>

        <div className="tech-card">
          <div className="card-header">
            <span className="card-icon">🛠️</span>
            <h2>Technologies Used</h2>
          </div>
          <div className="tech-grid">
            <div className="tech-item">
              <span className="tech-icon">⚛️</span>
              <span>React.js</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🌐</span>
              <span>HTML5 & CSS3</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🌦️</span>
              <span>OpenWeatherMap API</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-card">
        <div className="developer-info">
          <p>
            If you have any suggestions or find any issues, feel free to reach out via the Contact page.
          </p>
          <div className="cta-buttons">
            <Link to="/Contact" className="contact-btn">Contact Us</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;