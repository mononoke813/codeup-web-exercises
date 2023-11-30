import {d6Roller, d20Roller} from "./dice.js";


// write the code that gets user input, uses our dice-rolling functions, and outputs to the DOM.
document.querySelector("#rollD6").addEventListener('click', () => {
    document.querySelector("#d6Result").innerHTML = d6Roller().toString();
});

document.querySelector("#rollD20").addEventListener('click', () => {
    document.querySelector("#d20Result").innerHTML = d20Roller().toString();
});