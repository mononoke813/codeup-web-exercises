// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// export default randomNumber;

// CONVERSELY WRITTEN AS:
export const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};