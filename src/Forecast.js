import './forecast.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
export default function Forecast(){
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