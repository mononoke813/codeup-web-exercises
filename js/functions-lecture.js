/* 10/10 Functions Review Notes

#1. They're named contextually and appropriately
#2. Functions declared at the top of the file (no hoisting - "hoist the colors"
#3. Feed functions by passing arguments, not by global variables (cannot move functions to other files if global var dependent)
#4. Build and return; functions should not be opinionated on what you do with the result, just return it
#5. Validate and return early (i.e. using conditionals to test and console.log)
 */

/*
//context and proper name
const getUsername = (id) {
    //validate
    if(!id) {
        return false;
    }
    //build result
    let result;
    const url = `https://...${id}}`;
    //...

    //return result
    return result;
}
*/


//falsy = null, NaN, undefined, 0, empty sting





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
const sayHello = (username) => {
    console.log(`Doing great ${username}`);
};

sayHello("Jason");

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
const isCoding = (name, statement) => { //STRUGGLING WITH 2 PARAMETERS****
    return `${name}, ${statement}`;
};

const whatYouLike = isCoding(user, preference);

console.log(whatYouLike);


//SCOPING

const globalVar = "I am global";

const tieFighter = () => {
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVari);
};
console.log(globalVar);
console.log(localVari); //doesn't show up global



tieFighter();