import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Settings Context
const SettingsContext = createContext();

// Settings Provider Component
export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: 'light',
    unit: 'celsius',
    notifications: true,
    location: 'auto',
    updateInterval: '10'
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('weatherAppSettings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prevSettings => ({ ...prevSettings, ...parsed }));
      } catch (error) {
        console.error('Error parsing saved settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage and apply theme whenever they change
  useEffect(() => {
    localStorage.setItem('weatherAppSettings', JSON.stringify(settings));
    
    // Apply theme to document root
    const root = document.documentElement;
    root.setAttribute('data-theme', settings.theme);
    
    // Also apply to body for backward compatibility
    document.body.setAttribute('data-theme', settings.theme);
    document.body.className = `theme-${settings.theme}`;
    
    // Apply CSS custom properties for consistent theming
    if (settings.theme === 'dark') {
      root.style.setProperty('--bg-color', '#1a202c');
      root.style.setProperty('--text-color', '#e2e8f0');
      root.style.setProperty('--card-bg', '#2d3748');
      root.style.setProperty('--card-shadow', 'rgba(0, 0, 0, 0.3)');
      root.style.setProperty('--border-color', '#4a5568');
      root.style.setProperty('--primary-color', '#63b3ed');
      root.style.setProperty('--secondary-color', '#a0aec0');
      root.style.setProperty('--navbar-bg', '#2d3748');
      root.style.setProperty('--navbar-shadow', 'rgba(0, 0, 0, 0.3)');
      root.style.setProperty('--footer-bg', '#2d3748');
      root.style.setProperty('--input-bg', '#4a5568');
      root.style.setProperty('--input-border', '#718096');
      root.style.setProperty('--button-bg', '#63b3ed');
      root.style.setProperty('--button-hover', '#4299e1');
    } else {
      root.style.setProperty('--bg-color', '#f5f7fa');
      root.style.setProperty('--text-color', '#2d3748');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--card-shadow', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--border-color', '#e2e8f0');
      root.style.setProperty('--primary-color', '#4299e1');
      root.style.setProperty('--secondary-color', '#718096');
      root.style.setProperty('--navbar-bg', '#ffffff');
      root.style.setProperty('--navbar-shadow', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--footer-bg', '#f7fafc');
      root.style.setProperty('--input-bg', '#ffffff');
      root.style.setProperty('--input-border', '#cbd5e0');
      root.style.setProperty('--button-bg', '#4299e1');
      root.style.setProperty('--button-hover', '#3182ce');
    }
  }, [settings]);

  // Update individual setting
  const updateSetting = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Reset all settings to default
  const resetSettings = () => {
    const defaultSettings = {
      theme: 'light',
      unit: 'celsius',
      notifications: true,
      location: 'auto',
      updateInterval: '10'
    };
    setSettings(defaultSettings);
  };

  // Temperature conversion utility
  const convertTemperature = (temp, fromUnit = 'celsius', toUnit = null) => {
    const targetUnit = toUnit || settings.unit;
    
    if (fromUnit === targetUnit) return temp;
    
    let celsius = temp;
    
    // Convert to Celsius first
    if (fromUnit === 'fahrenheit') {
      celsius = (temp - 32) * 5/9;
    } else if (fromUnit === 'kelvin') {
      celsius = temp - 273.15;
    }
    
    // Convert from Celsius to target unit
    if (targetUnit === 'fahrenheit') {
      return (celsius * 9/5) + 32;
    } else if (targetUnit === 'kelvin') {
      return celsius + 273.15;
    }
    
    return celsius;
  };

  // Format temperature with unit symbol
  const formatTemperature = (temp, fromUnit = 'celsius', showUnit = true) => {
    const converted = convertTemperature(temp, fromUnit);
    const rounded = Math.round(converted);
    
    if (!showUnit) return rounded;
    
    const symbols = {
      celsius: '°C',
      fahrenheit: '°F',
      kelvin: 'K'
    };
    
    return `${rounded}${symbols[settings.unit]}`;
  };

  const value = {
    settings,
    updateSetting,
    resetSettings,
    convertTemperature,
    formatTemperature
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to use settings
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export default SettingsContext;