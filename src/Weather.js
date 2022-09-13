import './weather.css';
import React from 'react';
import Conversion from "./Conversion";
import Dateandtime from "./Dateandtime";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import "./search.css";
import Forecast from "./Forecast";

export default function Weather(props){
    const[word,setWord]=useState("Hello")
    let [WeatherData, setWeatherData] = useState({ready:false});
    const [city,setCity] = useState(props.defaultCity);
     
function Search()
{   let apiKey = `aca4dd3643b89e94dbd3cac6cf6f2638`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleTemperature);
}
function handleSubmit(event){
  event.preventDefault();
  Search();
}
function handle(event){
  setCity(event.target.value);
  
  
}

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
            date:new Date(response.data.dt*1000),
            coord:response.data.coord
});
;}
        if(WeatherData.ready===true)
{
    return(
    <div>
        <div className="row weatherblock p-2 shadow-sm" >
        <div className="info col-6 p-2 ms-2 ">
        <div>
        <form onSubmit={handleSubmit} className="mb-4">
            <input className="changeCity"  type="text" onChange={handle} placeholder="Change City" autoComplete="off"/>
            <input className ="changeCitySubmit" type="submit"  value="✈"/>
        </form>
        
        </div>
        <h4 className="currentCity mb-0 text-center">{WeatherData.city}</h4>
        <Dateandtime date={WeatherData.date}/>  
        
        <div className="currentTemperature">
            <div className='d-flex temperature mb-2 justify-content-center'>
            <img className="icon pe-1"
              src={WeatherData.weatherIconUrl}
              alt={WeatherData.weatherDescription}
            />
            <Conversion  temp={WeatherData.temperature} changeWord={word => setWord(word)}/>
            </div>
        </div>
          
        
        
        
        <div className="realFeelPrecipitationlWindHumidity">
            <ul className='p-2'> 
                <li >{WeatherData.weatherDescription}</li>
                <li >Pressire - {WeatherData.pressure} hPa</li>
                <li >Wind - {WeatherData.wind} km/hour</li>
                <li >Humidity - {WeatherData.humidity} %</li>
            </ul>
        </div>
        </div>
        
        <div className='col-6 currentIcon'></div>
        
        </div>

<Forecast lat={WeatherData.coord.lat} lon={WeatherData.coord.lon} word={word}
/>

</div>
        )}
     
    else{
   
Search()
return("Loading...")}
   
    }
   


