import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import WeatherApp from './WeatherApp';
import About from './pages/About';
import Contact from './pages/Contact';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;