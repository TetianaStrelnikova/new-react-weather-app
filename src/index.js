import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather';
import Contacts from "./Contacts"; 
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container mt-5">
   
    <Weather  defaultCity="Kiev"/>
   
    <Contacts/>
    </div>
  </React.StrictMode>
);

