// IF OPTION 1 DOESN'T LOG THE OUTCOME, MAKE SURE NO
// CURLY BRACKETS ARE AROUND IT
// BECAUSE THIS IS A 'DEFAULT EXPORT'

import {randomNumberGenerator} from "./number-utils.js";


// IF THE VARIABLE OR FUNCTION IS GREYED OUT FOR OPTION 2:
// MAKE SURE THE CURLY BRACKETS ARE AROUND THE VAR/FX
// BECAUSE THIS IS A 'NAMED EXPORT' AND CANNOT HAVE NAME CHANGED

// import {randomNumber} from "./number-utils.js";

// NOT LONGER NEEDED IN THIS JS FILE BECAUSE IT EXISTS IN ANOTHER
// JS FILE "NUMBER-UTILS.JS"
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

export const d6Roller = () => {
    return randomNumberGenerator(1, 6);
}

export const d20Roller = () => {
    return randomNumberGenerator(1, 20);
}

// console.log(randomNumber(1, 6));
// console.log(randomNumber(1, 20));


// OPTION 1
// export {rollD6, rollD20};

// OR OPTION 2
// export function rollD6(){
//               return randomNum(1, 6);
//               }
//
// export function rollD20(){
//        return randomNum(1, 20);
//        }