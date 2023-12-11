/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

async function calculateTime(t1, t2, t3) {
  const promises = [wait1(t1), wait2(t2), wait3(t3)];
  const time = Date.now();

  // Use Promise.all to wait for all promises to resolve
  await wait1(t1);
  await wait2(t2);
  await wait3(t3);

  // Calculate the total time inside the then block
  const totalTime = Date.now() - time;

  return totalTime;
}

module.exports = calculateTime;
