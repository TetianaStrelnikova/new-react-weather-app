import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather';
import Contacts from "./Contacts"; 
import 'bootstrap/dist/css/bootstrap.css';
import Forecast from "./Forecast";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container mt-5">
   
    <Weather  defaultCity="Kiev"/>
    <Forecast/>
    <Contacts/>
    </div>
  </React.StrictMode>
);

