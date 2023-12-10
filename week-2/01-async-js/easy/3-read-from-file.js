const fs = require("fs");

fs.readFile("first.txt", "utf-8", function (err, data) {
  console.log(data);
});

let count = 0;
console.log("before the for loop");
for (let x = 0; x < 1000; x++) {
  count++;
}

console.log("after the for loop", count);
