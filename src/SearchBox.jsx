import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ setInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b30699a7832a1cd96e69fbee35d2308f";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      if (jsonResponse.cod === 200) {
        const result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelslike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
        };
        setInfo(result); // Send weather info to parent component
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

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      getWeatherInfo();
      setCity("");
    }
  };

  return (
    <div className='searchbox'>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Search City"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
