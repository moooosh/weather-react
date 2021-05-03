import React from "react";
import FormattedDates from "./FormattedDates.js";
import FormattedTimes from "./FormattedTimes.js";


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
            <img
              className="weather-image"
              src={props.data.icon}
              alt={props.data.type}/>
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
<img src={props.data.icon} alt="rain" className="forecast-icon" />
  </div>
</div>


</div>
</div>
</div>

)
}