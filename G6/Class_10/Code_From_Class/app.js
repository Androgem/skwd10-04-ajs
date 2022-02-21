// console.log(typeof document);
// console.log(typeof []);
// console.log(typeof console);
// console.log(typeof window);
// console.log("HEY THERE");
// window.alert("HEY THERE");

function sayHi(name) {
  console.log(`Hi there ${name}`);
}

// sayHi("GOCE");

// same result
// window.sayHi("Goce");

var firstName = "Goce";
// console.log(firstName);

// same result
// console.log(window.firstName);

function Car(manufacturer, model, color, year) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.year = year;

  this.drive = function () {
    console.log("Brmmmmmmmmm");
  };
}

// "new" changes the execution context so this in Car wont point to window but to newly created object from "new"
let renault = new Car("Renault", "C1", "white", 2021);
let mercedes = new Car("Mercedes", "C220", "black", 2018);

// console.log(renault);
// points to window
// console.log(this);

function myFunction() {
  console.log(this);
}

// same execution context so it means this points to window
// myFunction();

let obj = {
  someProp: this,
  someMethod: function () {
    console.log(this);
  },
};

// console.log(obj.someProp);
// obj.someMethod();

//DESTRCTURING

let megane = new Car("Renault", "Megane", "white", 2021);
// console.log(megane.model);

let { model, manufacturer, year } = megane;

// console.log(`This is ${model}`);
// console.log(model, manufacturer, year);

let student = {
  name: "Bob Bobsky",
  age: 22,
  scores: {
    javaScript: 88,
    advancedJS: 66,
    cSharp: 100,
  },
};

// Copying with spread syntax
let copyStudent = { ...student };

// function displayScore(student) {
//   console.log("Student: ", student.name);
//   console.log("Your scores:");
//   console.log("Basic JS: ", student.scores.javaScript || 0);
//   console.log("Advanced JS: ", student.scores.advancedJS || 0);
//   console.log("C#: ", student.scores.cSharp || 0);
// }

// displayScore(student);

// function displaySummary({
//   name,
//   scores: { javaScript = 0, advancedJS = 0, cSharp = 0 },
// }) {
//   console.log("Student: ", name);
//   console.log("Your scores:");
//   console.log("Basic JS: ", javaScript);
//   console.log("Advanced JS: ", advancedJS);
//   console.log("C#: ", cSharp);
// }

// displaySummary(student);

let ages = [12, 42, 55, 99, 190, [20, 60]];
// let [first, second, third, fourth, fifth, [firstIn, secondIn]] = ages;
// let [first, second, ...rest] = ages;
// let copyAges = [...ages];

// function sumThreeNumbers(number1, number2, number3) {
//   console.log(number1, number2, number3);
//   return number1 + number2 + number3;
// }

// let numbers = [28, 5, 55];

// console.log(typeof sumThreeNumbers(...numbers));

// Object.create
let person = {
  firstName: "Goce",
  lastName: "Kabov",
};
let person1 = {
  age: 27,
  city: "Skopje",
  firstName: "Goran",
  addres: {
    street: "street",
  },
  sayHi: function () {
    console.log("HI");
  },
};
// let person1 = Object.create(person);
// let person1 = { ...person };
// person.firstName = "Goce";
// person.lastName = "Kabov";
// console.log(person);

// Object.assign
let mergedPerson = Object.assign(person, person1);
// let mergedPerson = { ...person, ...person1 };
// console.log(mergedPerson);

//keys

// let personKeys = Object.keys(mergedPerson);
// console.log(personKeys);

// values

// let personValues = Object.values(mergedPerson);
// console.log(personValues);

// entries

// let personEntries = Object.entries(mergedPerson);
// console.log(personEntries);
// console.log(personEntries[0][1]);

// dynamically create peroperties and values

let dog = {};
// dog.name = "Bark"
let dogNameKey = ["name", "age", "race"];
let dogNameValues = ["Bark", 5, "Pit Bull"];

dogNameKey.forEach((key, index) => {
  dog[key] = dogNameValues[index];
});

// dogNameKey.forEach((key) => {
//   if (key === "name") {
//     dog[key] = "BARK";
//   } else if (key === "age") {
//     dog[key] = 5;
//   } else {
//     dog[key] = "Pit Bull";
//   }
// });

// console.log(dog);

// freeze

// Object.freeze(dog);

// dog.name = "Barky";
// dog.food = "cat";
// console.log(dog);

// seal

Object.seal(dog);
dog.name = "Barky";
dog.food = "cat";
console.log(dog);
