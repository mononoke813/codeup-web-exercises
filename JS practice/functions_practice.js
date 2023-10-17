// Here are some extra practice exercises for functions:
// ## Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that takes a number as input, representing a temperature in Celsius, and returns the equivalent temperature in Fahrenheit.

const celsiusToFahrenheit = (num) => {
    return cels = parseFloat(num * 1.8 + 32).toFixed(2);

 }
const whatIsFahr = celsiusToFahrenheit(10);
console.log(whatIsFahr);

const whatIsFahr2 = celsiusToFahrenheit(37);
console.log(whatIsFahr2);


const FahrenheitToCelsius = (num) => {
    return fahr = parseFloat((num - 32) * 5/9).toFixed(2);
}
const whatIsCels = FahrenheitToCelsius(100);
console.log(whatIsCels);

const whatIsCels2 = FahrenheitToCelsius(78);
console.log(whatIsCels2);



// ## Finding the Average
// Write a function average(a, b, c) that takes three numbers as arguments and returns their average.

const average = (a, b, c) => {
    return avg = (a + b + c)/2;
}
const findTheAverage = average(2, 4, 6);
console.log(findTheAverage);

const findTheAverage2 = average(10, 10, 6);
console.log(findTheAverage2);



// ## First Character
// Write a function firstChar(str) that returns the first character of a string.



// ## Last Character
// Write a function lastChar(str) that returns the last character of a string.



// ## Is Palindrome?
//     Write a function isPalindrome(str) that takes in a string and returns true if the string is a palindrome, false otherwise. A palindrome is a word that is spelled the same forwards and backwards i.e. racecar, mom, kayak.
//     To help, here is a function reverseString(str) that takes in a string and returns the reversed string. You'll need to use it to solve isPalindrome.
// const reverseString = (str) => {
//     return str.split("").reverse().join("");
// }