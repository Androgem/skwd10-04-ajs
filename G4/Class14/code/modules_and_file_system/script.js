// let num1 = 2;
// let num2 = 3;

// console.log(num1 + num2);

const saySomething = require('./say');
const texService = require('./txtService')

// console.log(saySomething)
// console.log(saySomething.hello("Petre"));
// console.log(saySomething.bye("Petre"));

texService.addText("Hello, this is the first line");
texService.appendText("\nThis is another line of text");
// texService.addText("nov tekst");
console.log(texService.readText());