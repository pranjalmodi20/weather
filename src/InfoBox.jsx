import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

function getUnitSymbol(unit) {
  if (unit === "celsius") return "°C";
  if (unit === "fahrenheit") return "°F";
  if (unit === "kelvin") return "K";
  return "";
}

export default function InfoBox({ info, unit = "celsius" }) {
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1632&auto=format&fit=crop";
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop";
  const RAIN_URL = "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=500&auto=format&fit=crop";

  const backgroundImage =
    info.humidity > 80 ? RAIN_URL :
    info.temp > 15 ? HOT_URL :
    COLD_URL;

  const unitSymbol = getUnitSymbol(unit);

  return (
    <div className="InfoBox">
      <h1 className="weather-title">Weather Info - {info.weather}</h1>
      <div className="cardcontainer">
        <Card className="weather-info-card">
          <CardMedia
            component="img"
            height="200"
            image={backgroundImage}
            alt="Weather Image"
            className="weather-image"
          />
          <CardContent className="weather-content">
            <Typography 
              gutterBottom 
              variant="h5" 
              component="div"
              className="location-name"
            >
              {info.city}
            </Typography>
            
            <div className="weather-details">
              <div className="weather-item temperature">
                <span className="weather-label">Temperature:</span>
                <span className="weather-value">{info.temp}{unitSymbol}</span>
              </div>
              
              <div className="weather-item">
                <span className="weather-label">Humidity:</span>
                <span className="weather-value">{info.humidity}%</span>
              </div>
              
              <div className="weather-item">
                <span className="weather-label">Min Temperature:</span>
                <span className="weather-value">{info.tempMin}{unitSymbol}</span>
              </div>
              
              <div className="weather-item">
                <span className="weather-label">Max Temperature:</span>
                <span className="weather-value">{info.tempMax}{unitSymbol}</span>
              </div>
              
              <div className="weather-item">
                <span className="weather-label">Feels Like:</span>
                <span className="weather-value">{info.feelslike}{unitSymbol}</span>
              </div>
              
              <div className="weather-item description">
                <span className="weather-label">Description:</span>
                <span className="weather-value">{info.weather}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}