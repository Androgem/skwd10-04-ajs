// ## Exercise 1

// Make 3 functions:
// 1. Function that takes a number through a parameter and returns how many digits that number has
// 2. Function that takes a number through a parameter and returns if its even or odd
// 3. Function that takes a number through a parameter and returns if its positive or negative

// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console. 
// #### Ex: 
// **Code:** getNumberStats(-25);
// **Console:** 2 Digits, Odd, Negative

function getDigits(number){
    if(number < 0){
        return number.toString().length -1;
    }
    return number.toString().length;
}

function oddOrEven(number){
    if(number === 0){
        return `zero is not even or odd`;
    }
    return  number % 2 === 0 ? "even" : "odd";
}

function positiveOrNegative(number){
    return number < 0 ? "negative" : "positive";
}

function getStats(mainNumber){
    return `Number: ${mainNumber},
    Digits: ${getDigits(mainNumber)},
    ${oddOrEven(mainNumber)},
    ${positiveOrNegative(mainNumber)}`
}

console.log(getStats(25));
console.log(getStats(0))