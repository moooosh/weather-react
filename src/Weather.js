import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4594a157e6721a9920f32ed09fef95d6";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayTemperature(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      type: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  let searchingIcons = {
    SubmitButton: "/images/Searching2.png",
    LocationButton: "/images/location2.png"
  }

  let form = (
    <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <form className="mb-3.form-control">
            <input
              type="search"
              onChange={updateCity}
              placeholder="Search your location"
              className="form-control"
              autoComplete="off"
            />
          </form>
        </div>
        <div className="buttons">
          <button className="submit-button" type="submit">
            <img src={searchingIcons.SubmitButton} alt="submit" />
          </button>

          <button className="location-button" type="click">
            <img src={searchingIcons.LocationButton} alt="location" />
          </button>
        </div>{" "}
      </form>
  );
  
  
 
  return (result) ( 
      <div className="row">
        <div className="col-4">
          <h1>WEATHER</h1>
        </div>
    {form}
      <div className="main-details">
        <div className="col-6">
          <div className="row">
            <p className="city">{updateCity}</p>
          </div>{" "}
        </div>
        <div className="row">
          <div className="col-6">
            <p className="date">Wed 12 April</p>
          </div>
          <div className="col-6">
            <p className="time">12:00</p>
          </div>{" "}
        </div>
        <div className="row">
          <div className="col-6">
            <p className="temperature">{Math.round(weather.temperature)}°</p>
          </div>

          <div className="col-6">
            <img
              className="weather-image"
              src={weather.icon}
              alt="{weather.type}"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <a href="/" id="celsius" class="active">
              C°
            </a>
          </div>

          <div className="col-3">
            <a href="/" id="fahrenheit">
              F°
            </a>
          </div>
        </div>
      </div>
      <div className="metrics-container">
        <div className="col-4">
          <ul className="metrics">
            <li>{weather.type}</li>
            <li>Humidity {weather.humidity}%</li>
            <li>Wind Speed {weather.windspeed}km/h</li>
          </ul>
        </div>
        </div>
        </div>
  );
   }
