"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// const colorName = prompt("What is your color preference?");
//
// const analyzeColor = (colorName) => {
//     if (colorName === "blue") {
//        return ("I love blue too!");
//     } else if (colorName === "red") {
//         return ("Red is a color of passion.");
//     } else if (colorName === "yellow") {
//         return ("Shine your warmth like the sun.");
//     } else {
//         return ("Well aren't you dower.");
//     }
// }
// const userColor = analyzeColor(colorName);
// console.log(userColor);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// const randomColorGenerator = analyzeColor(randomColor);
// console.log(randomColorGenerator);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// switch (randomColor) {
//     case "blue":
//         console.log("Blue is so soothing.");
//         break;
//     case "red":
//         console.log("Red means stop!");
//         break;
//     case "yellow":
//         console.log("Yellow is so happy.");
//         break;
//     default:
//         console.log("...but colors are so cool.");
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let favoriteColor = prompt("What's your favorite color?");
//
// analyzeColor(favoriteColor);
//
// alert(`You chose ${favoriteColor}! Nice.`);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// const calculateTotal = (luckyNumber, totalAmount) => {
//     if (luckyNumber === 0) {
//         let luckyNumber0Discount = 1 - 0
//         let discountedTotal = totalAmount * luckyNumber0Discount;
//         return discountedTotal.toFixed(2);
//
//     } else if (luckyNumber === 1) {
//         let luckyNumber1Discount = 1 - .1;
//         let discountedTotal = totalAmount * luckyNumber1Discount;
//         return discountedTotal.toFixed(2);
//
//     } else if (luckyNumber === 2) {
//         let luckyNumber2Discount = 1 - .25
//         let discountedTotal = totalAmount * luckyNumber2Discount;
//         return discountedTotal.toFixed(2);
//
//     } else if (luckyNumber === 3) {
//         let luckyNumber3Discount = 1 - .35;
//         let discountedTotal = totalAmount * luckyNumber3Discount;
//         return discountedTotal.toFixed(2);
//
//     } else if (luckyNumber === 4) {
//         let luckyNumber4Discount = 1 - .5;
//         let discountedTotal = totalAmount * luckyNumber4Discount;
//         return discountedTotal.toFixed(2);
//
//     } else {
//         let luckyNumber5Discount = 1 - 1;
//         let discountedTotal = totalAmount * luckyNumber5Discount;
//         return discountedTotal.toFixed(2);
//     }
// }
//
// console.log(calculateTotal(0, 100));
// console.log(calculateTotal(1, 100));
// console.log(calculateTotal(2, 100));
// console.log(calculateTotal(3, 100));
// console.log(calculateTotal(4, 100));
// console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
// const customerBill = prompt("What is the total amount of your bill?");
// let discountedTotal = calculateTotal(luckyNumber, customerBill);
//
//
// alert(`Your lucky number was: ${luckyNumber}`);
// alert(`Your bill before discount is: $${customerBill}`);
// alert(`Your bill after discount is: $${discountedTotal}`);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

const message = confirm(`Would you like to enter a number?`);

const userNum = prompt(`Which number?`);


if (typeof userNum !== number) {
    alert(`No silly, I asked for a number...`);
} else {
    if (typeof userNum === number) {
        if (userNum % 2 == 0) {
            alert("Your number is even.");
        } else {
            alert("Your number is odd.");
        }

        const addNine = userNum + 9;
        alert(`Your number plus 100 equals to ${addNine}`);

        if (userNum >= 0) {
            alert(`And your number is positive!`);
        } else {
            alert(`And your number is negative!`);
        }
        }
    }
