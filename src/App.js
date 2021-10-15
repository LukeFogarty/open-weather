import React, {useState} from "react";
import { SearchWeatherByCity, WeatherByLocation } from "./Components/WeatherAPICall";
import { WeatherComparer } from "./Components/WeatherComparer";
import { WeatherContext } from './Components/Context/GlobalState';
import {WeatherDisplay} from "./Components/WeatherDisplay"
import {LoadingDisplay} from "./Components/LoadingDisplay"
import {WaitingDisplay} from "./Components/SVGs/WaitingDisplay"
import {LogoDisplay} from "./Components/SVGs/LogoDisplay"
import './App.css';

function App() {
  //this is the set up for context, our global variables.
const [weather, setWeather] = useState([undefined,undefined]);
const [notFound, setNotFound] = useState("");
const value = { weather, setWeather, notFound, setNotFound};

  return (//WeatherContext creates global variables, makes it handy for passing certain data around, such as our weather details
    <div className="main">
    <WeatherContext.Provider value={value}>
      {/* The logo, is a little interactable*/}
      <LogoDisplay/>
      <b style={{"color":"#000000", "fontWeight": "400" }}>open<b style={{"color":"#dad9d9"}}>weather</b></b>
      {/* This is an error message letting you know if the city isnt in the database*/}
      <sup style={{"color":"#dad9d9", "fontSize": "12pt" }}>{notFound}</sup>
      <SearchWeatherByCity/><br/> 
      <div >
        <WeatherByLocation/>
        {/*a ternary statement on when to display the loading graphics*/
        (weather[0] !== undefined && weather[1] !== undefined)?<WeatherComparer/>:<WaitingDisplay/>}
        {/*a ternary statement on when to display the loading graphics*/
        (weather[1] !== undefined)? <WeatherDisplay weatherData ={weather[1]}/> : <LoadingDisplay/>}
      </div>
    
    </WeatherContext.Provider>
    </div>
  );
}

export default App;
