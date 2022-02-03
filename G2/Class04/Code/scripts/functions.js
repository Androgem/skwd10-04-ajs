function getFullName(firstName, lastName){
    console.log(firstName);
    //......
    return `${firstName} ${lastName}`;
}

let fullName = getFullName("Ana", "Anevska");
console.log(fullName);

function printPersonDetails(firstName, lastName, age, address){
    console.log(`The age of ${firstName} is ${age}`);

    let personFullName = getFullName(firstName, lastName);
    console.log(`${personFullName} lives on address ${address}`);

    return `The age of ${firstName} is ${age} lives on address ${address}`; //exit of the function

    //this code won't be executed
    console.log("TEst");
}

let personDetails = printPersonDetails("Tanja", "Stojanovska", 27, "Skopje");
console.log(personDetails);

console.log("=======Anonymous functions=========");

let greeting = function(name){
    console.log(`Hello ${name}`);
}
greeting("Bob");
greeting("John");

//member of an array
let mixedArray = [2, 5, true, "Test", function(){return 5+5}];
let result = mixedArray[4]();
console.log(result);

function printResult(parameterFunction){
    let result = parameterFunction();
    console.log(`Result: ${result}`);

    console.log(`Result: ${parameterFunction()}`);
    //no execution of parameterFunction
    console.log(parameterFunction);
}
//call printResult and pass anonymous function as parameter
printResult(function(){return 5+7});

//event listeners
document.getElementById("myButton").addEventListener("click", function(){
    console.log("Clicked!!!")
});

console.log("=======Arrow functions=======");
//definition
let sumWithTen = num => num + 10;
console.log(sumWithTen(2));

let sum = (num1, num2) => num1 + num2;
console.log(sum(3,5));

let sumOfMultipleNumbers = (num1, num2, num3) => {
    console.log("inputs: ");
    console.log(num1);
    console.log(num2);
    console.log(num3);
    return num1 + num2 + num3;
}
console.log(sumOfMultipleNumbers(1,2,3));

let checkNumber = ourNumber => {
    debugger
    if(ourNumber == null || ourNumber == undefined || isNaN(ourNumber)){
        console.log("Invalid input !!!!");
        //stop execution
        return;
    }
    ourNumber > 7 ? console.log("Greater than 7") : console.log("Less or equal to 7");
}
checkNumber(5);
checkNumber(9);
checkNumber("Tekst");

console.log("=====self-invoked functions======");

//define and execute
(function(){
    console.log("Inside self-invoked function");
    console.log("Hello there!");
})();

let res = (function(num1, num2){
    return num1+num2;
})(3,6);
console.log(res);

//use sum function from above
let sumResult = sum(4, ((number1, number2) => number1*number2)(3,4)); // sum(4, 12)
console.log(sumResult);
