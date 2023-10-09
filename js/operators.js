// Exercises
//
// For each of the following code blocks, read the expression and predict what the result of evaluating it would be, then execute the expression in the Chrome console.
//
// '1' + 2 -> string 12 but not numerical "12"
console.log('1' + 2);
// "" ** 4 -> string concatenated together 4 times which isn't possible; answer gave "0" (meaning false?)
console.log("" ** 4);
// typeof '1' + 2 -> string2
console.log(typeof '1' + 2);
// 6 % 4 -> 2 because it is the remainder
console.log(6 % 4);
// '3 + 4 is ' + 3 + 4 -> '3 + 4 is '7; RIP 3 + 4 is 34 bc the 3 and 4 were concat with the string
console.log('3 + 4 is ' + 3 + 4);
// // how could you make this produce the correct output?
console.log('3 + 4 is ' + (3 + 4));
// 0 < 0  -> false
console.log(0 < 0);
// 'false' == false -> true; RIP its false bc they are not equal in value
console.log('false' == false);
// true == 'true' -> true; RIP still false
console.log(true == 'true');
// 5 >= -5  -> true
console.log(5 >= -5);
// !false || false -> true bc in OR operator if only 1 is true, all are true
console.log(!false || false);
// true || "42"  -> boolean OR string...undefined?; RIP it's true.
console.log(true || "42");
// !true && !false -> false AND true = false bc in AND operator both must be true to equal true
console.log(!true && !false);
// 6 % 5 -> 1 bc it is the remainder
console.log(6 % 5);
// 5 < 4 && 1 === 1 -> false bc first condition is false and 2nd condition is true
console.log( 5 < 4 && 1 === 1);
// typeof 'codeup' === 'string' -> true bc the typeof 'codeup' IS a string
console.log(typeof 'codeup' === 'string');
// 'codeup' === 'codeup' && 'codeup' === 'Codeup' -> false bc the 'C' is not the same as 'c'
console.log('codeup' === 'codeup' && 'codeup' === 'Codeup');
// 4 >= 0 && 1 !== '1' -> true
console.log(4 >= 0 && 1 !== '1');
// 6 % 3 === 0 -> true
console.log(6 % 3 === 0);
// 5 % 2 !== 0 -> true
console.log(5 % 2 !== 0);