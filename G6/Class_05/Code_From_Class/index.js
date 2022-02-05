// Declaration
var number11;
var syHi2;

function getFullName(firstName, lastName = "Kabov") {
  return `${firstName} ${lastName}`;
}

// document.addEventListener("click", function () {
//   getFullName("Goce", "Kabov");
// });
// getFullName("Goce", "Kabov");

// let first = "Angel";
// let last = "Mitrov";
// getFullName(first, last);

// if (getFullName("Goce", "Kabov") === "Goce Kabov") {
//   console.log("Yeahhhhh");
// }

//WRONG
// if (getFullName === "Goce Kabov") {
//     console.log("Yeahhhh 2")
// }

// let result = getFullName("Goce", "mitrov");

//Anonymous function
// let fullName = function (firstName, lastName) {
//   console.log(fullName);
// };

// document.addEventListener("click", function () {
//     console.log("clicked")
// })

// Arrow Functions

let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
let sumTwoNumbersAndAdd5 = (first, second) => {
  let sum = first + second;
  let result = sum + 5;
  return result;
};
let result = fullName("Goce", "Kabov");
// console.log(result);

// document.addEventListener("click", () => {});

// if (3 == 2) console.log("Equal");
// console.log("Outside");

// Self invoked functions (IIFE)

// (function (fullName) {
//     let name = "GOce";
//   console.log(fullName);
// })("Goce Kabov");

// ((fullName) => {
//   console.log(fullName);
// })("Angel Mitrov");

function sumTwoNumbers(first, second) {
  return first + second;
}

let firstNumber = 10;
let secondNumber = "20";

// let result1 = sumTwoNumbers(
//   firstNumber,
//   ((number) => parseInt(number))(secondNumber) // 20
// );
// console.log(result1);

//RECURSION

// function getFactorial(number) {
//   if (number <= 0) {
//     return 0;
//   }
//   //5
//   if (number == 1) {
//     return 1;
//   }
//   return number * getFactorial(number - 1); // 5 * 4 * 3 * 2 * 0
// }

// let result2 = getFactorial(-10);
// console.log(result2);

// function sumTo(number) {
//   if (number == 0) {
//     return 0;
//   }

//   return number + sumTo(number - 1);
// }

// let sumTo = (number) => {
//   if (number === 0) {
//     return 0;
//   }
//   return number + sumTo(--number);
// };
// console.log(sumTo(5));

// console.log(sumTo(5));

// SCOPES

// var lastName = "Kabov";
let number1 = 100;

// function scope(firstName) {
//   let number = 10;
//   console.log(number1);
//   if (firstName === "Goce") {
//     console.log(number);
//     console.log(number1);
//     var lastName = "Kabov";
//   }

//   function scope1() {
//     let number2 = 111;

//     function scope2() {
//       var number3 = 200;
//       if (true) {
//         var number4 = 100000000;
//       }
//     }
//   }
// }

sayHi();

// console.log(firstName);
// scope("Goce");

if (true) {
  // var firstName = "Goce";
  let firstName = "Goce";
}

// console.log(firstName);

// HOISTING
console.log(number11);

var number11 = 1000;

function sayHi() {
  console.log("Hi");
}

// syHi2();

var syHi2 = function () {
  console.log("HI 2");
};

let number45;

console.log(number45);
