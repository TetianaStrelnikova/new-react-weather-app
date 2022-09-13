import './forecast.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";


export default function Forecast(props){
let lat = props.lat;
let lon = props.lon;

function handleResponse(response){
console.log(response.data);}


let Url =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=aca4dd3643b89e94dbd3cac6cf6f2638`
axios.get(Url).then(handleResponse);


return(
<div className='row forecast'>
<div className='col'>
<h3 className='day'>Thu</h3>
<h2 className='date'>12/03</h2>
 <img className="forecastIcon"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="weatherDescription"
            />
<h3 className='forecastDescription'>clear sky</h3>
<h3 className='forecastTemp'>10° | 20°</h3>
</div>
</div>
)}