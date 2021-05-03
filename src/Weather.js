import React, { useState } from "react";

import WeatherData from "./WeatherData.js";

import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ result: false });
 
  function displayTemperature(response) {
    setWeather({
      result: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      temperaturemin: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      type: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000)
    });
  }
  
  function search() {
    let apiKey = "4594a157e6721a9920f32ed09fef95d6";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayTemperature);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
 
        <div className="col-6">
          <form className="mb-3.form-control" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search your location"
              autoComplete="off"
              onChange={updateCity}
            />

          <button className="submit-button" type="submit" >
            <img src="./images/searching2.png" alt="submit" />
          </button>

          <button className="location-button" type="click" >
            <img src="./images/location2.png" alt="location" />
          </button>
   
      </form>
      </div>
  );
  
if (weather.result) { 
return (

  <div className="Weather">
    <div className="top-bar">
    <div className="row">
      <div className="col-6">
    <h1 className="heading">WEATHER</h1>
    </div>
{form}
<WeatherData data={weather} />
</div>
</div>



</div>
);

} else {

    search();
    return "Loading......";
}
}

