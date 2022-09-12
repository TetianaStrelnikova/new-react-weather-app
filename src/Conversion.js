
import React from 'react';
import "./conversion.css";
import 'bootstrap/dist/css/bootstrap.css';
export default function Conversion(props){
    
return(
    <div>
    <div className='d-flex temperature mb-2 justify-content-center'>
    <div  className='temp'>{props.temperature} 
   
    <div>
    <a href='/' className="celsii">°C/</a>
    <a href='/' className="farenheit">°F </a>
    </div>
    </div></div></div>
    )}