import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import CityManagement from "./CityManagement";



function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Kathmandu");
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([
    "Kathmandu",
    "Dhangadhi",
    "Pokhara",
    "Butwal",
    "Japan",
  ]);

  const apiKey = "31c724135359c05b253f22fdc75cbc3c";

  const fetchWeatherData = (city) => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  return (
    <div className="app">
      <div className="header">
        <h1>Weather App</h1>
        <p>Check the current weather in different cities.</p>
      </div>
      <div className="content">
        <div className="search">
          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {loading && <p className="Loading_forum">Loading...</p>}
        </div>
        <CityManagement
          cities={cities}
          setCities={setCities}
          location={location}
        />
        <div className="weather-details">
          <h2>Weather Details</h2>
          {data.name && (
            <>
              <p>Location: {data.name}</p>
              <p>Temperature: {data.main?.temp?.toFixed()}°F</p>
              <p>Description: {data.weather?.[0]?.main}</p>
              <p>Feels Like: {data.main?.feels_like?.toFixed()}°F</p>
              <p>Humidity: {data.main?.humidity}%</p>
              <p>Wind Speed: {data.wind?.speed} MPH</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
