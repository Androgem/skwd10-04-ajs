/**
 * this - keyword
 * call();
 * apply();
 * bind();
 */

function ask(question) {
  console.log(this.teacher + ' - ', question);
}

const workshop = {
  teacher: 'Dimitar',
  ask: ask,
};

const workshop1 = {
  teacher: 'John',
  ask: ask,
};

const workshop2 = {
  teacher: 'Kyle',
};

const workshop3 = {
  teacher: 'David',
};

const workshop4 = {
  teacher: 'Petar',
};

const workshop5 = {
  teacher: 'Stefan',
};

// ask.call(workshop2, 'What is HTML?');
// ask.apply(workshop4, ['What is HTML?']);
// const callAsk = ask.bind(workshop5, 'What is bind?');

/**
 * Constructor Functions
 */

// Initiliaze a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

Hero.prototype.greet = function () {
  return `${this.name + this.level} says hello.`;
};

Hero.prototype.sayHello = function () {
  return 'Hello';
};

let hero1 = new Hero('Bjorn', 1);
let hero2 = new Hero('Dimitar', 5);

// console.log(hero1);

hero2.sayHello();

function Warrior(name, level, weapon) {
  Object.setPrototypeOf(this, new Hero(name, level));
  this.weapon = weapon;
  this.attack = function () {
    return `${this.name} attacks with the ${weapon}`;
  };
}

function Healer(name, level, spell) {
  Object.setPrototypeOf(this, new Hero(name, level));
  this.spell = spell;
  this.heal = function () {
    return `${this.name} casts ${this.spell}`;
  };
}

let hero3 = new Warrior('Dimitar', 60, 'Axe');
let hero4 = new Healer('Neo', 50, 'Holy Light');
// console.log(hero4.greet());

/**
 * Exercise
 *
 * Create a Animal constructor function that has:
 * name
 * age
 * getName - method: prints name
 *
 * Create Dog constructor that inherits from Animal and has:
 * breed
 * color
 * bark - method that writes in console: "{animals name} is a {color} {breed} and loves to bark"
 *
 * Create Cat constructor that inherits from Animal and has:
 * breed
 * color
 * meow - method that writes in console: "{animals name} is a {color} {breed} and loves to mewos"
 *
 */

function Animal(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return `${this.name}`;
  };
}

function Dog(name, age, breed, color) {
  Object.setPrototypeOf(this, new Animal(name, age));
  this.breed = breed;
  this.color = color;
  this.bark = function () {
    return `${this.name} is a ${this.color} ${breed} and loves to bark`;
  };
}

function Cat(name, age, breed, color) {
  Object.setPrototypeOf(this, new Animal(name, age));
  this.breed = breed;
  this.color = color;
  this.meow = function () {
    return `${this.name} is a ${this.color} ${this.breed} and loves to meeows`;
  };
}

const dog1 = new Dog('Snoopy', 2, 'Beagle', 'Brown');

function Vehicle(id, name, batchNo, price) {
  this.id = id;
  this.name = name;
  this.batchNo = batchNo;
  this.price = price;
  this.company = 'Motor company';
  this.printVehicle = function () {
    console.log(
      `ID: ${this.id}, Name: ${this.name}, Batch Number:${this.batchNo}, Price: ${this.price}`
    );
  };
}

function WheeledVehicle(id, batch, price, name, wheels) {
  Object.setPrototypeOf(this, new Vehicle(id, name, batch, price));
  this.wheels = wheels;
  this.drive = function () {
    console.log(`Driving on ${this.wheels}`);
  };
}

function WaterVehicle(id, batch, price, name, dock) {
  Object.setPrototypeOf(this, new Vehicle(id, name, batch, price));
  this.dock = dock;
  this.startEngine = function () {
    console.log(`Starting engine on ${this.name}`);
  };
}

function Boat(id, batch, price, name, guestLimit) {
  Object.setPrototypeOf(this, new WaterVehicle(id, batch, price, name, true));
  this.guestLimit = guestLimit;
  this.totalGuests = function () {
    console.log(`Maximum total guests on board is ${this.guestLimit}`);
  };
}

function Car(id, batch, price, name, doors, fuelCapacity) {
  Object.setPrototypeOf(this, new WheeledVehicle(id, batch, price, name, 4));
  this.doors = doors;
  this.fuelCapacity = fuelCapacity;
  this.drift = function () {
    console.log(`The ${this.name} is drifting`);
  };
}

const car1 = new Car(1, 'B52', 40000, 'BMW', 5, 50);
const car2 = new Car(2, 'B53', 20000, 'Audi', 2, 40);
const boat1 = new Boat(1, 'B54', 200, 'Klimes boat', 4);
const boat2 = new Boat(1, 'B55', 200, 'Klimes boat1', 5);
console.log(boat1);
boat1.totalGuests();
boat1.startEngine();
boat1.printVehicle();
car1.drift();
console.log(car1);
console.log(car2);
