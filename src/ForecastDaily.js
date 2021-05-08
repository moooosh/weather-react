import React from "react";
import WeatherIcon from "./WeatherIcon.js";


export default function ForecastDaily (props) {
        
    function day() {
            let weekDays = [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
              ];
            
            let date = new Date (props.data.dt * 1000);
            let day = date.getDay();

            return weekDays[day];
        }

        
return (
      
      <div>

<div className="forecast-day">{day()}
    </div>
      
<div className="forecast-temperature">
    {Math.round(props.data.temp.max)}°</div>
       
<div className="forecast-icon">
<WeatherIcon code={props.data.weather[0].icon} size={40} /> </div>
        
       
       </div>

    );
}