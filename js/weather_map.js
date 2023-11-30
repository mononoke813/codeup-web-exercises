import {keys} from "./keys.js";
import {createMap, getCoordinates, getAddress} from "./api/mapbox.js";


//MAIN
(() => {
    const createMarker = ({map, coordinates, draggable = false, dragCallback = null, popupHTML = null}) => {
        const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
        let popup = null;
        if (popupHTML) {
            popup = new mapboxgl.Popup({offset: 25}).setHTML(popupHTML);
        }
        if (popup) {
            marker.setPopup(popup);
        }
        if (draggable) {
            marker.setDraggable(true);
        }
        if (dragCallback) {
            marker.on("dragend", (e) => {
                dragCallback(e, map);
            });
        }
        return marker;
    };


    const currentLocation = document.querySelector('.weather-content-overview');
    const currentTemp = document.getElementsByClassName('weather-content-temp')[0];
    const forecastBox = document.getElementsByClassName('component-forecast-box')[0];

    const getFiveDayForecast = (lat, lng) => {
        if (Array.isArray(lat)) {
            lng = lat[1];
            lat = lat[0];
        }
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&cnt=5&&exclude=minutely,hourly&appid=${keys.openweather}`;
        let headers = new Headers();

        return fetch(url, {
            method: "GET",
            headers: headers
        })
            .then(data => {
                return data.json();
            });
    }
    console.log(getFiveDayForecast(29.4268, -98.4895));

    getFiveDayForecast(29.4268, -98.4895).then(weatherData => {
        let city = weatherData.features[0].place_name;
        console.log(city);
        let dailyForecast = weatherData.daily[0];

        console.log(dailyForecast);
        renderData(city, dailyForecast);
    });
// DOES NOT GIVE CITY NAME ONLY -- GIVES FULL ADDRESS
//     const getCity = (lng, lat) => {
//         if (Array.isArray(lng)) {
//             lat = lng[1];
//             lng = lng[0];
//         }
//         const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${keys.mapbox}`;
//         let headers = new Headers();
//
//         return fetch(url, {
//             method: "GET",
//             headers: headers
//         })
//             .then(data => {
//                 return data.json();
//             });
//     }
//     console.log(getCity(-98.4895, 29.4268));
//     const getAddress = (lng, lat) => {
//         if (Array.isArray(lng)) {
//             lat = lng[1];
//             lng = lng[0];
//         }
//         const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${keys.mapbox}`;
//         let headers = new Headers();
//
//         return fetch(url, {
//             method: "GET",
//             headers: headers
//         })
//             .then(data => {
//                 return data.json();
//             });
//     }
//     console.log(getAddress(-98.4895, 29.4268));
//
//     getAddress(29.4268, -98.4895).then(locationData => {
//         let city = locationData.features[0].place_name;
//         console.log(city);
//
//         renderData(city);
//     });


    const renderData = (location, forecast) => {
        const currentWeather = forecast[0];
        let findIcon = currentWeather.weather[0].icon;
        console.log(currentWeather);
        const weatherHeader = `
               <h1>${location}</h1>
                <p>${currentWeather.weather[0].description}</p>`;

        currentTemp.innerHTML = `
                <img class="wi" src="https://openweathermap.org/img/wn/${findIcon}@2x.png" alt="Weather Icon">
                <p class="wi wi-degrees">${forecast[0].temp.day}</p>`;

        currentLocation.innerHTML = weatherHeader;

        forecast.forEach(day => {
            let date = new Date(day.dt * 1000);
            let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
            let name = days[date.getDay()];

            let dayBlock = document.createElement("div");
            dayBlock.className = 'forecast-item';
            dayBlock.innerHTML = `
                <div class="forecast-item-heading">${name}</div>
                <div class="forecast-item-info">
                <img class="wi ${findIcon}">
                <span class="degrees">${Math.floor(day.temp.day)}
                <img class="wi wi-degrees">&deg</span></div>`;
            forecastBox.appendChild(dayBlock);
        });
    }


// THIS PART NOT WORKING
    //     const options = {
    //         method: "GET",
    //     };
    //     const response = await fetch(url, options);
    //     const data = response.json();
    //     return data;
    // }


// // //this creates a card for each day
// const eachCardArray = document.querySelectorAll(".card");
// for (let i = 0; i <= 5; i++) {
//
//     eachCardArray[i].innerHTML = `
//                      <img src="./img/san-antonio-skyline-1.jpeg" class="card-img-top" alt="San Antonio Skyline">
//                      <div class="card-body">
//                          <p class="card-text">${daily[i].dt}</p>                         <p>summary here</p>
//                         <p>${daily[i].temp}</p>
//                         <p>daily[i].weather[i].icon</p>
//                         <p>${daily[i].moon_phase}</p>
//                     </div>`;
//     console.log(eachCardArray[i].innerHTML);
// }


    // const updatedWeather = async (forecast) => {
    //     const better5dayForecast = forecast.map((day) => {
    //         const betterObject = {
    //             summary: day.moon_phase,
    //             temp: day.moonrise,
    //         }
    //         return betterObject;
    //     });
    //     return better5dayForecast();
    // }


// CREATE A SEARCH BOX WHERE THE USERS INPUT IS TRANSLATED INTO COORDS AND THOSE COORDS ARE FED TO THE GETFIVEDAYFORECAST


    // THESE WORK
    // mapbox api format LONG, LAT
    const map = createMap("map", [-98.4895, 29.4268]);
    // const theseCoords = getCoordinates("San Antonio");
    // console.log(theseCoords);


    // UNSURE WHAT TO DO WITH THESE
    // const sanAntonioForecast = await getFiveDayForecast(29.4268, -98.4895),
    //     fiveDayArray = await updatedWeather(sanAntonioForecast); //returns array of weather data
    // console.log(sanAntonioForecast);
    // console.log(fiveDayArray);

    // render each daily forecast
    //
    //
    // for (let day of days) {
    //


    // const fiveDayArr = sanAntonioForecast.daily.slice(0, 5);
    // console.log(fiveDayArr);
    //
    // const getNewArr = await updatedWeather(fiveDayArr);
    // console.log(getNewArr);
    //
    // renderData("San Antonio", dailyForecast);
})();


