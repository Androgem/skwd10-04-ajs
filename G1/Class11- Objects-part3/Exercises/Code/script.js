/**
 * Exercise 1
 */

class Animal {
  constructor(name, type, age, size) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
    this.isEaten = false;
  }

  set type(data) {
    if (data !== 'carnivore' && data !== 'omnivore' && data !== 'herbivore') {
      throw new Error('There is no such a type');
    } else {
      this._type = data;
    }
  }

  get type() {
    return this._type;
  }

  eat(food) {
    if (food instanceof Animal) {
      if (this.type === 'herbivore') {
        console.log(
          `The animal ${this.name} is a herbivote and does not eat other animals!`
        );
        return;
      }
      if (this.size >= food.size * 2) {
        food.isEaten = true;
        console.log(`The animal ${this.name} ate the ${food.name}`);
        return;
      } else {
        console.log(
          `The animal ${this.name} tried to eat the ${food.name} but it was too large`
        );
        return;
      }
    }
    console.log(`The animal ${this.name} is eating ${food}`);
  }
}

const lion = new Animal('lion', 'carnivore', 2, 40);
const elephant = new Animal('elephant', 'herbivore', 1, 400);
const mouse = new Animal('mouse', 'omnivore', 1, 1);

lion.eat(mouse);
lion.eat(elephant);
mouse.eat(lion);
elephant.eat(mouse);

/**
 * Exercise 2
 */

class Bus {
  constructor(lintNumber, color, passangers, price) {
    this.lintNumber = lintNumber;
    this.color = color;
    this.passangers = passangers;
    this.price = price;
    this.status = '';
  }

  set status(mode) {
    this._status = mode;
  }

  get status() {
    return this._status;
  }
}

class Passanger {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const people = [
  new Passanger('David', 19),
  new Passanger('Vanja', 29),
  new Passanger('Anita', 29),
];

const people1 = [
  new Passanger('Dimitar', 19),
  new Passanger('Dimitra', 29),
  new Passanger('Matea', 29),
];

const bus1 = new Bus(13, 'red', people, 50);
bus1.status = 'On boarding passangers';
console.log(bus1);
const bus2 = new Bus(15, 'blue', people1, 70);
bus2.status = 'Moving';
console.log(bus2);
