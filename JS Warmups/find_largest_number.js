const findLargestNumber = (arr) => {
    //validate and return early
    let largest = arr[0];

    //start a variable "largest" at 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; //this means let the largest number start at the first position "i" in the array "arr"
        }
        return largest;
    }

};

(() => {
    const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
    //call function and display the result
    const result = findLargestNumber(numbers);
    console.log(result);
})();