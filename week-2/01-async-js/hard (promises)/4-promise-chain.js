/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("First promise resolved after 1 second");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Second promise resolved after 2 seconds");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Third promise resolved after 3 seconds");
    }, 3000);
  });
}

function calculateTime() {
  let time = Date.now();
  waitOneSecond()
    .then(function (result) {
      console.log(result);
      return waitTwoSecond();
    })
    .then(function (result) {
      console.log(result);
      return waitThreeSecond();
    })
    .then(function (result) {
      console.log(result);
      console.log(
        `Total time taken to resolve : ${(Date.now() - time) / 1000} seconds`
      );
    });
}

calculateTime();
