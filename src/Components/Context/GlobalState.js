import { createContext } from 'react';

// create the initial state variables. these will be our global variables
export const WeatherContext = createContext({
    weather: [undefined, undefined],
    setWeather: () => {},
    notFound: undefined,
    setNotFound: () => {}
  });
