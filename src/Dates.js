
import React, { useState } from "react";
import axios from "axios";



export default function Dates() {
const [date, setDate] = useState({});

  function formatDate(timestamp) {
    let now = new Date(timestamp);
    let date = now.getDate();
    let days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[now.getMonth()];

   return (
       `${date}`
   )
  }


}
