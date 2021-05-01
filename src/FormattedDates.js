import React from "react";


export default function FormattedDates(props) {
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = weekDays[props.date.getDay()];
    

    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"

    ]

    let months = month[props.date.getMonth()];


    let date = props.date.getDate();
    if (date === 1) {
      date = `${date}st`
    } else {
      if (date === 2) {
        date = `${date}nd`
      } else {
        if (date === 3) {
          date = `${date}rd`
        } else {
          if (date > 4) {
            date = `${date}th`
          }
        }
      }
    }

  


   return (
       <div>
       {day} {date} {months} 
       </div>
   )
  }


