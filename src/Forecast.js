import './forecast.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useState } from 'react';


export default function Forecast(props){

const[ready, setReady]=useState(false);
const [forecast, setForecast] = useState(null);
const[date,setDate] = useState(null);

function handleResponse(response){
setForecast(response.data.daily);
setReady(true);
setDate(new Date(response.data.daily[0].dt))}


if (ready===true){
  
let iconUrl = `http://openweathermap.org/img/wn/10d@2x.png`
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
  <div className='row forecast'>
  <div className='col ps-0 pe-0'>
  <h3 className='day mt-2 mb-0'>{day}</h3>
  <h2 className='date mb-0'>{dayMonth} {month}</h2>
   <img className="forecastIcon"
                src={iconUrl}
                alt={forecast[0].weather.description}
              />
  <h3 className='forecastTemp'>{Math.round(forecast[0].temp.min)}° | {Math.round(forecast[0].temp.max)}°</h3>
  </div>
  </div>
  )}

  else{
    let lat = props.lat;
    let lon = props.lon;
    let Url =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=aca4dd3643b89e94dbd3cac6cf6f2638`
    axios.get(Url).then(handleResponse);
    return(null);
}





}