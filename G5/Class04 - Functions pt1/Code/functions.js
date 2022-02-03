const valueOne = "Vladimir";
// valueOne = "Something Else"; -> We cannot assign new value to const
console.log(valueOne);

// Declaration of Function
function getFullName(firstName, lastName){
    return result = `${firstName} ${lastName}`;
}

getFullName("George", "Dimitrov"); // Code is Executed Now
console.log(result);
// Variable result is returned back to the global scobe and we can access it outside of the function

// Calling a function inside of a if statement
if(getFullName("Aleksandar", "Manasiev").length >= 10){
    console.log("Your name is long!");
}

console.log(result);

function printPersonDetails(firstName, lastName, age, address){
    return `The person is: ${getFullName(firstName, lastName)} | Age: ${age} | Address: ${address}`;
};

let vladimirInfo = printPersonDetails("Vladimir", "Golabovski", 25, "Partizanska 10");
console.log(vladimirInfo);

function printPersonDetails_BADWay(first, last, age, address){
    let fullName;
    function fullNameFunc(firstName, lastName){
        return fullName = `${firstName} ${lastName}`;
    }
    fullNameFunc(first, last);
    return `The person is: ${fullName} | Age: ${age} | Address: ${address}`;
}

let personDetails_BadWay = printPersonDetails_BADWay("Stefan", "Kronevski", 25, "Partizanska 100");
console.log(personDetails_BadWay);

// num1 and num2 are parameters
function sum(num1, num2){
    return num1 + num2;
}
// 1 and 3 are arguments
console.log(sum(1,3));

// Anonymous functions

let greeting = function(name){
    return `Hello ${name}`;
}
console.log(greeting("Jhon"));

let button = document.getElementById("submitBtn");
button.addEventListener("click", function(){
    console.log("Button is clicked.")
});


// Arrow Functions
// without parameters
let logSomethingVanilla = function(){
    console.log("Hello there from the classic function");
}
logSomethingVanilla();

let logSomething = () => console.log("Hello there from the Arrow function");
logSomething();

// Arrow function with 1 Parameter
// Important: In one line arrow function, we do not need to write return.
function sumWith10(num){
    return num + 10;
}
console.log("From the classic function:",sumWith10(10));

let sumWith10Arrow = num => num + 10;
console.log("From the arrow function:",sumWith10Arrow(10));

// Arrow functions with multiple parameters

let calcSomethingClassic = function(num1, num2){
    return num1 + num2;
}
console.log(calcSomethingClassic(5,10));
// one line expression
let calcSomething = (num1, num2) => num1 + num2;
console.log(calcSomething(5,10));

// multiple expressions

let sumAndLogicFunc = function(num1, num2){
    let result = num1 + num2;
    console.log(`The result is: ${result}`);
    return result;
};

let sumFunc = (num1, num2) =>{
    let result = num1 + num2;
    console.log(`The result is: ${result}`);
    return result;
};

sumAndLogicFunc(10,20);
sumFunc(10,20);

let buttonTwo = document.getElementById("secondBtn");
buttonTwo.addEventListener("click", ()=>{
    console.log("Button is clicked.");
});

// Self Invoked Functions
console.log("-------- Self Invoked Functions ---------");
// example 1
(function(name){console.log(`Hello there ${name}`)})("Bob");
(name => console.log(`Hello there ${name}`))("Jhon");
// example 2
let bobBobsky = ((firstName, lastName) => `${firstName} ${lastName}`)("Bob", "Bobsky");
console.log(bobBobsky);
// example 3
function sum(num1, num2){
    return num1 + num2;
}
let number1 = 20;
let number2 = "30";

let resultOfSum = sum(number1, (num => parseInt(num))(number2)); // Self invoked function result as an argument
console.log(resultOfSum);
// example 4

function sayHello(inputName){
    return (name => {
        if(name.length <= 0){return "No Name"}
        else if(name.length < 2){return "Too short Name"}
        else{return `Hello there ${name}`}
    })(inputName);
}

console.log(sayHello("Martina"));
console.log(sayHello("M"));

// Recursion 

// Infinite loop - will thorw exception from the defense mechanisam on the browsers. Don't do this.
// function printSomething(something){
//     printSomething(something);
// };
// printSomething("Example");


function sumTo(num){
    if(num === 0){
        return 0;
    }
    return num + sumTo(num - 1);
};

console.log("Recursion result:",sumTo(3));

let sumToArrow = num => num === 0 ? 0 : num + sumToArrow(--num);
console.log("Shorten Recursion result:", sumToArrow(3));

// Scope
console.log("-------- SCOPE -----------");

function printName(first, last){
    let resultFromScope = `${first} ${last}`;
    console.log(result); // Accessed from Global Scope
    console.log(resultFromScope);
}

printName("Aleksandar", "Manasiev");
// console.log(resultFromScope); -> will throw Refference Error

// Block Scope and the difference between VAR and LET

function getTheFullName(firstName, lastName){
    if(firstName.length > 1 && lastName.length > 1){
        let blockResult = `${firstName} ${lastName}`;
        var functionResult = `${firstName} ${lastName}`;
        console.log("LET:Access from Block Scope:",blockResult);
        console.log("VAR:Access from Block Scope:",functionResult);
    }
    console.log("Outside of the Block Scope:");
    // console.log("LET:Outside of the Block Scope:", blockResult); -> will throw Refference Error - not defined
    console.log("VAR:Outside of the Block Scope:", functionResult);
}

getTheFullName("Jhon", "Doe");

// console.log(functionResult);

// var resultSomething = 10;
// var resultSomething = 100;
// console.log(resultSomething);