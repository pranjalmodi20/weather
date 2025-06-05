import React from 'react';
import './About.css';
//import Footer from "../Footer";


const About = () => {
  
  return (   
    <div className="about-container">
      <h1>About Weather App</h1>
      <p>
        Welcome to the Weather App! This web application provides real-time weather updates for cities around the world.
        It uses reliable weather APIs to fetch data like temperature, humidity, wind speed, and more.
      </p>
      <h2>Features:</h2>
      <ul>
        <li>Search weather by city name</li>
        <li>Current temperature and humidity</li>
        <li>Minimum & maximum temperature</li>
        <li>Feels-like temperature</li>
        <li>Clean and responsive user interface</li>
      </ul>
      <h2>Technologies Used:</h2>
      <ul>
        <li>React.js</li>
        <li>HTML5 & CSS3</li>
        <li>OpenWeatherMap API</li>
      </ul>
      <p>
        Built with ❤️ by Pranjal Modi. If you have any suggestions or find any issues,
        feel free to reach out via the Contact page.
      </p>
    </div>

  );
};

export default About;
