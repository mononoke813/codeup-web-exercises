(function(){
    "use strict";

    const planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    const planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    const planetsBreak = planetsArray.join("<br>");
    console.log(planetsBreak);

    //create a planet string for each planet

//create a planet string with <li></li> around each planet
    const planetsListAdd = planetsArray.push("<ul>");
    const planetsListEnd = planetsArray.unshift("</ul>");
    const planetsInMiddle = planetsArray.join("<li></li>");
    const addAllTogether = planetsListAdd + planetsListEnd + planetsInMiddle;
    console.log(addAllTogether);

    //const unorderedList = `<ul>planetsList</ul>`;

    //console.log(unorderedList);


})();