function test (a = 5) {
    console.log(a);
    return a + 5;
    console.log(a);
}
if (test() > 8) {
    console.log("call a function inside an if")
}

function printPersonDetails(firstName, lastName, age, address){
    let fullName;
    function getFullName(firstName, lastName){
        fullName = `${firstName} ${lastName}`;
    }
   // getFullName(firstName, lastName);
    return `The person ${fullName} age ${age} lives on ${address}!`;
}

console.log(printPersonDetails("Jon", "Doe", 30, "test"));

var hi = function (name) {
    console.log("Hello " + name);
}
var hi2 = (name) => console.log("Hello from arrow " + name); 
hi("Bob");
hi2("Bob");
var h1 = document.getElementsByTagName("h1")[0];
h1.addEventListener("click", (e) => console.log(e.target));

var testArrow = () => {
    var result = 2 + 5;
    console.log(result);
}
testArrow();

var sumWith10 = (num) => num + 10;
var sum = sumWith10(5);
console.log(sum);

var arr = [1 , "test", function(num){return 30 - num}];
// var arr = [1 , "test", num => 30 - num]; <-- arrow function
console.log(arr[2](10));

var text = (function (name) {return `Hello ${name}`})("Bob");
(num => console.log(30 - num))(15);
console.log(text);

var arr = [3, 5, 6, (num => num * 2)(10)];
console.log(arr[3]);

var num1 = 10;
var num2 = '15';
var calc = (num1, num2) => num1 + num2;
console.log(calc(num1, (str => parseInt(str))(num2)));

function sayHello(inputName){
	return (name => {
		if(name.length <= 0) { return "No name"}
		else if(name.length < 2) { return "Too short"}
		else { return `Hello there ${name}`}
	})(inputName)
}
console.log(sayHello("Bob"));

function sumTo(num) {
    if(num === 0) {
        return 0
    }
    return num + sumTo(num - 1)
}
console.log(sumTo(5));

function countDown(num) {
    if (num == 0) {
        console.log("Srekjna Nova Godina");
    } else {
        console.log(num);
        countDown(num - 1);
    }
}
countDown(10);