import {keys} from "./keys.js";
import {createMap, getCoordinates, getAddress} from "./api/mapbox.js";


//MAIN
(() => {

    createMap("map", [-98.4895, 29.4268]);

    // const getCoordinates = async (searchText) => {
    //     searchText = encodeURIComponent(searchText);
    //
    //     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_text}.json?access_token=${keys.mapbox}`;
    //     const options = {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     };
    //     const response = await fetch(url, options);
    //     const data = await response.json();
    //     return data;
    // }


    mapboxgl.accessToken = keys.mapbox;
    let coordinates = [-98.4895, 29.4268];
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v11',
        center: coordinates,
        zoom: 15,
        draggable: true,
    });


    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4895, 29.4268])
        .addTo(map);

// create the popup
    const popup = new mapboxgl.Popup({offset: 25}).setText(
        'This is your city.'
    );


    const getCoordinates = (searchText) => {
        searchText = encodeURIComponent(searchText);
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const response = fetch(url, options);
            const data = response.json();
            return data.features[0].center;
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    const getAddress = (lng, lat) => {
        if (Array.isArray(lng)) {
            lat = lng[1];
            lng = lng[0];
        }
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${keys.mapbox}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const response = fetch(url, options);
            const data = response.json();
            return data.features[0].place_name;
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    const userInput = document.querySelector("#search");
    const searchBtn = document.querySelector("#submit-search");

    searchBtn.addEventListener('click', e => {
        e.preventDefault();
        const searchValue = userInput.value;
        console.log(searchValue);

        const coordinates = getCoordinates(`${searchValue}`);
        console.log(coordinates);
        mapboxgl.accessToken = keys.mapbox;
        const map = createMap("map", coordinates);
        // const marker = createMarker({
        //     map,
        //     coordinates,
        //     draggable: true,
        //     // dragCallback: handleDragEnd,
        //     popupHTML: "<p>We live here now.</p>",
        // });
        const marker = new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4260])
            .addTo(map);
        let popup = new mapboxgl.Popup()
            .setLngLat([-98.489615, 29.426827])
            .setHTML(`<p>${city}!</p>`)
            .addTo(map);
    })


    // const handleDragEnd = async (e, map) => {
    //     console.log(e);
    //     const lng = e.target._lngLat.lng;
    //     const lat = e.target._lngLat.lat;
    //     map.flyTo({
    //         center: [lng, lat],
    //         zoom: 12,
    //         speed: 2,
    //     });
    //     const address = await getAddress(lng, lat);
    //     console.log(address);
    // };


    // get the coordinates of the address we're starting with
    // const coordinates = getCoordinates("8700 Tesoro Dr, San Antonio");
    // // initialize our token into mapboxgl
    //
    // // create the map
    //
    // // create a marker on the map
    //

    //


    // let city = coordinates;
    //
    //
    // let popup = new mapboxgl.Popup()
    //     .setLngLat([-98.489615, 29.426827])
    //     .setHTML(`<p>${city}!</p>`)
    //     .addTo(map);


    const currentLocation = document.querySelector('.weather-content-overview');
    const currentTemp = document.getElementsByClassName('weather-content-temp')[0];
    const forecastBox = document.getElementsByClassName('component-forecast-box')[0];

    const getFiveDayForecast = (lat, lng) => {
        if (Array.isArray(lat)) {
            lng = lat[1];
            lat = lat[0];
        }
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=imperial&&exclude=hourly&appid=${keys.openweather}`;
        let headers = new Headers();

        return fetch(url, {
            method: "GET",
            headers: headers
        })
            .then(data => {
                return data.json();
            });
    }

    getFiveDayForecast(29.4268, -98.4895).then(weatherData => {
        let city = weatherData.city.name;
        let dailyForecast = weatherData.list;
        renderData(city, dailyForecast);
    });

    const renderData = (location, forecast) => {
        const currentWeather = forecast;
        console.log(currentWeather);
        const weatherHeader = `
               <h1>${location}</h1>
                <p>${currentWeather[3].weather.description}</p>`;

        let findIcon = currentWeather[3].weather.icon;

        currentTemp.innerHTML = `
                <img class="wi" src="https://openweathermap.org/img/wn/${findIcon}@2x.png" alt="Weather Icon">
                <p class="wi wi-degrees">${Math.floor(currentWeather[3].main.temp)}&deg</p>`;

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
                <span class="degrees">${Math.floor(day.main.temp)}
                <span class="wi wi-degrees">&deg</span></span></div>`;
            forecastBox.appendChild(dayBlock);
        });
    }

// });


    // const handleFilterEvents = (coffees) => {
    //     const searchForm = document.querySelector('#navSearch');
    //     const searchInput = document.querySelector('#search');
    //     searchForm.addEventListener('submit', e => {
    //         e.preventDefault();
    //         console.log('submit event');
    //         const searchValue = searchInput.value;
    //         const accordionItems = document.querySelectorAll('.accordion-item');
    //         for (let accordion of accordionItems) {
    //             console.log(accordion.textContent.toLowerCase());
    //             if (accordion.textContent.toLowerCase().includes(searchValue.toLowerCase()) && searchValue) {
    //                 accordion.querySelector('.accordion-collapse').classList.add('show');
    //             } else {
    //                 accordion.querySelector('.accordion-collapse').classList.remove('show');
    //             }
    //         }
    //     });
    // };

    // const myMap =
    // mapboxgl.accessToken = YOUR_API_TOKEN_HERE;
    // const map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/streets-v11',
    //     zoom: 10,
    //     center: [-98.4916, 29.4252]
    // });


    // const codeupPopup = new mapboxgl.Popup()
    //     .setHTML(`<p>Welcome to ${city}!</p>`);
    //
    // marker.setPopup(codeupPopup);


    // const createMarker = (map, coordinates, popupHTML) => {
    //     const popup = new mapboxgl.Popup().setHTML(popupHTML);
    //     console.log(popup);
    //     const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map).setPopup(popup);
    // };
    // const accordionItems = document.querySelectorAll('.accordion-item');
    // for (let accordion of accordionItems) {
    //     console.log(accordion.textContent.toLowerCase());
    //     if (accordion.textContent.toLowerCase().includes(searchValue.toLowerCase()) && searchValue) {
    //         accordion.querySelector('.accordion-collapse').classList.add('show');
    //     } else {
    //         accordion.querySelector('.accordion-collapse').classList.remove('show');
    //     }
    //}
    //     });
    // };

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


