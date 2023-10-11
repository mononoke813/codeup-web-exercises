console.log("loops!");

//FOR LOOP
//**do syntax first for() { }, then fill in

// for(/*initializer*/ ; /*condition*/ ; /*increments*/) {
//     /* the code tht will repeat */
// }


// for(let i = 0; i <= 5; i++) {
//     console.log(`The code ran at index ${i}`);
// }


//WHILE LOOP

/*
while(condition) {

}
*/

// let index = 0;
// while(index < 10) {
//     console.log(`The code ran at index ${index}`);
//     index++;
// }
//
// let favPizza = prompt(`What is your favorite pizza?`);
// while(favPizza !== "pepperoni") {
//     favPizza = prompt(`WRONG ANSWER! TRY AGAIN!`);
// }
// alert(`That's what I thought. That's a great choice!`);


//DO-WHILE LOOP

/*
do {
    //body
} while(condition)

*/

// let myNumber = 0;
//
// do {
//     console.log(myNumber);
//     myNumber++;
// } while( myNumber <= 10);



const buildRow = (num) => {
    let result = "";
    for(let i = 0; i < num; i++) {
        result += "*";
    }
    result += "\n"; //the += is needed otherwise it will just return empty space, not * pyramid
    return result;
};

const buildPyramid = (rows) => {
    let result = "";
    //first for loop
        for (let i = 1; i <= rows; i++) {
            result += buildRow(i);
            //result += "*".repeat(i);
        }
    return result;
};

let pyramid = buildPyramid(10);
console.log(pyramid);

// for (let i = 0; i <= 10; i++) {
//     if(i === 5) {
//         continue; //skips the iteration while 'break' will end it
//     }
//     console.log(`The current index is ${i}`);
// }
console.log("hello")