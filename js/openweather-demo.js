import {getForecast} from "./api/openweather.js";
import {createMap, getCoordinates, getAddress} from "./api/mapbox.js";


//MAIN
(async () => {
    //testing new getForecast
    const randomForecastLocation = await getForecast(45.7636, 78.9430);
    console.log(randomForecastLocation);

    const map = createMap("map", [45.7636, 78.9430]);


})();