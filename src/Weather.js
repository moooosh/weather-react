import React, { useState } from "react";
import FormattedDates from "./FormattedDates.js";
import FormattedTimes from "./FormattedTimes.js";
import SunriseSunset from "./SunriseSunset.js";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ result: false });
 
  function displayTemperature(response) {
    setWeather({
      result: true,
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


  

  let searchingIcons = {
    SubmitButton: "/images/Searching2.png",
    LocationButton: "/images/location2.png",
    Icon: "/images/rainicon.png",
    Sunrise: "/images/sunrise.png",
    Sunset: "/images/sunset.png"
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
            <img src={searchingIcons.SubmitButton} alt="submit" />
          </button>

          <button className="location-button" type="click" >
            <img src={searchingIcons.LocationButton} alt="location" />
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
</div>
</div>

<div className="row">
<div className="main-details">
  <div className="col-6">
    <div className="row">
    <p className="city">{city}</p>
    </div></div>
    
    <div className="row">
          <div className="col-6">
            <p className="date"> 
            <FormattedDates date={weather.date}/>
              </p>
            </div>
            <div className="col-6">
            <p className="time">
           <FormattedTimes time={weather.time}/>
            </p>
    </div></div>

    <div className="row">
          <div className="col-6">
            <p className="temperature">{Math.round(weather.temperature)}°</p>
          </div>

          <div className="col-6">
            <img
              className="weather-image"
              src={weather.icon}
              alt={weather.type}/>
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
       <ul> 
        <li className="text-capitalize">{weather.type}</li>
          <li>Humidity {weather.humidity}%</li>
          <li>Windspeed {weather.windspeed}km/h</li>
        </ul>

  
  </div>

  <div className="sunrise">
          <div className="col-3">
          
          <img src={searchingIcons.Sunrise} alt="sunrise" />
          <h5>Sunrise</h5>
          <h6><SunriseSunset time={weather.sunrise}/></h6>
        </div></div>

        <div className="sunset">
          <div className="col-3">
          
          <img src={searchingIcons.Sunset} alt="sunset" />
          <h5>Sunset</h5>
          <h6><SunriseSunset time={weather.sunset}/></h6>
        </div></div>
  
  <div className="row">
  
  <div className="forecast-1">
  <div className="col">
<p className="day">Mon</p>
<p className="temp1">24°</p>
<img src="./images/rainicon.png" alt="rain" className="forecast-icon"/>
  </div>
</div>

<div className="forecast-2">
<div className="col">
<p className="day">Tue</p>
<p className="temp1">24°</p>
<img src="./images/rainicon.png" alt="rain" className="forecast-icon"/>
  </div>
</div>

<div className="forecast-3">
<div className="col">
<p className="day">Wed</p>
<p className="temp1">24°</p>
<img src="./images/rainicon.png" alt="rain" className="forecast-icon"/>
</div>
</div>

<div className="forecast-4">
<div className="col">
<p className="day">Thu</p>
<p className="temp1">24°</p>
<img src="./images/rainicon.png" alt="rain" className="forecast-icon"/>
  </div>
</div>

<div className="forecast-5">
<div className="col">
<p className="day">Fri</p>
<p className="temp1">24°</p>
<img src="./images/rainicon.png" alt="rain" className="forecast-icon"/>
  </div>
</div>

<div className="forecast-6">
<div className="col">
<p className="day">Sat</p>
<p className="temp1">24°</p>
<img src={weather.icon} alt="rain" className="forecast-icon" />
  </div>
</div>


</div>

</div></div>
);

} else {

    let apiKey = "4594a157e6721a9920f32ed09fef95d6";
    let city = "Brisbane";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayTemperature);
  
    return "Loading......";
}
}

