//This is CityManagement Component

import React, { useState } from "react";
import "./index.css";

function CityManagement({ cities, setCities, location }) {
  const [newCity, setNewCity] = useState("");

  const handleAddCity = () => {
    if (newCity && !cities.includes(newCity)) {
      setCities([...cities, newCity]);
      setNewCity("");
    }
  };

  const handleRemoveCity = (city) => {
    if (city !== location) {
      const updatedCities = cities.filter((c) => c !== city);
      setCities(updatedCities);
    }
  };

  return (
    <div className="city-management">
      <h2>Manage Cities</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index} className="city-item">
            <span className="city-name">{city}</span>
            {city !== "Kathmandu" && (
              <button
                className="remove-button"
                onClick={() => handleRemoveCity(city)}
              >
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          placeholder="Enter a new city"
        />
        <button className="add-button" onClick={handleAddCity}>
          Add City
        </button>
      </div>
    </div>
  );
}

export default CityManagement;
