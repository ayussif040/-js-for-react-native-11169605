// arrayManipulation.js

function processArray(arr) {
    // Check if the input is a valid array
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    // Process the array and return the new array
    return arr.map(num => {
        if (typeof num !== 'number') {
            throw new Error('Array must contain only numbers');
        }
        return num % 2 === 0 ? num ** 2 : num * 3;
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); // Output: [3, 4, 9, 16, 15]
 