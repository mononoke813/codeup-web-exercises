let a = 1;
console.log(a); //1
let b = a++;
console.log(b); //1
let c = ++a;
console.log(c); //3
// what is the value of a, b, and c? a = 1; b = 1; c = 3

let d = "hello";
let e = false;
//
let increD = d++; //NaN bc d is a string and + an increment and you cannot mathematically add a string and a number to get a number
let increE = e++; //0

console.log(increD);
console.log(increE);

let perplexed; // perplexed is undefined (no value is assigned)
let plexAdd = perplexed + 2;

console.log(plexAdd + 2); //NaN bc perplexed does not have a value and mathematically you cannot have a value for undefined+number

let price = 2.7;
let fixedPrice = price.toFixed(2); //2.70

console.log(fixedPrice);

let priceString = "2.7";
let fixedString = parseFloat(priceString).toFixed(2); //the let is attempting to define twice, therefore it will give an error code bc you cannot declare a varible twice; when changed, still doesn't work bc a string still exists; add parseFloat(string).toFixed(#) and happy
console.log(fixedString);

/*
let cost = "2.7";
cost.toFixed(2);
console.log(cost.toFixed(2)); //undefined bc the toFixed is only operable for data type: "number"
*/

//isNaN(0); false
let nan39 = isNaN(0); //T o F: 0 NaN? F
console.log(nan39);

//isNaN(1); false
let nan43 = isNaN(1); //T o F: 1 NaN? F
console.log(nan43);

//isNaN(""); false :(
let nan47 = isNaN(""); //T o F: "" NaN? F bc empty string has no char meaning 0 and 0 = false
console.log(nan47);

//isNaN("string"); true
let nan51 = isNaN("string");
console.log(nan51);

//isNaN("0"); false :(
let nan55 = isNaN("0"); //T o F: "0" NaN? F bc string has a num and num = num
console.log(nan55);

//isNaN("1"); false :(
let nan59 = isNaN("1"); //T o F: "1" NaN? F bc string has a num and num = num
console.log(nan59);

//isNaN("3.145"); false :(
let nan63 = isNaN("3.145"); //T o F: "3.145" NaN? F bc string has num and num = num
console.log(nan63);

//isNaN(Number.MAX_VALUE); false
let nan67 = isNaN(Number.MAX_VALUE); //T o F: Number.MAX_VALUE NaN? F bc it will produce a numerical value
console.log(nan67);

//isNaN(Infinity); false :(
let nan71 = isNaN(Infinity); //T o F: Infinity NaN? ****I DON'T KNOW****
console.log(nan71);

//isNaN("true"); true
let nan75 = isNaN("true");
console.log(nan75);

//isNaN(true); false
let nan79 = isNaN(true);
console.log(nan79);

//isNaN("false"); true
let nan83 = isNaN("false");
console.log(nan83);

//isNaN(false); false
let nan87 = isNaN(false);
console.log(nan87);

// to illustrate why the isNaN() function is needed:
NaN == NaN


//!true - false

//!false - true

//!!true - true

//!!false - false

//!!0 - false

//!!-0 - *false? bc i guess a - doesn't matter

//!!1 - true

//!!-1 - true

//!!0.1 - true?

//!!"hello" - true?

//!!"" - false

//!!'' - false

//!!"false" - true

//!!"0" - true?


let sample = "Hello Codeup";
let length = sample.length; //12
console.log(length);

let upperCase = sample.toUpperCase();
console.log(upperCase);

sample = sample + " Students!"; //shorthand: sample += " Students!"
console.log(sample);

sample = sample.replace("Students", "Class");
console.log(sample);

let indexOfLowercaseC = sample.indexOf("c");
console.log(indexOfLowercaseC); //outputs -1

let word = sample.indexOf("C");
console.log(word); //outputs 6

console.log(sample.substring(word, length));


/*You have rented some movies for your kids: The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet
if they're going to like it). If price for a movie per day is $3,
how much will you have to pay?
 */

let movieCost = 3; // using "const" might be a better choice than "let" bc these num will not change/will not need reassigning
let lilMer = 3;
let broB = 5; //adding a variable that individually finds the product of the movie*days rented in case customer wants to know total price
let herc = 1;
let days = lilMer + broB + herc;// one way to add $: totalCost = `$${totalCost.toFixed(2)}; **instructor notes
//totalCost = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

console.log(movieCost*days);

/*Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.*/

let goo = 400; //make const
let zon = 380;
let face = 350;
let week = 10*face + 6*goo + 4*zon; // make individual equation for each
console.log(week); //tie them all together in another equation here



let username = 'codeup';
let password = 'notastrongpassword';

let long = username.length;
let passLong = password.length;

let passMin = passLong >= 5;
console.log(passMin);
let notSame = !password.toLowerCase().includes(username.toLowerCase()); //change to .toLowerCase to check bc C or c could be used
console.log(notSame);
let nameMax = long <= 20;
console.log(nameMax);
let nameNoWhite = username.includes(" "); //username.trim() !== username
console.log(nameNoWhite);
let passNoWhite = password.includes(" "); //password.trim() !== password
console.log(passNoWhite);

//const validPassword = **REFER TO PROF NOTES TO SEE CORRECTED VERSION AND AMAZING AWESOMENESS

/* consider the "EASY PATH",
remember to make variables (SHOW YOUR WORK)
use Google to search for easier ways/other methods not shown in class - i.e. LEARN
 */

//Alert

//Confirm

//Prompt
//let showMeTheMoney = prompt("Where is my money?"); //prompt with text box

//alert(`Your answer: ${showMeTheMoney}`); //pop up with notice of what their answer was...

//Exercies







