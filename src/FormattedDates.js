import React from "react";


export default function FormattedDates(props) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[props.date.getDay()];

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
    if (date === 1, 21, 31) {
      date = `${date}st`;
    } else {
      if (date === 2, 22) {
        date = `${date}nd`
      } else {
        if (date === 3, 23) {
          date = `${date}rd`
        } else {
          if (date === 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30) {
            date = `${date}th`
          }
        }
      }
    }

    let hours = props.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

   return (
       <div>
       {day} {date} {months} {hours}:{minutes}
       </div>
   )
  }


