import React, { useState } from "react";
import { useWeatherData } from "../api/useWeatherData";
import { SearchBar } from "../components/SearchBar";
import { WeatherCard } from "../components/WeatherCard";

export const WeatherSearchPage = () => {
  const [city, setCity] = useState("");
  const { weather, loading, error, getWeather } = useWeatherData();

  return (
    <div >
      <h1 >City Weather Search 🌦️</h1>

      <SearchBar city={city} onChange={setCity} onSearch={() => getWeather(city)} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};
