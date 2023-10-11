(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    const names = ["Apple", "Blue Ivy", "Rocket", "North"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    const numberOfNames = names.length;
    console.log(`There are a total of ${numberOfNames} names.`);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i = 0; i < names.length; i++) { //the code only worked once I listed names.length
        const namePlacement = [i];
        const listAllNames = names[i];
        console.log(`The name at index ${namePlacement} is: ${listAllNames}.`);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach((name, index) => {
        console.log(`This is their name: ${name} at index ${index}.`)

    });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    const firstArrayItem = (array) => {
        //i want a listed array where it returns just the first item in the array
        if(array.length > 0) {
            return array[0];
        }
        const first = firstArrayItem();
        console.log(first);
    }

    const secondArrayItem = (array) => {
        if(array.length > 0) {
            return array[1];
        }

        const second = secondArrayItem();
        console.log(second);
    }

    const lastArrayItem = () => {
        if(array.length > 0) {
            return array[array.length - 1];
        }

        const last = lastArrayItem();
        console.log(last);
    }

})();