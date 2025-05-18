import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log("API_KEY:", import.meta.env.VITE_API_KEY);
console.log("BASE_URL:", import.meta.env.VITE_BASE_URL);
console.log("Hello")


export const fetchWeatherByCity = async (city) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric"
    },
  });
  return response.data;
};