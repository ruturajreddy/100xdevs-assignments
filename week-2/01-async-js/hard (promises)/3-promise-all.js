/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function wait1(t1) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), t1 * 1000);
  });
}

function wait2(t2) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), t2 * 1000);
  });
}

function wait3(t3) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), t3 * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const promises = [wait1(t1), wait2(t2), wait3(t3)];
  let time = Date.now();

  return Promise.all(promises)
    .then(function (results) {
      // All promises have resolved
      return Date.now() - time;
    })
    .catch(function (error) {
      console.error("An error occurred:", error);
      throw error;
    });
}

module.exports = calculateTime;
