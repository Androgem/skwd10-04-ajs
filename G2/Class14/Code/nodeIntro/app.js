//IMPORT
const functions = require("./functions")
const txtService = require("./textService")
const fs = require("fs");

console.log(functions.result);
functions.sayHello("Ana");

txtService.addText("Hello SEDC");
//txtService.writeFile("Goodbye now!");
txtService.appendText("\n Goodbye now!");
let res = txtService.readText();
//txtService.readJsonFile();
console.log(res);


