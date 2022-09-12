import './dateandtime.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Dateandtime(props){
    console.log(props.date);

    let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day=days[props.data.getDay()];
   
    let hour=props.data.getHours();
    if (hour<10){minutes =`0${hour}`};
    let minutes = props.data.getMinutes();
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