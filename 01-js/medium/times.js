/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
let start = Date.now()
function calculateTime(n) {
    let sum = 0;
    for ( x=0; x<n; x++ ) {
        sum += x;
    }
    return sum;
}
calculateTime(1000000000);
let end = Date.now()
console.log(start, end);
console.log(end-start);
