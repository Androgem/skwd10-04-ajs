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