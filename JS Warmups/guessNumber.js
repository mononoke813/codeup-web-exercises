const targetNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess () {
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

    //check if guess is valid
    if (userGuess > 100 || userGuess < 1 || isNaN(userGuess)) {
        alert("You're an idiot. Pick a number between 1 and 100...");
        checkGuess();
    } else {
        //increment number of attempts
        attempts++;


//     while(attempts < 10) {
//         console.log(`Please try again...`);
//         attempts++;

//     for(let attempts = 1; attempts < 10; attempts++) {
//         console.log(`Please try again...`);
//     }

        //check if guess is correct
        if (userGuess === targetNumber) {
            //if true, display a winning message
            alert(`YES!! You guessed ${targetNumber} in ${attempts} attempts. You have won a bubble gums and a chocolate!`);
            return;
        } else {
            const hint = userGuess < targetNumber ? `Guess a higher number...` : `Guess a lower number...`
            //if false, provide a hint and call checkGuess() again
            alert(`${hint}`);
            checkGuess();
        }
    }
}
//start the game
checkGuess();