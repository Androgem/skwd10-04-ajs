// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }

// Hero.prototype.greet = function () {
//   return `${this.name} says hello`;
// };

// class Hero {
//   constructor(name, level) {
//     this.name = name;
//     this.level = level;
//   }

//   greet() {
//     return `${this.name} says hello`;
//   }
// }

// const hero1 = new Hero('HeroName', 5);

/**
 * Basic
 */

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea() {
    return this.width * this.height;
  }

  printDescription() {
    return `I am a rectangle of ${this.width} x ${this.height} and i am ${this.color}`;
  }
}

const r1 = new Rectangle(15, 30, 'blue');
const r2 = new Rectangle(30, 45, 'green');

/**
 * Getters & Setters
 */

// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   get width() {
//     return this._width;
//   }

//   set width(value) {
//     this._width = value;
//   }

//   get area() {
//     return this.width * this.height;
//   }
// }

// const s1 = new Square(5, 5);

/**
 * Hidden properties / Encapsulation
 */

// class Square1 {
//   #width;
//   #height;

//   constructor(width, height) {
//     this.#width = width;
//     this.#height = height;
//   }

//   get width() {
//     return this.#width;
//   }

//   set width(value) {
//     this.#width = value;
//   }

//   get height() {
//     return this.#height;
//   }

//   set height(value) {
//     this.#height = value;
//   }
// }

/**
 * Static Methods
 * Static method is a method which we defined on a class
 * Its not part of the instantiated object once created
 * All static methods are like/used like "helper" methods
 */

class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Compare 2 square instances
  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }

  static isValidDimension(instance) {
    return instance.height === instance.width;
  }
}

const s1 = new Square(4, 5);
const s2 = new Square(5, 5);
// console.log(s1);
// console.log(s2);

// console.log(Square.equals(s1, s2));

// console.log(Square.isValidDimension(s1));

/**
 * Inheritance and extends keyword
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `I am ${this.name} and i am ${this.age} years old :)`;
  }
}

class Programmer extends Person {
  constructor(name, age, yearsOfExp) {
    // Call parent constructor
    super(name, age);

    // Custom behavior of Programmer
    this.yearsOfExp = yearsOfExp;
  }
}

// const p1 = new Person('Dimitar', 19);

const programmer1 = new Programmer('Dimitar', 19, 5);
const person1 = new Person('Darko', 22);

person1.describe();
programmer1.describe();

/**
 * Polymoprhism
 * Poly: Many / Morph: Form
 */

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   makeSound() {
//     console.log('Generic Animal Sound');
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   makeSound() {
//     console.log('Woof woof..');
//   }
// }

// const a1 = new Animal('Dom');
// const a2 = new Dog('Snoopy');

class Vehicle {
  constructor(id, name, batch, price) {
    this.id = id;
    this.name = name;
    this.batch = batch;
    this.price = price;
  }

  printVehicle() {
    return `ID: ${this.id} / NAME: ${this.name} / BATCH: ${this.batch} / PRICE: ${this.price}`;
  }
}

class WaterVehicle extends Vehicle {
  constructor(id, name, batch, price, guestLimit) {
    // Call parent constructor
    super(id, name, batch, price);

    // Custom behaviour
    this.guestLimit = guestLimit;
  }

  startEngine() {
    return `Starting engine on ${this.name} with a total guests of ${this.guestLimit}`;
  }
}

const wv1 = new WaterVehicle(15, 'Titanik', 'B54', 50, 500);

class WheeledVehicle extends Vehicle {
  constructor(id, name, batch, price, wheels) {
    // Call parent constructor
    super(id, name, batch, price);

    // Custom behaviour
    this.wheels = wheels;
  }

  driveVehicle() {
    return `We are driving a ${this.name} on ${this.wheels} wheels!`;
  }
}

class Car extends WheeledVehicle {
  constructor(id, name, batch, price, wheels, doors) {
    // Call parent constructor
    super(id, name, batch, price, wheels);

    // Custom Behaviour
    this.doors = doors;
  }

  drift() {
    return `${this.name} has ${this.wheels} wheels and ${this.doors} doors, and IT DRIFTS`;
  }
}

class Boat extends WaterVehicle {
  constructor(id, name, batch, price, guestLimit, penta) {
    // Call parent constructor
    super(id, name, batch, price, guestLimit);

    // Custom behaviour
    this.penta = penta;
  }

  hasPenta() {
    return this.penta ? 'Veslaj' : super.startEngine();
  }
}

const b1 = new Boat(50, 'Brodot Na Klime', 'B57', 99999, 2, false);

const c1 = new Car(55, 'Benz', 'B53', 9999, 4, 2);

// console.log(c1.printVehicle());
