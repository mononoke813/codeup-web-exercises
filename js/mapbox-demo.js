import {keys} from "./keys.js";

// MAIN
(async () => {
    // doing this protects keys from being picked up by others to mooch off of your wallet
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 9 // starting zoom
        //add extra properties from mapbox.com following the breadcrumb All Docs -> Mapbox GL JS -> API Reference -> Map
    });
    const marker = new mapboxgl.Marker()
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setLngLat([-98.4916, 29.4252])
        .setHTML("<p>Start Here</p>").addTo(map); // can add flyTo with attributes from the documentation on mapbox.com

})();
