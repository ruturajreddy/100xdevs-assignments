/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxNum = numbers[0];
    for ( x=0; x<numbers.length; x++ ) {
        if ( maxNum < numbers[x] ) maxNum = numbers[x];
    }
    return maxNum;
}

module.exports = findLargestElement;
