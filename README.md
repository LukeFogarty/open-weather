# Open-Weather Comparer

This small application gets a user's location and a user-supplied city and displays general differeneces in the weather.
Here is a live link:
https://thirsty-ardinghelli-c0f9a2.netlify.app/

## The App
It takes in the user's longitude and lattitude and returns the weather based on their position. This is an API call to OpenWeather using the coordinates taken from the user. 

The location and country, temperature, humidity and wind speed are displayed, along with an icon of the current weather and a short description of it. All this information is recieved from the API. The original temperature is in Kelvin, so a quick formula renders it in either celsius or farenheit. This is toggled by clicking on the large temperature text. The same is done for wind speed, miles and kilometres. 

The second city is found through a search bar, which retrieves the data using an input city name instead of coordinates. When both cities are input, a comparer component appears between them. This displays the difference in temperature, humidity and wind speed when clicked on.

There are some css animations and stylings, but no other imported libraries. There's some custom svgs, but otherwise, it is all base react.
