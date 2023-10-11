// Exercises
//
// Create an HTML file named loops.html. Each of the following sections will instruct you to create a new javascript file. For each exercise, you should include a script tag on your html page that links the correct .js file.
//
//     For Loops
//
// Create a file named for_loops.js inside the js directory and link it to your loops.html file.
//     Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// const showMultiplicationTable = (num) => {
//     let result;
//         for(let i = 1; i <= 10; i++) {
//             result = `${num} x ${i} = ${num*i}`;
//             console.log(result);
//         }
//     return result;
// }
//
// const multiplicationTable = showMultiplicationTable(2);
// showMultiplicationTable(82);
//console.log(multiplicationTable);

// For example, showMultiplicationTable(7) should output
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

/* alternate random number generator:
const randomNum = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
    }

    soooo example.....const randomNumber = randomNum(20, 200);
 */
// const tenRandomNumbers = () => {
//     for (let i = 1; i <= 10; i++) {
//         const randomNum = Math.floor(Math.random() * (200 - 20) + 20);
//
//         if (randomNum % 2 === 0) {
//             let resultEven = `${randomNum} is even!`;
//             console.log(resultEven);
//         } else {
//             let resultOdd = `${randomNum} is odd!`;
//             console.log(resultOdd);
//         }
//     }
// }
//
// tenRandomNumbers();


// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for(i = 1; i <= 9; i++) {
    let row = " ";

    for(let j = 0; j < i; j++) {
        row = row + i;

    }
    console.log(row); //I want the number to repeat itself by it's number
}

/* alternatively....

const numberPyramid = (num) => {
    for(i = 1; i <= num; i++) {
        const message = i.toString().repeat(i); //or const message = i + "".repeat(i); bc .repeat is only a string method
        console.log(`message`);

numberPyramid(9);

 */


// Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
// Break and Continue

const countDownBy5 = (num) => {
    for(let i = num; i > 0; i-=5) {
        console.log(i);
    }
}


// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49
// While Loops
//
// Create a file named while.js in the js directory.
//     Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
// Do While Loop
//
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

let totalCones = Math.floor(Math.random() * 50) + 50;
console.log(`I have ${totalCones} to sell today.`);
do {
    let conesBought = Math.floor(Math.random() * 5) + 1;
    conesBought++;
    console.log(`The customer is purchasing ${conesBought} cones.`);
    totalCones = totalCones - conesBought;

    if (totalCones > conesBought) {
        let whatCustomerIsTryingToBuy = `${totalCones} cones left...`
        console.log(whatCustomerIsTryingToBuy);

    } else if(totalCones > conesBought) {
        console.log(`I'm sorry, I cannot sell you ${conesBought}; I only have ${totalCones} left.`);

    }

} while (totalCones > 0);
console.log(`Yay! I sold all the cones.`);



//     Finally, commit the changes to your git repository, and push to GitHub.