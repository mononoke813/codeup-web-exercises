//function declaration
//function isCoding(name) { // inside the () is a parameter - NOT an argument
 //   console.log(`${name} loves coding!`);
//}

// whenever you ENVOKE the function() and fill in the ()it is an argument
/*isCoding("Isaac"); //reusing the function requires just creating new arguments
isCoding("Lauren");*/


// anonoymous function expression
//const sayHello = function (user) {
//    console.log(`Sup ${user}`);
//};
//sayHello("friend")

//Arrow functions expression ***use this one
/*const sayHello = (username) => {
    console.log(`Doing great ${username}`);
};

sayHello("Jason");*/

//declare first, , newer syntax
/*const isCoding = (name) => {
  console.log(`${name} loves coding!`);
};

isCoding("Lauren");*/

//console.log = literally just holler where the thing is (kid analogy)
//return = literally go get that thing and bring it back to me (kid analogy)

//const isCoding = (name) => {
//    return `${name} loves coding!`;
//};

//const whatDoYouLove = isCoding("Lauren");

//console.log(whatDoYouLove);

const user = "Isaac";
const preference = " hates coding.";
const isCoding = (name, statement) => {
    return `${name}, ${statement}`;
};

const whatYouLike = isCoding(user, preference);

console.log(whatYouLike);