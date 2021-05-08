import React, { useState } from "react";

import WeatherData from "./WeatherData.js";
import Forecast from "./Forecast.js"
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
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      temperaturemin: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      type: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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

  
  
if (weather.result) { 
return (

  <div className="Weather">
    <div className="row">
      <div className="col-5">
    <h1>WEATHER</h1>
    </div>
   
          <form onSubmit={handleSubmit}>
     <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search your location"
              autoComplete="off"
              onChange={updateCity}
            /> </div>
   
       <div className="col-2">
        <input type="image" src="./images/searching2.png" alt="submit" className="search-button" />
        </div>
      </form>
      </div>
<WeatherData data={weather} />
<Forecast coordinates={weather.coordinates}/>
</div>





);

} else {

    search();
    return "Loading......";
}
}

