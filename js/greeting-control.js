import {randomGreeting} from "./greeting-logic.js";


const userName = document.querySelector("#name");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const userNameValue = userName.value;
    document.querySelector("#greetingResult").innerHTML = `${userNameValue}! ${randomGreeting}!`;
});