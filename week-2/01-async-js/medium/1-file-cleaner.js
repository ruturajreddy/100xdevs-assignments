const fs = require("fs");

// without Promises
fs.readFile("input-file.txt", "utf-8", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    const stringWithSingleSpaces = data.replace(/\s+/g, " ");
    console.log("File Read Successfully!", data);
    fs.writeFile(
      "input-file.txt",
      stringWithSingleSpaces,
      "utf-8",
      function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log("File Written Successfully!");
        }
      }
    );
    fs.readFile("input-file.txt", "utf-8", function (err, data) {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    });
  }
});

const fs = require("fs").promises;

// with promise
function readAndModifyFile() {
  return fs
    .readFile("input-file.txt", "utf-8")
    .then((data) => data.replace(/\s+/g, " "))
    .then((modifiedString) =>
      fs.writeFile("input-file.txt", modifiedString, "utf-8")
    )
    .then(() => console.log("File Write Successful!"))
    .then(() => fs.readFile("input-file.txt", "utf-8"))
    .then((updatedFile) => console.log("Updated Content", updatedFile))
    .catch((err) => console.error(err));
}

readAndModifyFile();
