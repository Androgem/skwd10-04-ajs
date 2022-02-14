//HOF
let numbers = [2,6,88,4,6,9];
let filteredNumbers = numbers.filter(n => n > 5);
console.log("numbers:");
console.log(numbers);
console.log("filteredNumbers:");
console.log(filteredNumbers);

let mappedNumberObjects = filteredNumbers.map(n => {return {num:n}});
let multipliedNumbers = filteredNumbers.map(n => n*2);
console.log("filteredNumbers:");
console.log(filteredNumbers);
console.log("mappedNumberObjects:");
console.log(mappedNumberObjects);
console.log("multipliedNumbers:");
console.log(multipliedNumbers);

let concatenate = function(currentResult, currentValue){
    // if(currentResult == ""){
    //     currentResult = 0;
    // }
    return currentResult += currentValue;
}
let concatenatedNumbers = numbers.reduce(concatenate, "");
console.log(concatenatedNumbers);

let sum = numbers.reduce(concatenate, 1);
console.log(sum);

//Reference vs value
let someObject = {
    firstProperty: "first property",
    secondProperty: "second property"
};

function editProperty(obj){
    obj.firstProperty = "First property updated!";
}
console.log("someObject before editProperty:");
console.log(someObject);
editProperty(someObject); //obj = someObject, pass by ref
console.log("someObject after editProperty:");
console.log(someObject);

let nums = [4,6,7];
function editArray(array){
    for(let i=0; i< array.length; i++){
        array[i] = array[i]+1;
    }
}
console.log("nums before:");
console.log(nums);
editArray(nums); //let array = nums; pass by ref
console.log("nums after:");
console.log(nums);

//by value
let a = 8;
function changeValue(number){
    number = 77;
}

function changeValueOfA(number){
    return number + 5;
}
console.log(`a before: ${a}`);
changeValue(a); //let number = a; pass by value (primitive type)
console.log(`a after: ${a}`);

a = changeValueOfA(a);
console.log(`a: ${a}`);


let firstString = "test1";
let secondString = firstString;
secondString = "test333";
console.log(`firstString : ${firstString}`);
console.log(`secondString : ${secondString}`);
