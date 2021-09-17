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
const [weather, setWeather] = useState([undefined,undefined]);
const value = { weather, setWeather};

  return (//WeatherContext creates global variables, makes it handy for passing certain data around, such as our weather details
    <div className="main">
    <WeatherContext.Provider value={value}>
      <LogoDisplay/>
      <b style={{"color":"#000000", "font-weight": "400" }}>ediflo<b style={{"color":"#dad9d9"}}>weather</b></b>
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
