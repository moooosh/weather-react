import React from "react";

export default function SunriseSunset(props) {
    
    let riseHours = props.sunrise.getHours();
    if (hours < 10) {
      hours = `0${riseHours}`;
    }

    let riseMinutes = props.sunrise.getMinutes();
    if (minutes < 10) {
      minutes = `0${riseMinutes}`;
    }

    let setHours = props.sunset.getHours();
    if (hours < 10) {
      hours = `0${setHours}`;
    }

    let setMinutes = props.sunset.getMinutes();
    if (minutes < 10) {
      minutes = `0${setMinutes}`;
    }

    return (
        <div>
            {riseHours}:{riseMinutes}
            {setHours}:{setMinutes}
        </div>
    );

}

    
