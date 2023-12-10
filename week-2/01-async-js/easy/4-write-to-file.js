import { error } from "console";
import { writeFile } from "fs";
let content = "added this line to it ";

writeFile("first.txt", content, "utf-8", (err) => {
  if (err) {
    console.error("Error writing to file", error);
  } else {
    console.log("File written successfully!");
  }
});

console.log("Writing in the file...");
