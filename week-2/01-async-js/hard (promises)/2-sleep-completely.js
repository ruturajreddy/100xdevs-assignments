/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  let time = Date.now();

  while (Date.now() - time < seconds * 1000) {}
}

console.log("before");
sleep(3);
console.log("after");
