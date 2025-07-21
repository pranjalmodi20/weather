import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './WeatherApp';
import About from './pages/About';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import Navbar from './Navbar';
import Footer from './Footer';
import { SettingsProvider, useSettings } from './SettingsContext';
import './App.css';

// Separate component to consume theme context
function AppContent() {
  const { settings } = useSettings();

  return (
    <div className="App" data-theme={settings.theme}>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <SettingsProvider>
      <Router>
        <AppContent />
      </Router>
    </SettingsProvider>
  );
}
export default App;
