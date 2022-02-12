// function outer() {
//   let counter = 0;
//   function incrementCounter() {
//     counter++;
//   }
//   return incrementCounter;
// }

// const myNewFunction = outer();
// myNewFunction();
// myNewFunction();

/* 
** CHALLENGE 
 Write a function once that accepts a callback as input and returns
  a function. When the returned function is called the first time,
  it should call the callback and return that output.
  If it is called any additional times, instead of calling the callback
  again it will simply return the output value from the first time it was called.
*/

// function addByX(x) {
//   function add(num) {
//     return x + num;
//   }
//   return add;
// }

// function once(cb) {
//   let counter = 0;
//   let result;
//   function callCb(num) {
//     counter++;
//     return counter < 2 ? (result = cb(num)) : result;
//   }
//   return callCb;
// }

// const addByTwo = addByX(2);

// const onceFunc = once(addByTwo);

// // UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4)); //should log 6
// console.log(onceFunc(10)); //should log 6
// console.log(onceFunc(9001)); //should log 6

/**
 * -------------
 * CHALLENGE END
 * -------------
 */

// function display(data) {
//   console.log(data);
// }

// const featureData = fetch('https://twitter.com/tweets/1');
// featureData.then(display);

// console.log('Me First!');

// function display(data) {
//   console.log(data);
// }

// function printHello() {
//   console.log('Hello');
// }

// function blockFor300ms() {
//   /*
//    * blocks js thread for 300ms
//    */
// }

// setTimeout(printHello, 0);

// const featureData = fetch('https://twitter.com/tweets/1');
// featuredData.then(display);

// blockFor300ms();

// console.log('Me first!');

// let p = new Promise((resolve, reject) => {
//   let a = 3;
//   if (a == 3) {
//     resolve('Success');
//   } else {
//     reject('Failed');
//   }
// });

// p.then((message) => {
//   console.log('This is in the THEN ' + message);
// }).catch((message) => {
//   console.log('This is in the REJECT ' + message);
// });

/**
 * Challenge 1
 * Let's start by reviewing asynchronous functions!
 * Using setTimeout, print the string 'Hello!' after 1000ms.
 */

function sayHello() {
  function printHello() {
    console.log('Hello');
  }
  setTimeout(printHello, 1000);
}

sayHello();

/*
 * Challenge 1 END
 */

/**
 * Challenge 2
 * Create a promise.
 * Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms,using setTimeout.
 * Print the contents of the promise after it has been resolved by passing console.log to .then
 */

let promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
});

function displayResolve() {
  console.log('Resolved!');
}

promise.then(displayResolve);

/*
 * Challenge 2 END
 */

/**
 * Challenge 3
 * Create another promise.
 * Now have it reject with a value of "Rejected!" without using setTimeout.
 * Print the contents of the promise after it has been rejected by passing console.log to .catch
 */

let promise2 = new Promise((resolve, reject) => {
  reject();
});

function displayRejected() {
  console.log('Rejected!');
}

promise2.catch(displayRejected);

/*
 * Challenge 3 END
 */
