console.log("Testing");

//console.log(2 + 2);

/*let easyMath = 2 + 2;
console.log(easyMath);*/

//let x = 1;
/*x+=1;
console.log(x);
//console.log(x); still equals 2
x = x +1; //this will cause x to increase by 1
*/

//Unary Operators (incrementers/decrementers
/*let y = 5;
y++; //6
y--; //5


console.log(y);
*/

/*
let pi = 3.14;
console.log(pi);

//let piString = "" + pi;  //turn a number into a string - hacky way
let piString = pi.toString(); //using the "method" to turn # to string
console.log(piString);

let numOfStudents = "19";
numOfStudents = parseInt(numOfStudents); //using a "function" to turn string to #
//parseInt() vs. parseFloat(): parseInt() will return an integer value ALWAYS and is not good for "1e5" or "3.14" BUT
//parseFloat() will return the true value bc it understands the "e" and the . are part of the answer/equation
console.log (numOfStudents);
*/

/*
let bankAccount = "19.274637";
console.log("Original Value =>", bankAccount);
bankAccount = parseFloat(bankAccount);
console.log("parseFloat =>", bankAccount);
bankAccount = parseInt(bankAccount);
console.log("parseInt =>", bankAccount);
bankAccount = bankAccount.toFixed(2); //takes number to 2 # after decimal
console.log("toFixed =>", bankAccount);
*/

/*
let x = "20";
let xNumber = Number(x); //another way to take from string to number

console.log(xNumber);
*/
/*
let x = "griffin";
let xNumber = Number(x); //NaN =


console.log(xNumber);

let isEqual = NaN === NaN;
console.log(xNumber);
*/

/*
let isEqual = xNumber === NaN;
console.log("NaN strict comparison =>", isEqual);
let isReallyEqual = isNaN(xNumber);
console.log("isNaN function => ", isReallyEqual);

// truthy/falsey : how things can be interpreted AS but not actually be strictly Boolean
let emptyString = "" == false; //loose comparison "is an empty string false?"
console.log(emptyString);
let zero = 0 == false; // in MySQL there is no Boolean, BUT there is 1 and 0 for truthy and falsey
console.log(zero);
let noValue;
console.log(noValue); // variable created BUT undefined bc no value assigned sooo "undefined" (or falsey)
let noData = null; //null is the INTENTIONAL absence of data

if(!emptyString) {
    console.log("YUP, IT'S TRUTHY");
}

if(noValue === undefined) {
    console.log("YUP noValue is truthy!");
}

let middleName = "Michelle";
if (middleName) {
    console.log("YUP midName is truthy!");
}
*/

//String Methods

let username = "Justino (Nova)";
let guildName;

let nameLength = username.length;
console.log("nameLength =>", nameLength); //counts ALL chara and numbers @1
let guildNameStart = username.indexOf("(");
console.log("guildNameStart =>", guildNameStart); //indexOf begins at 0 (think like Dewy decimal sys 000.543SAN)
let guildNameEnd = nameLength -1;
guildName = username.substring(guildNameStart +1, guildNameEnd);
console.log(guildName);

username = username.replace("(" + guildName + ")", "").trim(); //chaining methods is allowed :D
console.log(username);


//Template Literals (Strings)
let channelMessage = "username from the guildName guild has logged in.";
//channelMessage = username + " from the " + guildName + " guild has logged in.";
channelMessage = `${username} from the ${guildName} guild has logged in.` //`` does not req. the use of "" to apply all of the message
console.log(channelMessage);


