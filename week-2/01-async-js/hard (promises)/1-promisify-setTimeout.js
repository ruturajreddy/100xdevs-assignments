/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const wait = (n) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`resolved in ${n} seconds`), n * 1000);
  });
};

wait(3)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
