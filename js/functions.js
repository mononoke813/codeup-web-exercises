"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 * *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

 const name = "codeup!";
 const sayHello = (name) => {
     return `Hello, ${name}`;
};

 const sayThis = sayHello(name);
 console.log(sayThis);

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

sayHello();

const helloMessage = sayHello(`Lauren`);
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
const myName = "Lauren";

const newMessage = sayHello(myName);
console.log(newMessage); //console.log(sayHello(myName)); is an alternate way to write - FLEX

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
const isTwo = (num) => {
   return num === 2;
};

const soIsTwo = isTwo(random);
console.log(soIsTwo);




/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
const billTotal = 100;
const tipPercent = 10;

const calculateTip = (billTotal,tipPercent) => {
    return billTotal * (tipPercent / 100);
};

const total = calculateTip(0.2, 20);
const total2 = calculateTip(.25, 25.5);
console.log(total);
console.log(total2);

const final = calculateTip(billTotal,tipPercent);
console.log(final);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let billAmount = prompt(`What is the total bill amount?`);
let tipAmount = prompt(`How much of a tip do you want to leave? (input as whole number)`);
alert(`Your tip amount will be: $${(billAmount*(tipAmount/100)).toFixed(2)}.`); //.toFixed(2) goes HERE

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > let originalPrice = 100;
 * > let discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
const price = 100;
const discount = 0.3;
const applyDiscount = (price, discount) => {
    return price - (price * discount);
};

const newPrice = applyDiscount(price, discount);
console.log(`$${newPrice}`);