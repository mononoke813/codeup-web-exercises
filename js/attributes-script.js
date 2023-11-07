(() => {
// Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
    const timeoutImg = setTimeout(() => {
        profileImg = document.querySelector("#profile-pic");
        profileImg.setAttribute("src", "./img/pexels-karim-tab-18624392.jpeg");

    }, 2000);


// Four seconds after the page loads, use innerHTML to change the name in "profile-name".
    const timeoutName = setTimeout(() => {
        const nameChange = document.querySelector("#profile-name");
        nameChange.innerHTML = "Aww Kitteh Kitteh!";

    }, 4000);


// Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.
    const timeoutColorAndFont = setTimeout(() => {
        const colorFontChange = document.querySelector
        ("#profile-desc");
        colorFontChange.classList.add("profile-desc");
    }, 6000);

// Use setTimout to create these behaviors.


// Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.
    const backgroundColor = setInterval(() => {
        const profileBackground = document.querySelector("#profile-card");
        profileBackground.classList.add("profile-card");
    }, 2000);

})();