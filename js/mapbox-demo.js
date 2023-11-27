import {keys} from "./keys.js";

const getCoordinates = async (searchText) => {
    // need search text in format the url will understand -> use encodeURIComponent
    searchText = encodeURIComponent(searchText);


    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_text}.json?access_token=${keys.mapbox}`;
    // the ?access_token=${keys.mapbox} is the way to allow you to have access to the map lest you want an access denied
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}


// MAIN
(async () => {
    // const coordinates = await getCoordinates("8700 Tesoro Dr, San Antonio, TX 78217");
    // mapboxgl.accessToken = keys.mapbox;


    // doing this protects keys from being picked up by others to mooch off of your wallet
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL

        // can also pass the variable COORDINATES into the area after center
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 9 // starting zoom
        //add extra properties from mapbox.com following the breadcrumb All Docs -> Mapbox GL JS -> API Reference -> Map
    });
    const marker = new mapboxgl.Marker()
        .setLngLat([-98.4916, 29.4252]) //// can also pass the variable COORDINATES into the area after .setLngLat
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setLngLat([-98.4916, 29.4252])
        .setHTML("<p>Start Here</p>").addTo(map); // can add flyTo with attributes from the documentation on mapbox.com


})();
