import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useSettings } from "./SettingsContext";

export default function WeatherApp() {
  const {
    settings,
    formatTemperature,
    updateSetting
  } = useSettings();

  const [info, setInfo] = useState(null); // Store weather info here

  useEffect(() => {
    document.body.className = settings.theme;
  }, [settings.theme]);

  return (
    <div className="weather-app" style={{ textAlign: "center" }}>
      <SearchBox 
        unit={settings.unit} 
        locationMode={settings.location} 
        setInfo={setInfo} 
      />
      {info && (
        <InfoBox 
          info={info} 
          unit={settings.unit} 
          updateInterval={settings.updateInterval}
          formatTemperature={formatTemperature}
        />
      )}
    </div>
  );
}