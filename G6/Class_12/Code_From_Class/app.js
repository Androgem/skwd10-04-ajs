class Vehicle {
  // constructor() {}
  constructor(id, name, serialNumber, price, isDemaged = false) {
    this.id = id;
    this.name = name;
    this.serialNumber = serialNumber;
    this.price = price || 0;
    this.isDemaged = isDemaged;
    this.company = "GocesORG";
  }

  printVehicle() {
    console.log(
      `${this.id} - ${this.name} - ${this.serialNumber} - ${this.price} - ${this.company}`
    );
  }
}

// let car = new Vehicle(1, "AUDI", "A234234", 4000);

// console.log(car);
// car.printVehicle();

class WheeledVehicles extends Vehicle {
  constructor(id, name, serialNumber, price, isDemaged, numberOfWheels) {
    super(id, name, serialNumber, price, isDemaged);
    this.numberOfWheels = numberOfWheels;
  }

  drive() {
    console.log(`We are driving on ${this.numberOfWheels} wheels`);
  }
}

// let wheeledVehicle = new WheeledVehicles(1, "HONDA", "123123", 10000, false, 4);
// console.log(wheeledVehicle);
// wheeledVehicle.printVehicle();
// wheeledVehicle.drive();

class Car extends WheeledVehicles {
  constructor(
    id,
    name,
    serialNumber,
    price,
    isDemaged,
    numberOfWheels,
    hasAirCondition
  ) {
    super(id, name, serialNumber, price, isDemaged, numberOfWheels);
    this.hasAirCondition = hasAirCondition;
  }

  buyCar(money) {
    if (money >= this.price) {
      console.log("CONGRATS! YOU BOUGHT A CAR!");
    } else {
      console.log("SORRY YOU DONT HAVE ENOUGH MONEY!");
    }
  }

  static addAirCondition(car) {
    if (car.hasAirCondition) {
      console.log(`The car ${car.name} has already air condition!`);
    } else {
      car.hasAirCondition = true;
      car.price += 500;
      console.log(
        `The car ${car.name} now has air condition and it costs ${car.price}`
      );
    }
  }
}

class ElectricCar extends Car {
  constructor(
    id,
    name,
    serialNumber,
    price,
    isDemaged,
    numberOfWheels,
    hasAirCondition,
    owner
  ) {
    super(
      id,
      name,
      serialNumber,
      price,
      isDemaged,
      numberOfWheels,
      hasAirCondition
    );
    this.owner = owner;
  }

  get owner() {
    console.log("Someone is trying the get the value of owner");
    return `This car is owned by ${this._owner}`;
  }

  set owner(newOwner) {
    if (newOwner.length > 1) {
      this._owner = newOwner;
      console.log("Owner updated succesfully");
    } else {
      document.getElementsByTagName("body")[0].innerHTML = "<p>WRONG OWNER</p>";
      alert("INVALID NAME");
      throw new Error("Owner name must be at least 2 characters");
    }
  }
}

// let audi = new Car(1, "AUDI", "123123", 1000, true, 4, false);
// let electricCar = new ElectricCar(
//   1,
//   "AUDI",
//   "123123",
//   1000,
//   true,
//   4,
//   false,
//   "Goce"
// );
// electricCar.owner = "A";
// console.log(electricCar.owner);
// console.log(audi);
// Car.addAirCondition(audi);
// console.log(audi);
// car.printVehicle();
// car.drive();
// car.buyCar(900);
// console.log(Object.getPrototypeOf(car));
