import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './WeatherApp';
import About from './pages/About';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import Navbar from './Navbar';
import Footer from './Footer';
import { SettingsProvider, useSettings } from './SettingsContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './assets/firebase';
import Login from './pages/Login';
import Register from './pages/Register';
import RequireAuth from './RequireAuth'; 
import './App.css';

function AppContent() {
  const { settings } = useSettings();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="App" data-theme={settings.theme}>
      <Navbar user={user} />
      <main className="main-content">
        <Routes>
          {/* PROTECTED ROUTES */}
          <Route
            path="/"
            element={
              <RequireAuth user={user}>
                <WeatherApp />
              </RequireAuth>
            }
          />
          <Route
            path="/about"
            element={
              <RequireAuth user={user}>
                <About />
              </RequireAuth>
            }
          />
          <Route
            path="/contact"
            element={
              <RequireAuth user={user}>
                <Contact />
              </RequireAuth>
            }
          />
          <Route
            path="/settings"
            element={
              <RequireAuth user={user}>
                <Settings />
              </RequireAuth>
            }
          />

          {/* PUBLIC ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
