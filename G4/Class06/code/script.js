// normal if else statement

function isPositive(number) {
    if(number > 0) {
        return "number is positive";
    } else {
        return "number is negative";
    }
}

console.log(isPositive(5));

let isPositiveArrow = number => number > 0 ? "number is positive" : "number is negative";
console.log(isPositiveArrow(-5));

// storing function as a variable 
let sayHello = function(name) {
    console.log(`Hello there ${name}`);
}

sayHello("Petre");

//storing functions in an array
let numberStateFunctions = [
    number => number > 0 ? "number is positive" : "number is negative",
    number => number % 2 === 0 ? "number is even" : "number is odd",
    number => number >= 0 ? number.toString().length : number.toString().length - 1

]

console.log(numberStateFunctions[0](52));
console.log(numberStateFunctions[1](52));
console.log(numberStateFunctions[2](-52));

// using function as an argument

function calculator(calculateFunc, number1, number2) {
    return calculateFunc(number1, number2);
}

function sum(input1, input2) {
    return input1 + input2;
}

function difference(input1, input2) {
    return input1 - input2;
}

let result = calculator(difference, 120, 50);
console.log(result);

let resultAdd = calculator(sum, 120, 50);
console.log(resultAdd);

// with self invoked function

// function mult(num1, num2) {
//     return num1 * num2;
// }

let result2 = calculator(function(number1, number2) {
    return number1 * number2;
}, 2, 10)

console.log(result2);

// with self invoked function and arrow function
let resultArrow = calculator((number1, number2) => number1 / number2, 10, 2);
console.log(resultArrow);


// function with properties and methods

let sayHello2 = function(name) {
    return `Hello there ${name}`;
}

sayHello2.defaultName = "Bob";
console.log(sayHello2(sayHello2.defaultName));

sayHello2.differentGreeting = function(name) {
    return `Hi ${name}`
}

console.log(sayHello2.differentGreeting(sayHello2.defaultName));

// function arguments

function longestString() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[2]);
}

longestString("str1", "str2", "str3", "str4");