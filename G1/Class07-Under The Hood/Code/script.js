// function multiplyBy2(inputNumber) {
//   const result = inputNumber * 2;
//   return result;
// }

// const output = multiplyBy2(7);
// const newOutput = multiplyBy2(10);

// function createFunction() {
//   function multiplyBy2(num) {
//     return num * 2;
//   }
//   return multiplyBy2;
// }

// const generatedFunc = createFunction();
// const result = generatedFunc(3); // 6

// function outer() {
//   let counter = 0;
//   function incrementCounter() {
//     counter++;
//   }
//   incrementCounter();
// }

// outer();

// function outer() {
//   let counter = 0;
//   function incrementCounter() {
//     console.log(counter)
//     counter++;
//   }
//  return incrementCounter;
// }

// const myNewFunction = outer();
// myNewFunction();
// myNewFunction();

// function printHello() {
//   console.log('Hello');
// }

// function blockFor1Sec() {
//   // blocks the javascript thread for 1 sec
// }

// setTimeout(printHello, 0);

// console.log('Me first! :)');

// Challenge 1
// Create a function createFunction that creates and returns a function.
//  When that created function is called, it should print "hello".

function createFunction() {
  function sayHello() {
    return console.log('Hello');
  }
  return sayHello;
}
const challenge1 = createFunction();
// challenge1();

// Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function.
// When that created function is called,
// it should print out the input that was used when the function was created.

function createFunctionPrinter(input) {
  function printer() {
    return console.log(input);
  }
  return printer;
}

const challenge2PrintSample = createFunctionPrinter('sample');
const challenge2PrintHello = createFunctionPrinter('hello');
challenge2PrintHello();
challenge2PrintSample();

// Challenge 3
// Create function addByX that returns a function that will add an input by x
// ----

function addByX(x) {
  function add(y) {
    console.log(x + y);
  }
  return add;
}

const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5
