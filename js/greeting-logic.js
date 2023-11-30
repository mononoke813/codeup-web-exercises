import {randomNumberGenerator} from "./number-utils.js";

const greetings =
    [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Salutations",
        "Howdy",
        "Yo",
        "Bonjour",
        "Hola",
        "Ciao",
        "Namaste",
        "G'day",
        "What's up",
        "Sup",
        "How's it going",
        "Nice to meet you",
        "Welcome",
        "Hey",
        "How are you",
        "Pleased to meet you"
    ];

// console.log(greetings);


const randomGreetingNumber = () => {
    return [randomNumberGenerator(0, 19)];

}

export let randomGreeting = greetings[randomGreetingNumber()];

// console.log(randomGreeting);
