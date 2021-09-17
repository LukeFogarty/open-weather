import { createContext } from 'react';

// create the initial state variables
export const WeatherContext = createContext({
    weather: [undefined, undefined],
    setWeather: () => {},
    theme: {
      light : {
        text: "#000000",
        background: "#FFFFFF",
        hover: "#F2F2F2",
        accent: "#0B25E5"
      },
      dark : {
        text: "#FFFFFF",
        background: "#585D71",
        hover: "#DAD9D9",
        accent: "#0C1642"
      }
    }
  });
