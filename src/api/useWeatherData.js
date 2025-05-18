import { useState } from "react";
import { fetchWeatherByCity } from "../api/weatherAPI";

export const useWeatherData = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (city) => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchWeatherByCity(city);
      console.log(data);
      
      setWeather(data);
    } catch (err) {
      setError("City not found or API error.");
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, getWeather };
};
