import './weather.css';
import React from 'react';
import Conversion from "./Conversion";
import Dateandtime from "./Dateandtime";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Search from "./Search";

export default function Weather(props){

    let [WeatherData, setWeatherData] = useState({ready:false});
    
    function handleTemperature(response) {
    
        setWeatherData({
            ready:true,
            temperature: Math.round(response.data.main.temp),
            humidity: Math.round(response.data.main.humidity),
            wind: Math.round(response.data.wind.speed),
            pressure: Math.round(response.data.main.humidity),
            weatherIconUrl:`http://openweathermap.org/img/wn/${ response.data.weather[0].icon}@2x.png`,
            weatherDescription: response.data.weather[0].description,
            city: response.data.name,
            date:new Date(response.data.dt*1000)
});
;}
        if(WeatherData.ready===true)
{
    return(
    
        <div className="row weatherblock p-2 shadow-sm" >
        <div className="info col-6 p-2 ">
        <Search/>
        <h4 className="currentCity mb-0 text-center">{WeatherData.city}</h4>
        <Dateandtime date={WeatherData.date}/>  
        
        <div className="currentTemperature">
            
            <div className='d-flex temperature mb-2 justify-content-center'>
               
            <img className="icon pe-1"
              src={WeatherData.weatherIconUrl}
              alt={WeatherData.weatherDescription}
            />
                <div  className='temp'>{WeatherData.temperature} </div>
                <Conversion temp={WeatherData.temperature}/>
               
            </div>
        </div>
          
        
        
        
        <div className="realFeelPrecipitationlWindHumidity">
            <ul className='p-2'> 
                <li >{WeatherData.weatherDescription}</li>
                <li >{WeatherData.pressure} hPa</li>
                <li >{WeatherData.wind} km/hour</li>
                <li >{WeatherData.humidity} %</li>
            </ul>
        </div>
        </div>
        
        <div className='col-6 currentIcon'></div>
        
        </div>
        )}
     
    else{
    let apiKey = `1001fa4e051816eb8cb147e5ae4e09c6`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleTemperature);
    return("helllo")}
   
    }
   

