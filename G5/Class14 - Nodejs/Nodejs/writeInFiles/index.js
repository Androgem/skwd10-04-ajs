const fs = require("fs");
let myFirstFile = "firstFile.txt";

function addTextToFile(file, text) {
  fs.writeFileSync(file, text, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File has been saved");
  });
}

const appendText = (filePath, text) => {
  fs.appendFileSync(filePath, text);
};

addTextToFile(myFirstFile, "Our first text written in a file from node js =)");
appendText(myFirstFile, "\nHello Bro =)");
// let secondFile = "main.js";
// addTextToFile(secondFile, "console.log('Hello World')");

function printNumbers(number) {
  let numbersToPrint = ``;

  for (let index = 0; index <= number; index++) {
    numbersToPrint += `${index} \n`;
  }

  return numbersToPrint;
}

appendText("numbers.txt", printNumbers(20));

function readFromFile(file) {
  return fs.readFileSync(file, { encoding: "utf-8" });
}

console.log(readFromFile("../sentence.txt"));

console.log(readFromFile("../dummy.json"));

const jsonFile = readFromFile("../dummy.json");
console.log(JSON.parse(jsonFile));
