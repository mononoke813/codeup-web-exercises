//console.log("Hello from external JavaScript.");

//alert("Welcome to my Website!");

//let userColor = prompt("What is your favorite color?");
//alert(`${userColor} is my favorite color too!`);

/* Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
Use an alert to show the results of each problem.
Finally, commit the changes to your git repository, and push to GitHub.*/

//You have rented some movies for your kids:
// The little mermaid (for 3 days),
let rentLittleMermaid = prompt(`How many days do you want to rent 'The Little Mermaid' for?`);
alert(`You have chosen for ${rentLittleMermaid} days.`);
// Brother Bear (for 5 days, they love it), and
let rentBrotherBear = prompt(`How many days do you want to rent 'Brother Bear' for?`);
alert(`You have chosen for ${rentBrotherBear} days.`);
// Hercules (1 day, you don't know yet if they're going to like it).
let rentHercules = prompt(`How many days do you want to rent 'Hercules' for?`);
alert(`You have chosen for ${rentHercules} days.`);
// If price for a movie per day is $3, how much will you have to pay?
alert(`The cost for a movie per day is $3.`)

let costPerMovie = 3;

let costMermaid = rentLittleMermaid*costPerMovie;
let costBear = rentBrotherBear*costPerMovie;
let costHercules = rentHercules*costPerMovie;

let totalCost = costMermaid + costBear + costHercules;


function formatCostWithCurrency() {
let costFormat = {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            }
let dollarCost = new Intl.NumberFormat("en-US", costFormat);
totalCost = dollarCost.format(totalCost);
}
formatCostWithCurrency();

alert(`The total cost will be: ${totalCost}.`);

/* Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
Use an alert to show the results of each problem.
Finally, commit the changes to your git repository, and push to GitHub.*/

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,they pay you a different rate per hour.
// Google pays $400,
let googlePay = prompt(`How much will Google pay per hour?`);
alert(`Payment will be: $${googlePay}/hour.`);
// Amazon $380, and
let amazonPay = prompt(`How much will Amazon pay per hour?`);
alert(`Payment will be: $${amazonPay}/hour.`);
// Facebook $350.
let facebookPay = prompt(`How much will Facebook pay per hour?`);
alert(`Payment will be: $${facebookPay}/hour.`);

// You worked 10 hours for Facebook,
let hoursWorkFacebook = prompt(`How many hours did you work with Facebook?`);
alert(`You worked ${hoursWorkFacebook} hours.`);
// 6 hours for Google and
let hoursWorkGoogle = prompt(`How many hours did you work with Google?`);
alert(`You worked ${hoursWorkGoogle} hours.`);
// 4 hours for Amazon.
let hoursWorkAmazon = prompt(`How many hours did you work with Amazon?`);
alert(`You worked ${hoursWorkAmazon} hours.`);

// How much will you receive in payment for this week?
let paymentFacebook = facebookPay*hoursWorkFacebook;
let paymentGoogle = googlePay*hoursWorkGoogle;
let paymentAmazon = parseFloat(amazonPay*hoursWorkAmazon); //parseFloat bc payment could be 2 after decimal

let totalPayWeek = paymentAmazon + paymentGoogle + paymentFacebook;

function formatPayWithCurrency() {
    let payFormat = {
             style: 'currency',
             currency: 'USD',
             minimumFractionDigits: 2,
             }
             let dollarPay = new Intl.NumberFormat("en-US", payFormat);
 totalPay = dollarPay.format(totalPayWeek);
}
formatPayWithCurrency();

alert(`You will be paid: ${totalPay} in total this week.`);