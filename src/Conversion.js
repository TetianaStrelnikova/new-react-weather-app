
import React from 'react';
import "./conversion.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
export default function Conversion(props){
    
  const [Temp, setTemp]=useState(props.temp);
  const [Unit,setUnit]= useState ("celsius");


function ConvertToCelsii(event){
    event.preventDefault();
    setUnit("celsius")
    setTemp(props.temp);
    props.changeWord("Hello");
}


function ConvertToFarenheit(event){
    event.preventDefault();
    setUnit("farenheit");
   
    props.changeWord("TetianaSeniorReactMegaDeveloper");
    
}


    if (Unit === "celsius"){
return(
    <div className='d-flex'>
    <div  className='temp'>{Temp}  </div>
    <span className='cel'> °C |
    <a href='/' className="farenheit" onClick ={ConvertToFarenheit}>°F </a>
    </span></div>
   
    );}
else{
    let FarTemp = Math.round(props.temp*9/5 +32)
    
    return(
    <div className='d-flex'>
    <div  className='temp'>{FarTemp}  </div>
    <span className='cel'>  <a href='/' className="farenheit" onClick = {ConvertToCelsii}>°C</a> |
   °F 
    </span></div>
   );}
}