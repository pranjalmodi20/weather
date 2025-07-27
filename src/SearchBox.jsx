import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';

export default function SearchBox({ setInfo, unit, locationMode }) {
  const [city, setCity] = useState("");
  const [savedCity, setSavedCity] = useState(() => localStorage.getItem('savedCity') || "");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b30699a7832a1cd96e69fbee35d2308f";

  // Map app unit to OpenWeatherMap API unit
  const getApiUnit = (unit) => {
    if (unit === "celsius") return "metric";
    if (unit === "fahrenheit") return "imperial";
    return "standard"; // kelvin
  };

  const fetchWeather = async (query) => {
    try {
      const response = await fetch(
        `${API_URL}?${query}&appid=${API_KEY}&units=${getApiUnit(unit)}`
      );
      const jsonResponse = await response.json();

      if (jsonResponse.cod === 200) {
        const result = {
          city: jsonResponse.name,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelslike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
        };
        setInfo(result);
      } else {
        alert("City not found!");
        setInfo(null);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("Something went wrong while fetching weather data.");
      setInfo(null);
    }
  };

  // Manual city search
  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(`q=${encodeURIComponent(city)}`);
      setSavedCity(city);
      localStorage.setItem('savedCity', city);
      setCity("");
    }
  };

  // Auto-detect location
  const handleDetectWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(`lat=${latitude}&lon=${longitude}`);
        },
        () => {
          alert("Unable to get your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Fetch weather on mode change
  useEffect(() => {
    if (locationMode === "auto") {
      handleDetectWeather();
    } else if (locationMode === "saved" && savedCity) {
      fetchWeather(`q=${encodeURIComponent(savedCity)}`);
    }
    // eslint-disable-next-line
  }, [locationMode, unit]);

  return (
 <div className='searchbox'>
    <form className="search-form" onSubmit={handleCitySubmit} autoComplete="off">
      <span className="search-icon">
        <SearchIcon />
      </span>
      <TextField
        id="city"
        label="Search City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
        size="small"
      />
      <Button
        variant="contained"
        type="submit"
        className="search-btn"
      >
        Search
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDetectWeather}
        className="detect-btn"
        disabled={locationMode === "saved"}
      >
        Detect Weather
      </Button>
    </form>
  </div>
);
}