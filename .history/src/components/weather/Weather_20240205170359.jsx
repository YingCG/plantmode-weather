import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import search_icon from "../assets/search.png";
import humidity_icon from "./assets/humidity.png";
import wind_icon from "./assets/wind.png";
import clear_icon from "./assets/clear.png";
import cloud_icon from "./assets/cloud.png";
import drizzle_icon from "./assets/drizzle.png";
import rain_icon from "./assets/rain.png";
import snow_icon from "./assets/snow.png";
import "./weather.css";
import WEATHER_API_KEY from "./apikey.js";

const Weather = () => {
  const storedCity = localStorage.getItem("lastVisitedCity");
  const [location, setLocation] = useState(storedCity || "Auckland,nz");
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async (location) => {
    try {
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
      const units = "units=metric";

      const response = await axios.get(
        `${apiUrl}?q=${location}&appid=${WEATHER_API_KEY}&${units}`
      );
      //   console.log("API Key:", WEATHER_API_KEY);
      setWeatherData(response.data);
      console.log(response.data);
      localStorage.setItem("lastVisitedCity", location);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(location);
  }, [location]);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(location);
  };

  return (
    <div className="weather-container">
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="cityInput"
          placeholder="Enter city name"
          value={location}
          onChange={handleInputChange}
        />
        <button className="search-icon" type="submit">
          <img src={search_icon} alt="search" />
        </button>
      </form>

      <div className="info-container">
        {weatherData && (
          <>
            <img
              className="clouds-icons"
              src={cloud_icon}
              alt={weatherData.clouds}
            />
            <p>{weatherData.name}</p>
            <h1>
              <span>{weatherData.main.temp} °c</span>
              <span>{}</span>
            </h1>
            <span>precipitation: {weatherData.precipitation}</span>

            <div className="element">
              <p className="weather-info">Sunrise: {weatherData.sys.sunrise}</p>
              <p className="weather-info">Sunset: {weatherData.sys.sunset}</p>
            </div>
            <div className="element">
              <img src={humidity_icon} alt="" className="icon" />
              <p className="weather-info">
                Min Temperature: {weatherData.main.temp_min}
              </p>
              <p className="weather-info">
                Max Temperature: {weatherData.main.temp_max}
              </p>
              <p className="weather-info">
                Feels like: {weatherData.main.feels_like}
              </p>
              <p className="weather-info">
                Humidity: {weatherData.main.humidity}
              </p>
              <p className="weather-info">
                Pressure: {weatherData.main.pressure}
              </p>
            </div>
            <div className="element">
              <img src={wind_icon} alt="" className="icon" />
              <p className="weather-info">Wind Deg: {weatherData.wind.deg}</p>
              <p className="weather-info">
                Wind Speed: {weatherData.wind.speed}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
