import React from 'react';
import { useSettings } from '../SettingsContext';

const Settings = () => {
  const { settings, updateSetting, resetSettings } = useSettings();

  const handleThemeChange = (theme) => {
    updateSetting('theme', theme);
  };

  const handleUnitChange = (unit) => {
    updateSetting('unit', unit);
  };

  const handleIntervalChange = (interval) => {
    updateSetting('updateInterval', interval);
  };

  const handleLocationChange = (location) => {
    updateSetting('location', location);
  };

  const handleNotificationsChange = (notifications) => {
    updateSetting('notifications', notifications);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Customize your weather app experience</p>
      </div>

      <div className="settings-section">
        {/* Appearance Section */}
        <div className="setting-group">
          <div className="setting-header">
            <span className="setting-icon">🎨</span>
            <span className="setting-title">Appearance</span>
          </div>
          
          <div className="setting-item">
            <div className="setting-label">
              <h4>Theme</h4>
              <p>Choose your preferred theme</p>
            </div>
            <div className="setting-control">
              <div className="theme-toggle">
                <button 
                  className={`theme-option ${settings.theme === 'light' ? 'active' : ''}`}
                  onClick={() => handleThemeChange('light')}
                >
                  ☀️ Light
                </button>
                <button 
                  className={`theme-option ${settings.theme === 'dark' ? 'active' : ''}`}
                  onClick={() => handleThemeChange('dark')}
                >
                  🌙 Dark
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Units & Display Section */}
        <div className="setting-group">
          <div className="setting-header">
            <span className="setting-icon">📊</span>
            <span className="setting-title">Units & Display</span>
          </div>
          
          <div className="setting-item">
            <div className="setting-label">
              <h4>Temperature Unit</h4>
              <p>Choose temperature display format</p>
            </div>
            <div className="setting-control">
              <select 
                value={settings.unit} 
                onChange={(e) => handleUnitChange(e.target.value)}
              >
                <option value="celsius">Celsius (°C)</option>
                <option value="fahrenheit">Fahrenheit (°F)</option>
                <option value="kelvin">Kelvin (K)</option>
              </select>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <h4>Update Interval</h4>
              <p>How often to refresh weather data</p>
            </div>
            <div className="setting-control">
              <select 
                value={settings.updateInterval} 
                onChange={(e) => handleIntervalChange(e.target.value)}
              >
                <option value="5">Every 5 minutes</option>
                <option value="10">Every 10 minutes</option>
                <option value="15">Every 15 minutes</option>
                <option value="30">Every 30 minutes</option>
                <option value="60">Every hour</option>
              </select>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="setting-group">
          <div className="setting-header">
            <span className="setting-icon">📍</span>
            <span className="setting-title">Location</span>
          </div>
          
          <div className="setting-item">
            <div className="setting-label">
              <h4>Location Detection</h4>
              <p>How to determine your location</p>
            </div>
            <div className="setting-control">
              <select 
                value={settings.location} 
                onChange={(e) => handleLocationChange(e.target.value)}
              >
                <option value="auto">Auto-detect</option>
                <option value="manual">Manual entry</option>
                <option value="saved">Use saved location</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="setting-group">
          <div className="setting-header">
            <span className="setting-icon">🔔</span>
            <span className="setting-title">Notifications</span>
          </div>
          
          <div className="setting-item">
            <div className="setting-label">
              <h4>Weather Alerts</h4>
              <p>Receive notifications for weather updates</p>
            </div>
            <div className="setting-control">
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.notifications}
                  onChange={(e) => handleNotificationsChange(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Reset Section */}
        <div className="setting-group">
          <div className="setting-item">
            <div className="setting-label">
              <h4>Reset Settings</h4>
              <p>Restore all settings to default values</p>
            </div>
            <div className="setting-control">
              <button 
                className="btn btn-danger"
                onClick={resetSettings}
              >
                Reset All Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;