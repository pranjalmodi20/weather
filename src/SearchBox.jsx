import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox(){
    const[city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b30699a7832a1cd96e69fbee35d2308f";

    const getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo(); 
    };
    return(
        <div className='searchbox'>
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" onChange={handleChange} required/>
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}