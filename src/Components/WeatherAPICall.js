import { useEffect, useState, useContext, useCallback } from "react";
import { WeatherContext } from './Context/GlobalState';
import {WeatherDisplay} from "../Components/WeatherDisplay"
import {LoadingDisplay} from "../Components/LoadingDisplay"

//this gets the weather from an input city name
export const  SearchWeatherByCity = () => {
  //this is the search bar. 
  const key = "d0ef4a0b1cda51765749cc929aabd66e"; //The API key
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const {weather, setWeather, setNotFound} = useContext(WeatherContext);

  const fetchSearchedCity =() =>{
    //set weather as undefined when you click the search bar
    setWeather([weather[0],undefined]);
    setNotFound("");
    if (searching === false){
      setSearching(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${key}`;
      fetch(url).then(response => {
        //get our data and return as json if all is okay
        if (response.ok) {return response.json();}
        else{ //throw error if not okay
          throw new Error('The city does not exist. Bad request!');
        }
      }).then(json => {  
        if (("message" in json) ){
          //nothing happens if the error 'message' is found in our returned data, so display 'loading'
        }
        else{
          //set the weather data to be displayed, and our global context 'Weather', for easy comparison
          setWeather([weather[0],json]);
        }
        setSearching(false);
      }).catch(error => { //reset the search bar, and display error message
        setSearching(false);
        setNotFound("No city found by that name. Please try another...");
      })
    }
  }


  
//This displays the searchbar components.
return <span>
<input value={searchTerm} placeholder={"Search cities..."} onChange={(e) => {setSearchTerm(e.target.value)}}/>
<button type="button" onClick={() => {fetchSearchedCity()}} disabled ={searching}>{">"}</button>
</span>
};

//this tries to get the weather at your location.
export const  WeatherByLocation = () => {
  const key = "6ec23160ea5ff134b538908a334a7d8e";
  const [coordinates, setCoordinates] = useState({"lat":undefined,"lon":undefined});
  const {weather, setWeather} = useContext(WeatherContext);
  const [url, setURL] = useState(null);

  const fetchData = useCallback(async (url) => {
    //this is in a callback function to avoid a memory leak error I was getting
      try {
        const response = await fetch(url);
        const json = await response.json();

        if (("message" in json) ){
          //nothing happens if the error 'message' is found in our returned data, so display 'loading'
        }
        else{
          //set the weather data to be displayed, and our global context 'Weather', for comparison
          setWeather([json,weather[1]]);
        }

      } catch (error) {
        console.log("Error retrieving weather data by location: ", error);
      }
  },[weather,setWeather]);

    
  useEffect(() => {
    //get current location
    const getCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
      function(position) {
        //save the coordinates in our variable
          setCoordinates({"lat":position.coords.latitude,"lon":position.coords.longitude})
      },
      function(error) {
        console.error("Could not get location coordinates: "+ error.message);
      })
    }; 
    //if the coordinates are found and the url is different from the last one, fetch the API according to location. 
    if (coordinates.lat === undefined) getCoordinates();
    let newurl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}`;
    if (coordinates.lat !== undefined && url !== newurl){
      fetchData(newurl);
      setURL(newurl);
    }
  }, [fetchData, coordinates, setCoordinates, url, setURL]);

  //This displays loading while the json is undefined, and then either the correct info or the loading graphics.
  return <>
    {(weather[0] !== undefined)? 
    <WeatherDisplay weatherData ={weather[0]}/> 
    : <LoadingDisplay/>}
  </>

};
