function saySomething(saying) {
  return `Eheheh ${saying}`;
}

function sumOfTwoNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

const helloWorld = "Hello World =)";
// We use this syntax to export one function =)
// module.exports = saySomething;

// We use this syntax to export multiple things =)

// module.exports = {
//     saySomething: saySomething,
//     sumOfTwoNumbers: sumOfTwoNumbers
// }

module.exports = {
  saySomething,
  sumOfTwoNumbers,
  word: helloWorld,
  person: { fistName: "George", lastName: "Dimitrov", age: 27 },
};
// console.log(saySomething("I am running javascript in my machine ma frend =)"));
// console.log(sumOfTwoNumbers(5, 6));

// let firstName = "George";

// firstName = "Aleksandar";
// console.log(firstName);
// const lastName = "Dimitrov";

// We cannot assign new values of CONSTANT variable =)

// lastName = "Manasiev";
// console.log(lastName);
