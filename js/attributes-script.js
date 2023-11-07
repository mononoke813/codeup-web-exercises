//BONUS
// const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];


(() => {

    const timeoutImg = setTimeout(() => {
        profileImg = document.querySelector("#profile-pic");
        profileImg.setAttribute("src", "./img/pexels-karim-tab-18624392.jpeg");

    }, 2000);


    const timeoutName = setTimeout(() => {
        const nameChange = document.querySelector("#profile-name");
        nameChange.innerHTML = "Aww Kitteh Kitteh!";

    }, 4000);


    const timeoutColorAndFont = setTimeout(() => {
        const colorFontChange = document.querySelector
        ("#profile-desc");
        colorFontChange.classList.add("profile-desc");
    }, 6000);


    const backgroundColor = setInterval(() => {
        const profileBackground = document.querySelector("#profile-card");
        profileBackground.classList.toggle("profile-card");
    }, 2000);

    // const backgroundColor = setInterval(() => {
    //     const profileColor = document.querySelector("#profile-card");
    //      setInterval(() => {
    //          const randomIndex = Math.floor(Math.random() * colors.length);
    //          profileCard.style.backgroundColor = colors[randomIndex];
    //      }, 2000);
    //     profileCard.classList.toggle("profile-card");
    // }, 2000);


})();


