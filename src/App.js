import React, { useState } from "react";
import axios from "axios";


function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=31c724135359c05b253f22fdc75cbc3c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      });
      setLocation('');
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          type="text"
          placeholder="Enter the location" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p1>{data.weather[0].main}</p1> : null}
          </div>
        </div>


        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="Wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}    <p>Wind Speed</p> </div>


        </div>
      </div>
    </div>
  );
}

export default App;
