import React from 'react';
import Navbar from './navbar';
import './weather.css';

const Weather = () => {
  return (
    <div>
      <Navbar />
      <div className="weather-container">
        <h1>Weather Information</h1>
        <div className="weather-card">
          <div className="weather-details">
            <h2>City Name</h2>
            <p>Temperature: 25°C</p>
            <p>Humidity: 60%</p>
            <p>Condition: Clear Sky</p>
          </div>
          <div className="weather-icon">
            <img src="weather-icon-url" alt="Weather Icon" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Weather;
