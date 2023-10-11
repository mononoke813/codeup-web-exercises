console.log(`Yay! Arrays!`);

const fruits = ["apple", "banana", "strawberry", "blueberry", "watermelon", "mandarian oranges", "schnozberry"];

const firstFruit = fruits[0];
const numOfFruits = fruits.length;

for(let i = 0; i < fruits.length; i++) { //start search at 0 for an array; and so long as i less than the length of the fruit; and repeat for each
    const fruit = fruits[i];

    if(fruit.includes("berry")) {
        console.log(fruit);
    }
    //console.log(fruit);
}


//FOR ... OF LOOP **newer syntax

for(let fruit of fruits) {  //thing that represents the iteration usu. singular form of plural
    if(fruit.includes("berry")) {
        console.log(fruit);
    }
}

//FOR EACH LOOP
//is a method on an array and an alternate to the for loop

fruits.forEach((fruit/*item,*//*index,*/ /*array*/ ) => {  //  () => {}   part is the anon function
    if(fruit.includes("berry")) {
        console.log(fruit);
    }
});

const saladDressings = [
    "Ranch",
    "Caesar",
    "Balsamic Vinaigrette",
    "Italian",
    "Thousand Island",
    "Honey Mustard",
    "Blue Cheese",
    "Greek Dressing",
    "Lemon Vinaigrette",
    "French Dressing",
    "Asian Sesame",
    "Tahini Dressing",
    "Cilantro Lime",
    "Poppy Seed Dressing",
    "Raspberry Vinaigrette",
    "Miso Dressing",
    "Avocado Lime",
    "Red Wine Vinegar",
    "Hummus Dressing",
    "Cider Vinegar & Olive Oil"
];

const numSaladDressings = saladDressings.length;
console.log(`We have ${numSaladDressings} salad dressings!`);

saladDressings.forEach((dressing) => {
    const hasVinaigrette = dressing.toLowerCase().includes("vinaigrette");
    if(hasVinaigrette) {
        console.log(dressing);
    }
});

//FOR EACH LOOP
/* the smallest number of characters in a string is 0 or ""; we want to find the longest dressing name and the dressing lengths need to be bigger than the longestDressing variable; it also needs to loop through ALL the saladDressings to find the one with the longest name...*/

let longestDressing = "";
saladDressings.forEach(function (dressing) {
    if (dressing.length > longestDressing.length) {
        longestDressing = dressing;
    }
});
console.log(longestDressing);


//IIFE = Immediately Invoke Function Expression
//written as function or arrow function (this is the elbows sticking out analogy)
//MAIN METHOD

(() => { //this is an IIFE; all your code will go into here
    //START CODE HERE - just what is running


} )()

 /* expressed as a traditional function

(function(){

})()

*/


// the spread operator (...)
//shorthand

const products = [
    ...fruits,
    ...saladDressings,
    "watermelon"  //add in a "forgotten item"
];

console.log(products);