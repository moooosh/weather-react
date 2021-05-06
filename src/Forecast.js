import React from "react";

import "./Forecast.css"

export default function Forecast() {
return (
    <div className="forecast-weekly">
    <div className="row">
    <div className="col">
  <p className="forecast-day">Mon</p>
  <p className="forecast-temperature">24°</p>
  <img src="./images/rainicon.png" alt="rain" className="forecast-icon"/>
    </div>
  </div>
</div>
  
 
)

}