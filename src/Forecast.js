import './forecast.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useState } from 'react';
import DailyForecast from "./DailyForecast";
import { useEffect } from 'react';
import DailyForecastFarenheit from './DailyForecastFarenheit';
export default function Forecast(props){

const[ready, setReady]=useState(false);
const [forecast, setForecast] = useState(null);
const [units,setUnits]=useState("celsii");
useEffect(()=>{
  setReady(false);},[props.lat, props.lon]
)

useEffect(()=>{
  if(props.word==="TetianaSeniorReactMegaDeveloper"){
  setUnits("farenheit");}else{setUnits("celsii")}},[props.word]
)


function handleResponse(response){
setForecast(response.data.daily);
setReady(true);
}


if (ready===true && units==="celsii")
{
  return(
<div className='row pt-3 pb-3 ms-0 ps-1 pe-1 forecast'>
{forecast.map(function(daily ,index){if(index<5){return(<div className="col ps-0 pe-0" key={index}>
  <DailyForecast  forecast={daily}/>
</div>)} else{return(null)}})}
</div>
)}

if (ready===true && units==="farenheit")
{

    return(<div className='row pt-3 pb-3 ms-0 ps-1 pe-1 forecast'>
    {forecast.map(function(daily ,index){if(index<5){return(<div className="col ps-0 pe-0" key={index}>
      <DailyForecastFarenheit  forecast={daily}/>
    </div>)}else{return(null)}})}
    </div>)
}

  else{
    let lat = props.lat;
    let lon = props.lon;
    let Url =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=aca4dd3643b89e94dbd3cac6cf6f2638`
    axios.get(Url).then(handleResponse);
    return(null);
}}
