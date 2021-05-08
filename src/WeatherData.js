import React from "react";
import FormattedDates from "./FormattedDates.js";
import FormattedTimes from "./FormattedTimes.js";

import "./weather.css"
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherData(props) {

return (
    <div className="weather-data">
    <div className="row">
<div className="main-details">
  <div className="col-6">
    <div className="row">
    <p className="city">{props.data.city}</p>
    </div></div>
    
    <div className="row">
          <div className="col-6">
            <p className="date"> 
            <FormattedDates date={props.data.date}/>
              </p>
            </div>
            <div className="col-6">
            <p className="time">
           <FormattedTimes time={props.data.time}/>
            </p>
    </div></div>

    <div className="row">
          <div className="col-6">
            <p className="temperature">{Math.round(props.data.temperature)}°</p>
          </div>

          <div className="col-6">
        <WeatherIcon code={props.data.icon} size={80} />

           
        </div> </div>

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
        <li className="text-capitalize">{props.data.type}</li>
          <li>Humidity {props.data.humidity}%</li>
          <li>Windspeed {props.data.windspeed}km/h</li>
        </ul>

  
  </div>

  <div className="sunrise">
          <div className="col-3">
          
          <img src="./images/sunrise.png" alt="sunrise" />
          <h5>Sunrise</h5>
          <h6><FormattedTimes time={props.data.sunrise}/></h6>
        </div></div>

        <div className="sunset">
          <div className="col-3">
          
          <img src="./images/sunset.png" alt="sunset" />
          <h5>Sunset</h5>
          <h6><FormattedTimes time={props.data.sunset}/></h6>
        </div></div>
  
 
</div>
</div>
)
}