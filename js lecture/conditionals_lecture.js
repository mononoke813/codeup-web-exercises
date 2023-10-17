// if (false) { //change the condition in () to change the output of the console.log
//     console.log("The condition is true.");
// } else {
//     console.log("The condition is false.");
// }
//
// console.log('This is after the conditional statement.')
//
//
//
// let isLoggedIn = true;
//
// if (isLoggedIn) {
//     console.log("Logged in.");
// } else {
//     console.log("Not logged in.");
// }
//
//
//
// const username = "gatesl";
//
// if (username) {
//     console.log("Logged in.");
// } else {
//     console.log("Not logged in.");
// }
//
//
// const numOfUsers = 157;
//
// if (numOfUsers >= 200) {
//     console.log("That's a lot of users.");
// } else {
//     console.log("Marketing needs to do a better job.");
// }
//
//
// const newNumOfUsers = 1000;
//
// if (newNumOfUsers >= 1000) {
//     console.log("Ok that's too many users. Marketing needs to cool their jets!");
// } else if (newNumOfUsers >= 200) {
//     console.log("That's a lot of users");
// } else {
//     console.log("Marketing needs to do a better job.");
// }
//
//
//
const userRole = "admin";

if(userRole === "student") {
    console.log("Let them see the curriculum");
} else if(userRole === "admin") {
    console.log("Let them see the curriculum and the instructor portal");
} else {
    console.log("Don't let them see anything.");
}
//
//
// //const isTwo = (number) {
// //    if (typeof number !== "number") {
//   //      return false;
//     //}
//
// //    let result = number === 2;
// //    return result;
// //};
//
// // const calculateTip = (tipPercentage, billTotal) => {
// //    const isTheTipBogus = isNaN(parseFloat(tipPercentage));
// //    const isTheBillBogus = isNaN(parseFloat(billTotal));
// //     if (isTheTipBogus || isTheBillBogus) {
// //        return "not able to be calculated.";
// //    } else if (parseFloat(tipPercentage) < 0) {
// //         return "not able to be calculated.";
// //     }
// //     let tipDecimal = parseFloat(tipPercentage/100);
// //     let result = parseFloat(billTotal)*parseFloat(tipPercentage);
// //     return result.toLocaleString("en-US", {style: "currency", currency: "USD"});
// // };
// //
// // //let myTip = calculateTip("banana", 145.67);
// //
// // const myTotal = prompt("What was your bill total?");
// // const myTipPercentage = prompt("What percentage of a tip do you want to leave?");
// //
// // const myTip = calculateTip(myTipPercentage, myTotal);
// //
// // console.log(`The tip is ${myTip}`);
//
//
// //TERNARY OPERATOR (simple if/else)
//
// // const isLoggedIN = true;
// //
// // let message;
// // if(isLoggedIn) {
// //     message = "Welcome back!";
// // } else {
// //     message = "Please log in.";
// // }
//
// // let message = isLoggedIn ? "Welcome Back!" : "Please log in."
// //
// // console.log(messasge);
//
// //let pizzaPreference = prompt("What kind of pizza do you like?");
//
// // switch(pizzaPreference.toLowerCase()) {
// //     case "cheese":
// //         console.log("I love cheese pizza too!");
// //         break;
// //     case "hawaiian":
// //         console.log("Sweet and salty FTW!");
// //         break;
// //     case "supreme":
// //         console.log("Why choose when you can put everything?");
// //         break;
// //     case "pepperoni":
// //         console.log("So do my kids.");
// //     default:
// //         console.log("Please make a good choice.");
// // }
//
// //Switch Disadvantage
// // const numOfUsers = 147;
// //
// // switch (numOfUsers) {
// //     case 1:
// //     case 2:
// //     case 3:
// //     ...
// //     case 140:
// //         console.log("We need more users!");
// //         break;
// // }
//
