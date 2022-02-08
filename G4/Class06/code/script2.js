// --------- higher order functions ----------

// HOF are functions that take another function as a parameter

let numbers = [1, 2, 3, 4, 5];
console.log("original array", numbers);

// ---------------- MAP -------------------
// .map is used to transform elements in array, it returns the SAME number of elements in a new array

console.log("============= MAP ===============");
// normal function that returns new array, each element is multiplied by 2

function multiplyByTwo(array) {
    let newArray = [];

    for (const number of array) {
        newArray.push(number * 2);
    }

    return newArray;
}

let multpiled = multiplyByTwo(numbers);
console.log("multiplied array with normal JS function", multpiled);

// .map wit anonymos function
let multipliedMapAnonymous = numbers.map(function(number) {
    return number * 2;
})

console.log("multiplied array with .map using anonymous function", multipliedMapAnonymous);

// .map with arrow 
// USE THIS!!!

let multipliedMapArrow = numbers.map(number => number * 2);
console.log("multiplied with .map using arrow", multipliedMapArrow);

// ---------------- FILTER -------------------
// .filter is used to filter elements in array, it returns ONLY the elements that passed the condition in a new array

console.log("============= FILTER ===============");

// normal function that returns new array with elements larger than 3

function largerThanThree(array) {
    let newArray = [];

    for (const number of array) {
        if(number > 3) {
            newArray.push(number)
        }
    }

    return newArray;
}

let filteredArray = largerThanThree(numbers);
console.log("filtered array with normal JS function", filteredArray);


// . filter with anonymous

let filterdArrayAnonymous = numbers.filter(function(number) {
    return number > 3;
});

console.log("filtered with .filter using anonymous function", filterdArrayAnonymous);

// .filter with arrow 
// USE THIS!!!

let filterdArrayArrow = numbers.filter(number => number > 3);
// let filterdArrayArrow = numbers.filter(number => number > 3 && number < 5);
console.log("filtered with .filter using arrow function", filterdArrayArrow);

// .reduce - return the sum of all the elements in the array

let sumReduce = numbers.reduce((total, number) => total += number);
console.log("sum of elements in an array with .reduce", sumReduce);

// console.log("original array", numbers);


console.log("============= CHAINING ===============");

let result = numbers
                .filter(number => number > 3)
                .map(number => number + 5)
                .reduce((num1, num2) => num1 + num2);

console.log("result of chaining", result);


// ------------------------ FOREACH ----------------------------
// runs a code for every element without any result in return
console.log("============= FOR EACH ===============");

numbers.forEach(number => console.log(number + 3));
numbers.forEach(num => console.log(num))

numbers.forEach((number, index) => console.log(index, number))

let sortedNums = numbers.sort();
console.log("sorted array", sortedNums);

let numbersDescending = numbers.sort((f, s) => s - f);
console.log("sorted array - DESCENDING", numbersDescending);

let numbersAscending = numbers.sort((f, s) => f - s);
console.log("sorted array - ASCENDING", numbersAscending);

// copy an array

const newNumbers = numbers;
console.log("new numbers", newNumbers);
console.log("original numbers", numbers);

console.log("sorting!!")
newNumbers.sort((f, s) => s - f);
console.log("new numbers", newNumbers);
console.log("original numbers", numbers);
// we do NOT make a copy of the array numbers in newNumbers. We just pass a reference.
// bad way to copy an array

// bring back to normal
console.log("back to normal");
newNumbers.sort();
console.log("new numbers", newNumbers);
console.log("original numbers", numbers);

// real copy
console.log("making a real copy");
// introducing spread operator, takes all elements and packs them into an array

const newNumbersCopy = [...numbers];
console.log("real copy numbers", newNumbersCopy);
console.log("original numbers", numbers);

newNumbersCopy.sort((f, s) => s - f);
console.log("correctly copied array:")
console.log("real copy numbers", newNumbersCopy);
console.log("original numbers", numbers);



