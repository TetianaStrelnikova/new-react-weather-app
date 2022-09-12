
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './date.css';
export default function Dateandtime(props){
   
    let minutes = props.date.getMinutes();
    let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day=days[props.date.getDay()];
   
    let hour=props.date.getHours();
    if (hour<10){minutes =`0${hour}`};
   
    if (minutes<10){minutes =`0${minutes}`};

    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      let month = months[props.date.getMonth()];
      let dayMonth = props.date.getDate();
return(
    <div>
<div className="dateAndTime d-flex justify-content-center">
<h5 className="currentTime pe-2" >{hour}:{minutes}</h5>
<h5 className="currentDay pe-2" >{day}</h5>
<h5 className="currentDate" >{month}  {dayMonth}</h5>
</div></div>
);
}