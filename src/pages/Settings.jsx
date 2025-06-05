import React, { useEffect, useState } from "react";

import "./Settings.css";

export default function Settings() {
  const [theme, setTheme] = useState("dark");
  const [unit, setUnit] = useState("celsius");

  // Load from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedUnit = localStorage.getItem("unit");
    if (savedTheme) setTheme(savedTheme);
    if (savedUnit) setUnit(savedUnit);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("unit", unit);
    document.body.className = theme; // toggle body class
  }, [theme, unit]);

  return (
    <>
      
      <div className="settings-container">
        <h2>Settings</h2>

        <div className="setting-option">
          <label>Theme:</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        <div className="setting-option">
          <label>Temperature Unit:</label>
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="celsius">Celsius (°C)</option>
            <option value="fahrenheit">Fahrenheit (°F)</option>
          </select>
        </div>
      </div>
    </>
  );
}
