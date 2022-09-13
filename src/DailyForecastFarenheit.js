import './forecast.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function DailyForecastFarenheit(props){
  
let date = new Date (props.forecast.dt*1000)
let iconUrl = `http://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`
let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day=days[date.getDay()];
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
let month = months[date.getMonth()];
let dayMonth = date.getDate();

    return(
    <div>
    <h3 className='day mt-2 mb-0'>{day}</h3>
    <h2 className='date mb-0'>{dayMonth} {month}</h2>
     <img className="forecastIcon"
                  src={iconUrl}
                  alt={props.forecast.weather.description}
                />
    <h3 className='forecastTemp'>{Math.round(props.forecast.temp.min*9/5 +32)}° | {Math.round(props.forecast.temp.max*9/5 +32)}°</h3>
    </div>
  )
}
