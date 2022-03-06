console.log("Connected");

// Main differences between let/const

let dogName = "Bubi";
console.log(dogName);
// We can assign new values to variables declared with let keyword =)

dogName = "Markus";
console.log(dogName);
console.log("***************");

const dogBreed = "Husky";
console.log(dogBreed);
// We cannot assign new values to variables declared with const keyword =)
// dogBreed = "German Shepard";
// console.log(dogBreed);
const myBtn = document.getElementById("myBtn");

// Pure Function;
console.log("Pure functions");

// THIS IS NOT A PURE FUNCTION! BECAUSE IT CHANGES A VALUE IN OUR PROGRAM/CODE
let result = 0;
const calculateNumbers = (numberOne, numberTwo) => {
  result = numberOne + numberTwo;
};

calculateNumbers(8, 4);
console.log(result);

// THIS IS A PURE FUNCTION BECAUSE IT DID NOT CHANGE VALUE/ANYTHING IN OUR PROGRAM/CODE
const calculate = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case "+":
      return numberOne + numberTwo;

    case "-":
      return numberOne - numberTwo;

    case "*":
      return numberOne * numberTwo;

    case "/":
      return numberOne / numberTwo;

    default:
      break;
  }
};

console.log(calculate(3, 5, "*"));

// DESTRUCURING;
console.log("***** destrucutring *****");

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hasPet: true,
  isEmployed: true,
};

console.log(person);

console.log(
  `Full name: ${person.firstName} ${person.lastName};
 Age: ${person.age} years old;
 Has pet: ${person.hasPet ? "Yes person has pet" : "No it does not"};
 Is emploed: ${person.isEmployed}

`
);

// With destructuring

// let firstName = person.firstName;
// let lastName = person.lastName;
// let age = person.age;
// let hasPet = person.hasPet;
// let isEmployed = person.isEmployed;

// console.log("print with as like destructuring variables");

// console.log(
//   `Full name: ${firstName} ${lastName};
//    Age: ${age} years old;
//    Has pet: ${hasPet ? "Yes person has pet" : "No it does not"};
//    Is emploed: ${isEmployed}
//   `
// );

let { firstName, lastName, age, hasPet, isEmployed } = person;

console.log("Print with destructuring");

console.log(
  `Full name: ${firstName} ${lastName};
 Age: ${age} years old;
 Has pet: ${hasPet ? "Yes person has pet" : "No it does not"};
Is employed: ${isEmployed}
    `
);

// EXAMPLE 2 DESTRUCTURING

let burger = {
  bread: "Lepinja",
  salata: "Krastavichki",
  meso: "Pleskavica",
  cheese: true,
  potatoes: "Homemade fried potatoes",
};

console.log("Yea, we got our burger all in one", burger);

const { bread, salata, meso, cheese, potatoes } = burger;

console.log(
  `We got our destrucuring burger: ${bread}, ${salata}, ${meso}, ${cheese}, ${potatoes} `
);

// Example one destructuring in function

// const printBurger = (burgerObject) => {
//   const { bread, salata, meso, cheese, potatoes } = burgerObject;

//   console.log(
//     `Printing from function  ${bread}, ${salata}, ${meso}, ${cheese}, ${potatoes}`
//   );
// };

// printBurger(burger);

// Example two destructuring in function

const printBurgerSecond = ({ bread, salata, meso, cheese, potatoes }) => {
  console.log(
    `Printing SECOND from function  ${bread}, ${salata}, ${meso}, ${cheese}, ${potatoes}`
  );
};

printBurgerSecond(burger);

// Destructuring on arrays

let petsArray = [
  { petName: "Bubi", breed: "Dog" },
  { petName: "Kim", breed: "Cat" },
];

// let firstPet = petsArray[0];
// let secondPet = petsArray[1];

// console.log(firstPet, secondPet);
//    index0,   index1,
let [firstPet, secondPet, thirdPet] = petsArray;

// Thirdpet will be undefined because we do not have element on that position (index 2);

