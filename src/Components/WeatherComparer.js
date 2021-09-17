import { useState, useContext } from "react";
import { WeatherContext } from './Context/GlobalState';
import '../App.css';
export const  WeatherComparer = (props) => {
    const { weather } = useContext(WeatherContext);
    const [temp, setTemperature] = useState([Math.round(weather[0].main.temp-273.15),Math.round(weather[1].main.temp-273.15)]);
    const [humidity,setHumidity] = useState([Math.round(weather[0].main.humidity),Math.round(weather[1].main.humidity)]);
    const [wind,setWind] = useState([Math.round(weather[0].wind.speed*3.6),Math.round(weather[1].wind.speed*3.6)]);
    const [tempType,setTempType] = useState(["°C","kmh"]);
    const [showing,setShowing] = useState("Temperature");

    function changeTemperature(){
        //this changes the displayed temperature between celsius and farenheit.
        //it also sets up the wind and humidty
        if (tempType[0] === "°F"){
            //this changes the Kelvin temperature to celsius, and wind speed to kilometres per hour
            setTemperature([Math.round(weather[0].main.temp-273.15),Math.round(weather[1].main.temp-273.15)]); 
            setHumidity([Math.round(weather[0].main.humidity),Math.round(weather[1].main.humidity)]);
            setWind([Math.round(weather[0].wind.speed*3.6),Math.round(weather[1].wind.speed*3.6)]);
            setTempType(["°C","kmh"]);
        } else{
            //...and this to Farenheit, and wind speed to miles per hour
            setTemperature([Math.round((weather[0].main.temp-273.15)*(9/5)+32),Math.round((weather[1].main.temp-273.15)*(9/5)+32)]); 
            setHumidity([Math.round(weather[0].main.humidity),Math.round(weather[1].main.humidity)]);
            setWind([Math.round(weather[0].wind.speed*2.237),Math.round(weather[1].wind.speed*2.237)]);
            setTempType(["°F","mph"]);
        }
    }

    function changeShowing(){
        //This toggles between the comparisons
        switch (showing){
            case "Temperature":
                setShowing("Humidity");
                break;
            case "Humidity":
                setShowing("Wind");
                break;
            default:
                setShowing("Temperature");
        }
    }

    
    if (weather[0] !== undefined && weather[1] !== undefined){
        return (
            <div className={"compareCard"}>
                
                <span className={"subheading crusorHand"} style={{"color":"#dad9d9"}} onClick={() => {changeShowing()}}>{showing}</span>
                    {(showing === "Temperature")&&<span className={"heading crusorHand grow"} onClick={() => {changeTemperature()}}>{(temp[0]>temp[1])&& "+"}{temp[0]-temp[1]+tempType[0]}</span>}
                    {(showing === "Humidity")&&<span className={"heading crusorHand grow"}>{(humidity[0]>humidity[1])&& "+"}{humidity[0]-humidity[1]+"%"}</span>}
                    {(showing === "Wind")&&<span className={"heading crusorHand grow"} onClick={() => {changeTemperature()}}>{(wind[0]>wind[1])&& "+"}{wind[0]-wind[1]+tempType[1]}</span>}
                <br/>
                    {(showing === "Temperature")&&<span className={"subheading"} style={{"color":"#dad9d9"}}>It's <b>warmer</b> in <b>{weather[(temp[0]>temp[1])?0:1].name}</b> </span>}
                    {(showing === "Humidity")&&<span className={"subheading"} style={{"color":"#dad9d9"}}>It's <b>wetter</b> in <b>{weather[(humidity[0]>humidity[1])?0:1].name}</b> </span>}
                    {(showing === "Wind")&&<span className={"subheading"} style={{"color":"#dad9d9"}}>It's <b>windier</b> in <b>{weather[(wind[0]>wind[1])?0:1].name}</b> </span>}
               
            </div>
        );
    }else{return <div className={"compareCard"}> loading...</div>}
    
}