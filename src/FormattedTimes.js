import React from "react";


export default function FormattedTimes(props) {

    
    let hours = props.time.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = props.time.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let sunrise = props.time.getHours();
    if (sunrise < 10) {
        sunrise = `0${sunrise}`;
    }

    let sunriseM = props.time.getMinutes();
    if (sunriseM < 10) {
        sunriseM = `0${sunriseM}`
    }

    let sunset = props.time.getHours();
    if (sunset < 10) {
        sunset = `0${sunset}`;
    }

    let sunsetM = props.time.getMinutes();
    if (sunsetM < 10) {
        sunsetM = `0${sunsetM}`
    }


    return (
        <div className="times">
        <div className="hoursMinutes">
            {hours}:{minutes}
        </div>

        <div className="sunrise">
            {sunrise}:{sunriseM}
        </div>

        <div className="sunset">
                    {sunset}:{sunsetM}
        </div>
        </div>
    );
    }
