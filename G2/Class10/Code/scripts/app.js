console.log("Document type:");
console.log(typeof(document)); //object
console.log("Get element by id:");
console.log(typeof(document.getElementById)); //function
console.log("Empty array:");
console.log(typeof([])); //object
console.log("Console type:");
console.log(typeof(console)); //object
console.log("Console log type:");
console.log(typeof(console.log)); //function
console.log("Window type:");
console.log(typeof(window)); //object

console.log("Hello");
window.console.log("Hello");

//alert('Hi');
//window.alert("Hi");

console.log(window.JSON.stringify({a : 7}));

console.log("FUNCTIONS");
function sayHello(name){
    console.log(`Hello ${name}`);
}

sayHello("Ana");
window.sayHello("Ana");

console.log("====var vs let=====");
var firstVariable = 5;
console.log(firstVariable);
console.log(window.firstVariable);

let secondVariable = 7;
console.log(secondVariable);
console.log(window.secondVariable); //undefined

console.log("====CONSTRUCTORS====");
function Food(name, color){
    this.name = name;
    this.color = color;
    this.compare = function(food){
        return this.name === food.name && this.color === food.color;
    }
}

function Dog(name, color, age, favouriteFood){
    this.name = !name ? "Unnamed" : name;
    this.color = color;
    this.age = age;
    this.hasOwner = false; //default value
    this.favouriteFood = !favouriteFood //if favouriteFood == undefined or favouriteFood == null
    ? [new Food("Bacon", "red")] : favouriteFood;
    this.bark = function(){
        console.log("Bark bark");
    }
    this.isMyFavouriteFood = function(food){
        let isFound = this.favouriteFood.filter(f => f.name == food.name).length > 0;
        if(isFound){
            console.log(`One of my favourite meals is ${food.name}`);
        }
        else{
            console.log(`I don't prefer ${food.name}`);
        }
    }
}

let barnie = new Dog("Barnie", "brown", 3, [new Food("Beef", "red"), new Food("apple", "yellow")]);
console.log(barnie);

barnie.isMyFavouriteFood(new Food('Bacon', 'red'));

let sparkie = new Dog("Sparkie", "brown", 5); 
console.log(sparkie);

barnie.bark();
sparkie.bark();

sparkie.bark = function(){
    console.log("Barking....");
}

barnie.bark();
sparkie.bark();

console.log("====COMPARISON=====");
let apple = new Food("apple", "red");
let anotherApple = new Food("apple", "red");

//comparison by reference
console.log(apple === anotherApple);
let areIdentical = apple.compare(anotherApple);
console.log(`Are apples identical: ${areIdentical}`);

let yellowApple = new Food("apple", "yellow");
console.log(yellowApple.compare(apple));
