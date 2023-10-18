//IIFE
(() => {
    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"];
    console.log(daysOfTheWeek);

    // let myName = "lauren";
    // let myNameUpper = myName.toUpperCase();
    // console.log(`My name in all upper case!: ${myNameUpper}`);

    //PUSH
    daysOfTheWeek.push("Friday", "Saturday");
    console.log(`Pushing Friday and Saturday to the END of the list: ${daysOfTheWeek}`);

    //UNSHIFT
    daysOfTheWeek.unshift("Sunday");
    console.log(`Unshifting Sunday to ADD the START of the list: ${daysOfTheWeek}`);

    //POP
    daysOfTheWeek.pop();
    console.log(`Popping to REMOVE the last item in the array from the END of the list: ${daysOfTheWeek}`);

    //SHIFT
    daysOfTheWeek.shift();
    console.log(`Shifting to REMOVE the first item in the array from the START of the list: ${daysOfTheWeek}`);

    //LOCATING ELEMENTS IN ARRAY
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "red"];
    const greenIndex = colors.indexOf("green");
    console.log("Green index => ", greenIndex);

    //if it doesn't find it
    const magentaIndex = colors.indexOf("magenta");
    console.log("Magenta index => ", magentaIndex);
    if (magentaIndex >= 0) {
        console.log("Found magenta!");
    } else {
        console.log("No magenta found.");
    }

    //start at beginning
    const redIndexStart = colors.indexOf("red");
    console.log("Red index start =>", redIndexStart);

    //start at end
    const redIndexLast = colors.lastIndexOf("red");
    console.log("Last red index => ", redIndexLast);

    // //jumping ahead to filter arrays
    // const allRedValues = colors.filter((color) => {
    //     return color === "red";
    // });
    // console.log(allRedValues);

    //SLICING
    const lastTwoColors = colors.slice(colors.length - 2, colors.length);
    console.log(lastTwoColors);

    //REVERSING
    const reverseColors = colors.reverse();
    console.log(reverseColors);

    //SORTING
    console.log(`Colors array before sorting ${colors}`);
    colors.sort();
    console.log(`Colors array after sorting ${colors}`);
    colors.sort().reverse();
    console.log(colors);

    //SPLITING AND JOINING
    let namesString = "Joe, Bob, Sally";
    const namesArray = namesString.split(",");
    console.log(namesArray);

    let backToSting = namesArray.join(' |'); //default = ',' but make it sensible with some sort of ', ' or ' |'
    console.log(backToSting);


    //EXTRA EXAMPLE
    let url = "https://codeup.edu/";
    let domain = url.split("/")[2]; //the [2] is used from the array it makes to pull the precise item that is wanted
    console.log(domain);


})();