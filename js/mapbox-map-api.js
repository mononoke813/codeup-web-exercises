import {keys} from "./keys.js";

const favJoints = [
    {
        name: "Broadway Daily Bread",
        location: "5011 De Zavala Rd, San Antonio, TX 78249",
        dish: "Peppered Turkey on Birdman bread",
        image: "img/broadway_signature_sandwich.jpg",
        facts: "Fresh baked goods made daily from scratch with fresh ingredients; serving breakfast, lunch, and bakery items",
    },
    {
        name: "Niki's Tokyo Inn",
        location: "819 W Hildebrand Ave, San Antonio, TX 78212",
        dish: "ANYTHING",
        image: "img/sushi-sampler.jpg",
        facts: "Family-run restaurant serving traditional sushi and not an Americanized roll in sight; sit American-style or Japanese-style or at the Sushi Bar",
    },
    {
        name: "La Marginal",
        location: "2447 Nacogdoches Road, San Antonio, TX 78217",
        dish: "Churrasco Puertorriqueno",
        image: "img/churrasco1.jpg",
        facts: "Authentic Puerto Rican cuisine; if unsure what to get, try the lunch buffet for a little bit of everything!",
    }
]

const createMap = (containerElem, coordinates) => {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: coordinates,
        zoom: 8,
    });
    return map;
};

const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].center;
};
const getAddress = async (lng, lat) => {
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
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].place_name;
};


const createMarker = (map, coordinates, popupHTML) => {
    const popup = new mapboxgl.Popup().setHTML(popupHTML);
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map).setPopup(popup);
};


//MAIN
(async () => {
    const coordinates = await getCoordinates("5011 De Zavala Rd, San Antonio, TX 78249");
    mapboxgl.accessToken = keys.mapbox;
    const map = createMap("map", coordinates);
    //createMarker(map, coordinates, `<p></p><p></p>`);
    for (let favJoint of favJoints) {
        const coordinates = await getCoordinates(favJoint.location);
        const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
        const popup = new mapboxgl.Popup({offset: 25}).setHTML(`
            <h3>${favJoint.name}</h3>
            <p>${favJoint.dish}{favJoint.image}</p>
            <p>${favJoint.facts}</p>
        `);
        marker.setPopup(popup);
    }

})();