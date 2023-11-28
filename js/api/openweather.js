import {keys} from "../keys.js"; // keeping keys with the functions

/**
 * Gets a forecast from the OpenWeather API
 * @param {number} lat - latitude
 * @param {number} lng - longitude
 * @returns {Promise<void>} - a promise that resolves to the forecast data
 */
export const getForecast = async (lat, lng) => {
    if (Array.isArray(lat)) {
        lng = lat[1];
        lat = lat[0];
    }
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${keys.openweather}`;
    const options = {
        method: "GET",
    };
    const response = await fetch(url, options);
    const data = response.json();
    return data;
}