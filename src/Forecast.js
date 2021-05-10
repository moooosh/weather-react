import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDaily from "./ForecastDaily.js";
import "./Forecast.css"

export default function Forecast(props) {
    const [result, setResult] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecast(response) {
        setForecast(response.data.daily);
        setResult(true);
    }

    useEffect(() => {
        setResult(false);
    }, [props.coordinates]);
        
      
if (result) {
return (
    <div className="forecast-weekly">
    <div className="row">
    <div className="forecast-1">
   <ForecastDaily data={forecast[0]} />
   </div>

   <div className="forecast-2">
   <ForecastDaily data={forecast[1]} />
   </div>
   <div className="forecast-3">
   <ForecastDaily data={forecast[2]} />
   </div>
   <div className="forecast-4">
   <ForecastDaily data={forecast[3]} />
   </div>
   <div className="forecast-5">
   <ForecastDaily data={forecast[4]} />
   </div>
   <div className="forecast-6">
   <ForecastDaily data={forecast[5]} />
   </div>
   </div></div>
);

} else {
    let apiKey = "4594a157e6721a9920f32ed09fef95d6";
    let units = "metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleForecast);
    
    return null;
}  

}