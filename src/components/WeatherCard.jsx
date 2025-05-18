import React from "react";

export const WeatherCard= ({ weather }) => {
    
  return (
    <div>
  <h2>{weather.name}, {weather.sys.country}</h2>
  <p>Temperature: {weather.main.temp}°C</p>
  <p>Feels Like: {weather.main.feels_like}°C</p>
  <p>Min Temp: {weather.main.temp_min}°C | Max Temp: {weather.main.temp_max}°C</p>
  <p>Humidity: {weather.main.humidity}%</p>
  <p>Pressure: {weather.main.pressure} hPa</p>
  <p>Wind Speed: {weather.wind.speed} m/s | Direction: {weather.wind.deg}°</p>
  <p>Visibility: {weather.visibility} meters</p>
  <p>Weather Condition: {weather.weather[0].description}</p>
  <p>Cloudiness: {weather.clouds.all}%</p>
  <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
  <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
  
  <img
    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    alt="weather icon"
  />
</div>

  );
};
