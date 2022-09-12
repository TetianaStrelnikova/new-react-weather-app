import './weather.css';
import React from 'react';
import Conversion from "./Conversion";
import Dateandtime from "./Dateandtime";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather(props){

    let [WeatherData, setWeatherData] = useState({ready:false});
    
    function showTemperature(response) {
        console.log(response.data);
        setWeatherData({
            ready:true,
            temperature: Math.round(response.data.main.temp),
            humidity: Math.round(response.data.main.humidity),
            wind: Math.round(response.data.wind.speed),
            pressure: Math.round(response.data.main.humidity),
            weatherIconUrl:`http://openweathermap.org/img/wn/${ response.data.weather[0].icon}@2x.png`,
            weatherDescription: response.data.weather[0].description,
            city:response.data.name,
            date: newDate(response.data.dt*1000)
});
        if(WeatherData.ready)
{
    return(
    
        <div className="row weatherblock p-2 shadow-sm" >
        <div className="info col-6 p-2 ">
        <form>
            <input className="changeCity"  type="text"  placeholder="Change City" autocomplete="off"/>
            <input className ="changeCitySubmit"type="submit" value="✈"/>
          </form>
          <button className="myLocation mb-3" > <i className="me-2 fa-solid fa-location-dot"></i> My Location</button>
        
        <h4 className="currentCity mb-0 text-center">{city}</h4>
        <Dateandtime date={WeatherData.date}/>  
        <img
              src={weatherIconUrl}
              alt={weatherDescription}
            />
        <div className="currentTemperature">
            
            <div className='d-flex temperature mb-2 justify-content-center'>
                <div  className='temp'>{temperature} </div>
                <Conversion temp={WeatherData.temperature}/>
            </div>
        </div>
          
        
        
        
        <div className="realFeelPrecipitationlWindHumidity">
            <ul className='p-2'> 
                <li >{weatherDescription} - <span >28°</span>  </li>
                <li >{pressure} - <span >660</span> hPa</li>
                <li >{wind}- <span >9</span> km/hour</li>
                <li >{humidity}- <span >60</span> %</li>
            </ul>
        </div>
        </div>
        
        <div className='col-6 currentIcon'></div>
        
        </div>
        )}
     
    else{
    let apiKey = `1001fa4e051816eb8cb147e5ae4e09c6`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showTemperature);}
    return("loading")
    }
   


;}