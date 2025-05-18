import React from "react";

export const WeatherCard= ({ weather }) => {
    
  return (
    <div>
      <h2 >{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};
