console.log("Objects pt1");

// Checking type
console.log(typeof (document));
console.log(typeof (document.getElementById));
console.log(typeof ([]));
console.log(typeof ([].concat));
console.log(typeof (console));
console.log(typeof (console.log));
console.log(typeof (window));

console.log("Hello from SEDC!");
window.console.log("Hello from SEDC Again!");

// alert("Hello G5!");
// window.alert("Hello G5!");
console.log(typeof (window.alert));
console.log(document);
console.log(window.document);

function sayHello(name) {
    console.log(`Hey there ${name}`);
};

sayHello("Jhon");
window.sayHello("Jhonny");

// let sayHelloFunction = function(name){
//     console.log(`Hey there ${name}`);
// };

// It's not binded to the window object

// only var is bindend on the window object, let and const are not available on window object
var someString = "just a simple string";
console.log(someString);
console.log(window.someString);

// Constructor Function

function Dog(name, color, age, faveFood) {
    this.dogName = name; // this.dogName will be the property and the name will be the value that will come from the argument
    this.dogColor = color;
    this.age = age;
    this.dogFaveFood = faveFood;
    this.hasOwner = false;
    this.bark = function () { console.log("Bark Bark!") };
    this.eat = function (food) {
        this.dogFaveFood.forEach(fav => {
            fav.toLowerCase() === food.toLowerCase() ? console.log("My Favourite") : console.log("Don't like it");
            // Ternary operator-> here is the condition ? if true : if false
        });
    };
};

let jacky = new Dog("Jacky", "Brown", 3, ["Chicken", "Beef"]);
console.log(jacky);
jacky.hasOwner = true;
console.log(jacky);
jacky.bark();
jacky.eat("chicken");

// Exercise: Create Book Constructor function and initialioze array of objects from it.
// Constructor properties and metods:
// Props: Title, Author: {Name, Location, Age}, ISBN, isOnPromotion, Price
// Method: printInfo
// Time to finish: 10min

function Author(name, location, age) {
    this.name = name;
    this.location = location;
    this.age = age;
};

function Book(title, author, ISBN, isOnPromotion, price) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isOnPromotion = isOnPromotion;
    this.price = price;
    this.printInfo = function () {
        console.log(`Book: ${this.book} is from author: ${this.author}`);
    }
    // this.whatIsThis = this; // example for this pointer
}

let arrayOfBooks = [
    new Book("Sapiens", { name: "Yuri Naval", location: "USA", age: 40 }, 1244534534, false, 19.99),
    new Book("Hobbit", new Object({ name: "J RR Tolkien", location: "USA", age: 30 }), 1244334344, true, 29.99),
    new Book(
        "Theory of Everything",
        new Author("Steven Hawkins", "USA", 30),
        1244334344,
        true,
        39.99)
];

arrayOfBooks.forEach(x => console.log(x));


// What is this

console.log(this);

function whatIsThis() {
    console.log(this);
};
whatIsThis();

let someObject = {
    whatThis: this
};

console.log(someObject.whatThis);
// console.log(arrayOfBooks[2]); // example to show this where it point


// Destructuring

// Destructuring array
let someNumbers = [1, 2, 3, 4, 5, 6];
let someStudents = ["Bojan", "Martina", "Stefan"];

// old way
// console.log(someStudents[0]);
// console.log(someStudents[1]);
// console.log(someStudents[2]);

let [bojan, martina, stefan] = someStudents;
console.log(bojan);
console.log(martina);

let [num1, , num3, num4] = someNumbers;
console.log(num1);
console.log(num3);

let color = ["#5b5b5b", [255, 0, 255], "rgb(255, 0, 255)"];

let [hex, [red, green, blue], rgbValue] = color;
console.log(hex);
console.log(red);
console.log(green);

function doSomething(num1, num2) {
    return [num1 + num2, num1 * num2];
}

let [sum, multiply] = doSomething(3, 6);
console.log(sum);
console.log(multiply);

// Exercise :
// 1. Create 2 arrays with simple values and destruct them
// 2. Create function that will return array from calculations: sum, divison, multiplication

// spread syntax
let [a, b, ...otherNumbers] = someNumbers;
console.log(a);
console.log(b);
console.log(otherNumbers);

// the same as someNumbers.concat(someStudents) <- more common
let mixedArray = [...someNumbers, ...someStudents];
console.log(mixedArray);


// Destructuring Objects

let exampleDog = {
    dogName: "Bugsy",
    dogColor: "Brown",
    dogAge: 3,
    dogRace: "Labrador",
    ownerInfo: {
        ownerName: "Aleksandar",
        ownerLocation: "Skopje"
    }
};

let { dogName: bugsyDogName, dogColor, ownerInfo: { ownerName: dogOnwerName } } = exampleDog;
console.log(bugsyDogName);
console.log(dogColor);
console.log(dogOnwerName);

function printDogInfo(dogObject) {
    console.log(`Dog name is: ${dogObject.dogName} | dog age is: ${dogObject.dogAge}`);
};

printDogInfo(exampleDog);

function printTheDogInfo({ dogName, dogAge, dogRace = "Jack Russel" }) {
    console.log(`Dog name is: ${dogName} | dog age is: ${dogAge} | Dog race is: ${dogRace}`);
}
printTheDogInfo(exampleDog);

let george = {
    firstName: "George",
    lastName: "Dimitrov",
    location: "Skopje",
    dogs: [
        new Dog("Moby", "Brown", 2, ["Chicken", "Milk"]),
        new Dog("Rex", "Black and Brown", 5, ["Beef", "Bread"])
    ],
    cats: [
        new Object({
            catName: "catson",
            catAge: 3
        }),
        new Object({
            catName: "Oreo",
            catAge: 2
        })
    ]
};

console.log(george);

let { dogs: { ...allDogs } } = george;
let { cats: { ...allCats } } = george;


console.log(allDogs);
console.log(allCats);