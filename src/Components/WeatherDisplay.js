import { useState } from "react";
import '../App.css';

export const  WeatherDisplay = (props) => {
    const city = props.weatherData.name+", "+props.weatherData.sys.country;
    const icon = `https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`; //get the weather icon from the API
    const [temp, setTemperature] = useState(Math.round(props.weatherData.main.temp-273.15));
    const wind = props.weatherData.wind.speed;
    const humidity = props.weatherData.main.humidity;
    const description = props.weatherData.weather[0].description;
    const [tempType,setTempType] = useState("°C");

    function changeTemperature(){
        //this changes the displayed temperature between celsius and farenheit
        if (tempType === "°F"){
            setTemperature(Math.round((props.weatherData.main.temp-273.15))); 
            setTempType("°C");
        } else{
            setTemperature(Math.round((props.weatherData.main.temp-273.15)*(9/5)+32));
            setTempType("°F");
        }
    }

    return (
        <div className="weatherCard">
            <div className="textCentred">
                <div className="skyCircle grow">
                    <img src={icon} alt="weather icon" />
                </div>
                <span className="heading crusorHand grow" onClick={() => {changeTemperature()}}>{temp+tempType}</span>
            </div>
            <div>
                <span className="heading grow">{city}</span><br/>
                <p className="description">
                    <span  className="subheading" >{description}</span>
                    Humidity: {humidity}%<br/>
                    Wind: {(tempType === "°C")? Math.round(wind*3.6)+"kmh" : Math.round(wind*2.237)+"mph"}
                </p>
            </div>
        </div>
        );
};