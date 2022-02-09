// HOMEWORK HINTS

// async function getData(url) {
//     // let data = await fetch(url)
//     return [{ name: "Mars" }, { name: "Earth" }, { name: "Venera" }];
//   }

//   function generateTableForPlanets(planets) {
//     let table = document.createElement("table");
//     let thead = document.createElement("thead");
//     //.....

//     let tbody = document.createElement("tbody");
//     for (const planet of planets) {
//       let tr = document.createElement("tr");
//       let td1 = document.createElement("td");
//       td1.textContent = planet.name;
//       tr.appendChild(td1);
//       tbody.appendChild(tr);
//     }
//     table.appendChild(tbody);
//     document.getElementsByTagName("body")[0].appendChild(table);
//   }

//   document.getElementById("button").addEventListener("click", async () => {
//     let planets = await getData("https://starwars.com");
//     console.log(planets);
//     generateTableForPlanets(planets);
//   });

let firstName = "Goce";
let myFunction = function () {
  console.log("THIS IS FUNCTION!");
};

function first() {
  console.log("FIRST");
}
function second() {
  console.log("SECOND");
}
function third() {
  console.log("THIRD");
}

let functions = [first, second, third];
// functions[1]();

function calculator(number1, number2, calculate) {
  // return sum(10, 20) => return 30

  // return multiply(10,20) => return 200
  return calculate(number1, number2);
}

function sum(number1, number2) {
  return number1 + number2;
}
function substract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}

// console.log(calculator(10, 20, sum));
// console.log(calculator(10, 20, multiply));
// console.log(calculator(10, 20, substract));

let sum2 = (num1, num2) => num1 + num2;

function calculator1(operation) {
  switch (operation) {
    case "+":
      return sum2;
    case "-":
      return (num1, num2) => num1 - num2;
    default:
      return () => {};
  }
}
let num1 = 10;
let num2 = 100;
let sum1 = calculator1("+");
// let sum1 = (num1, num2) => num1 + num2
// let sum1 = function (num1, num2) { return num1 + num2 }

// console.log(sum1(num1, num2));

function sayHi(name) {
  return `HI there ${name}`;
}

// console.log(sayHi("GOCE"));

// sayHi.defaultName = "John";

// console.log(sayHi(sayHi.defaultName));

// sayHi.differentGreeting = function (name) {
//   return `Holla ${name}`;
// };

// console.log(sayHi.differentGreeting("ANGEL"));
// console.dir(sayHi);

// FUNCTION ARGUMENTS

function sayHello() {
  if (arguments.length > 0) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}

// sayHello("Goce", "kabov", "G6", "JS", 29, true);
// sayHello();

// HOC (HIGHER ORDER FUNCTIONS)

// forEach

let names = ["Goce", "Angel", "John", "Bob", "Jane"];

//BEFORE

// for (const name of names) {
//   console.log(name);
// }

//NOW

// names.forEach(function (name) {
//   console.log(name);
// });

// names.forEach((name) => console.log(name));

// filter

let ages = [10, 29, 18, 17, 99, 15];

// let filteredAges = ages.filter((age) => age >= 18);
// console.log(filteredAges);

// map

let persons = [
  {
    firstName: "Goce",
    lastName: "Kabov",
    age: 29,
  },
  {
    firstName: "Angel",
    lastName: "Mitrov",
    age: 22,
  },
  {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 16,
  },
];

// let names = persons.map((person) => person.firstName);

// let personsFirstNames = persons.map((person) => {
//   return { firstName: person.firstName, lastName: person.lastName };
// });

// let personsFirstNames = persons.map((person) => ({
//   firstName: person.firstName,
//   lastName: person.lastName,
// }));
// console.log(personsFirstNames);

let result = persons
  .filter((person) => person.age > 18)
  .map((person) => person.firstName);

// console.log(result1);

// console.log(result);

// REDUCE
let numbers = [10, 20, 50, 40]; // aslkflakshkjashfkjasdhksajhdkjashdakjshd
// let zbir = 0;
// numbers.forEach((number) => {
//   zbir += number;
// });

let zbir = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

let storyArray = ["There", "was", "once", "upon", "a", "time"];
let story = storyArray.reduce((acc, curr) => {
  return acc + " " + curr;
}, "");
console.log(story.trim());

// DONT BE AFRAID WE WILL GET THERE!

// let result1 = persons.reduce((acc, curr) => {
//   if (curr.age > 18) {
//     return [...acc, curr.firstName];
//   } else {
//     return [...acc];
//   }
// }, []);

// SORT

// let asc = numbers.sort((curr, next) => curr - next);
// let desc = numbers.sort((curr, next) => next - curr);
// console.log(desc);

// persons.sort((curr, next) => curr.firstName.localeCompare(next.firstName));
// persons.sort((curr, next) => next.firstName.localeCompare(curr.firstName));
// console.log(persons);

// COPY OF ARRAYS

// let numbers10 = numbers;
// numbers10.sort((curr, next) => curr - next);

// let copyArray = [];
// numbers.forEach((number) => {
//   copyArray.push(number);
// });

let copyArray = [...numbers];

copyArray.sort((curr, next) => curr - next);
console.log(numbers);
console.log(copyArray);
