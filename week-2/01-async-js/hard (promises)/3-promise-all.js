/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

console.log("resolving promises...");

function calculateTime() {
  const promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];

  // Use Promise.all to wait for all promises to resolve
  Promise.all(promises)
    .then(function (results) {
      // All promises have resolved
      results.forEach(function (result) {
        console.log(result);
      });

      // Print the total time it took for all promises to resolve
      console.log("Total time:", (Date.now() - time) / 1000, "seconds");
    })
    .catch(function (error) {
      console.error("An error occurred:", error);
    });
}

let time = Date.now();
calculateTime();