console.log(firstPet, secondPet, thirdPet);

const printPersonFullName = (firstName, lastName, ...other) => {
  console.log(other);
  if (other.length > 0) {
    other.forEach((element) => console.log(element));
  }
  return `${firstName} ${lastName} `;
};

console.log(printPersonFullName("Bob", "Bobski"));

console.log("passing more argument then expected");

console.log(
  printPersonFullName("John", "Doe", 27, "male", "isEployed", {
    pets: ["dog", "bird"],
  })
);

const sedcClasses = [
  "Intro To Programming with HTML/CSS & JS",
  "C#",
  "NodeJS",
  "SQL",
  ".NET",
];

const printClasses = (classesArray, callBackToPrintClasses) => {
  return callBackToPrintClasses(classesArray);
};

const printClassesOfArray = (arrayOfClasses) => {
  arrayOfClasses.forEach((element) => console.log(element));
};

const secondPrinting = (arrayOfSedcClasses) => {
  console.log(arrayOfSedcClasses);
};

printClasses(sedcClasses, printClassesOfArray);

printClasses(sedcClasses, secondPrinting);

const newClasses = [
  { name: "Javascript", numberOfClasses: 10 },
  { name: "Javascript Advanced", numberOfClasses: 15 },
];

const printClassesThird = (arrayOfNewClasses) => {
  //   arrayOfNewClasses.forEach((element) =>
  //     console.log(element.name, element.numberOfClasses)
  //   );

  arrayOfNewClasses.forEach(({ name, numberOfClasses }) =>
    console.log(name, numberOfClasses)
  );
};

printClasses(newClasses, printClassesThird);

let result2 = 0;
function sumTwoNumbers(num1, num2) {
  console.log(result2);
  if (result2 >= 100) {
    return `The result finaly is ${result2}`;
  }
  result2 += num1 + num2;
  return sumTwoNumbers(num1, num2);
}

console.log(sumTwoNumbers(2, 3));

// High order function are function only for the ARRAYS!

// map => Sekogash ni vrakja nova niza, so elementite promeneti
// filter => Sekogash ni vrakja nova niza, so izfiltrirani elementi
// forEach => Ne vrakja niza, izvrshuva nekakva logika za sekoj element
// reduce => Manipulira so data-ta od samata niza, mozheme da ja smalime ili promenime toj data-set

let numbers = [1, 2, 3, 4];
console.log("Numbers frist", numbers);

let numbersMultiplyed = numbers.map((number) => number * 2);
console.log("Numbers second, ", numbersMultiplyed);

let evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log("Filtered even numbers", evenNumbers);
// acc, accomulator
let numbersWithReduce = numbers.reduce((previousValue, currentValue) => {
  console.log("Prev value", previousValue);
  console.log("Current value", currentValue);

  // previousValue = previousValue + currentValue
  return (previousValue += currentValue);
}, 10);

console.log(numbersWithReduce);

let numbersWithReduceIntoObject = numbers.reduce(
  (previousValue, currentValue) => {
    console.log("Prev value", previousValue);
    console.log("Current value", currentValue);

    return {
      ...previousValue,
      [currentValue]: `Number is ${currentValue}`,
    };
  },
  {}
);

console.log(numbersWithReduceIntoObject);

let names = ["George", "Aleksandar", "Vladimir"];
let newNames = ["John", "Bob", "Petar"];

console.log(names);

console.log(newNames);
// ... is called SPREAD OPERATOR, we can copy arrays and object with it =)
let allNamesTogether = [...names, ...newNames];
console.log(allNamesTogether);

let personOne = {
  name: "George",
  lastName: "Dimitrov",
};

let personTwo = {
  name: "Aleksandar",
  lastName: "Manasiev",
};

console.log(personOne);

console.log(personTwo);

let combined = {
  ...personTwo,
  ...personOne,
};

console.log(combined);

let myDog = {
  breed: "Dog",
  perName: "Bubi",
};

let combinedTwo = {
  ...personOne,
  ...myDog,
};

console.log(combinedTwo);
