//IIFE
// Main Method
const handleCountdown = (countdown) => {
    console.log(countdown);

};


(() => {
    //the setInterval Method
    let countdown = 10;
    console.log(countdown);
    const countdownTimer = setInterval(() => {
        countdown--;
        console.log(countdown);
        if (countdown === 0) {
            clearInterval(countdownTimer);
            console.log("Done!");
        }
    }, 1000); //done in milliseconds i.e. this is countdown by 1s; 3000 = 3s, 10000 = 10s;


    console.log("Done!");  //just bc countdown ends, doesn't mean js stops - to have the "Done" after the countdown timer ends, need to put the "Done" INSIDE the if statement


    //setTimeout() Method
    // const adPopup = setTimeout(() => {
    //      console.log("PEEKABOO!");
    //  }, 5000);

    // clear timeout method
    //  const noAdsBtn = document.querySelector("button");
    //  noAdsBtn.addEventListener("click", () => {
    //      clearTimeout(adPopup);
    //  });

    //location object - used to send them somewhere
    //  console.log(window.location);
    //  setTimeout(() => {
    //      window.location.reload();
    //  }, 5000);


})();


// clearInterval
clearInterval(id)