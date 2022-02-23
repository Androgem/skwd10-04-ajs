//RECAP FROM PREVIOUS CLASS
// let vehicle = new Vehicle("1", "NAME", "@@@@", 100);
// let vehicle1 = new Vehicle("12", "NA2", "2@@", 100);

// DESTRUCTURING WITH SAVING PROPERTIES VALUES WITH CUSTOM VARIABLE NAMES
// let { serialNumber: vehicle1SN, price: vehicle1PR } = vehicle;
// let { serialNumber: vehicle2SN, price: vehicle2PR } = vehicle1;
// console.log(vehicle1SN, vehicle1PR);
// console.log(vehicle2SN, vehicle2PR);

// THIS CLASS

// function Vehicle(id, name, serialNum, price) {
//   this.id = id;
//   this.name = name;
//   this.serialNumber = serialNum;
//   this.price = price;

//   this.printVehicle = function () {
//     console.log(
//       `${this.id} - ${this.name} - ${this.serialNumber} - ${this.price}$`
//     );
//   };
// }

// let vehicle = new Vehicle(1, "BMW", "ASDAS123123123", 7000);
// let wheeledVehicle = Object.create(vehicle);
// Obejct.create(new Vehicle(1, "BMW", "ASDAS123123123", 7000))
// wheeledVehicle.drive = function () {
//   console.log("BRMMMMMMMMMMMMM");
// };

// let car = Object.create(wheeledVehicle);
// car.fuelTank = 30;
// car.drive();
// car.printVehicle();
// console.log(car.name);
// console.log(car);

// let wheeledVehicle1 = new Vehicle(12, "Yugo", "123123123", 500);
// let wheeledVehicle2 = {};
// wheeledVehicle2.__proto__ = wheeledVehicle1;
// wheeledVehicle2.__proto__ = new Vehicle(13, "AUDI", "123123123", 7500);

// console.log(wheeledVehicle2.__proto__.name);

function Vehicle(id, name, serialNum, price) {
  this.id = id;
  this.name = name;
  this.serialNumber = serialNum;
  this.price = price;
  this.company = "gocesOrg";

  this.printVehicle = function () {
    console.log(
      `${this.id} - ${this.name} - ${this.serialNumber} - ${this.price}$`
    );
  };
}

function WheeledVehicle(id, name, serialNum, price, wheels) {
  // this.__proto__ = Object.create(new Vehicle(id, name, serialNum, price));
  Object.setPrototypeOf(this, new Vehicle(id, name, serialNum, price));
  this.wheels = wheels;
  this.drive = function () {
    console.log(`Driving on ${this.wheels} wheels!`);
  };
}

function Car(id, name, serialNum, price, wheels, fuelTank) {
  Object.setPrototypeOf(
    this,
    new WheeledVehicle(id, name, serialNum, price, wheels)
  );
  this.fuelTank = fuelTank;
  this.slurp = function () {
    console.log("PIJAM MNOGU GORIVO, TROSAM KAKO MECKA!");
  };
}

function TwoDoorsCar(id, name, serialNum, price, wheels, fuelTank) {
  Object.setPrototypeOf(
    this,
    new Car(id, name, serialNum, price, wheels, fuelTank)
  );
  this.random = "random";
}

// WheeledVehicle.prototype = Object.create(new Vehicle());
// let wheeledVehicle = new WheeledVehicle(4, "CAR");
// wheeledVehicle.id = 123;
// wheeledVehicle.serialNumber = "1123123"
// console.log(wheeledVehicle);

// let wheeledVehicle = new WheeledVehicle(1, "YUGO", "123123123123", 1234, 4);
// console.log(wheeledVehicle);

// let car = new Car(1, "Mazda", "123123", 900, 4, 50);
let car = new TwoDoorsCar(1, "Mazda", "123123", 900, 4, 50);

let newCar = new car.constructor(2, "PLANE", "21312332141245125", 999);
newCar.name = "AUDI";

console.log(newCar);
console.log(car);
// console.log(car);
// console.log(Object.getPrototypeOf(car));
