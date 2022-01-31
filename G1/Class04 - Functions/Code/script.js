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