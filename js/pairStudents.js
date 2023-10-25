//how to randomly shuffle an array and make pairs
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Used like so
var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);
const createPairs = (arr) => {
    let pairSize = 2;
    const pairs = [];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    for (let i = 0; i < arr.length; i += pairSize) {
        const pair = arr.slice(i, i + pairSize);
        pairs.push(pair);
    }
    if (arr.length % 2 !== 0) {
        const extraStudent = arr.pop();
        pairs[Math.floor(Math.random() * pairs.length)].push(extraStudent);
    }

    return (pairs);

};

const students = [
    "Amanda",
    "Lauren",
    "Bianca",
    "Cameron",
    "Chris",
    "Dany",
    "David",
    "Diana",
    "Drew",
    "Evan",
    "Hassan",
    "Jack",
    "Jason",
    "John",
    "Johnathan",
    "Jordan",
    "Joshua",
    "Katie",
    "Luis",
];

console.log(createPairs(students));