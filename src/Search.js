import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./search.css";
export default function Search(){
return(
<div>
<form>
    <input className="changeCity"  type="text"  placeholder="Change City" autoComplete="off"/>
    <input className ="changeCitySubmit" type="submit" value="✈"/>
  </form>
  <button className="myLocation mb-3" > <i className="me-2 fa-solid fa-location-dot"></i> My Location</button>
  </div>);}