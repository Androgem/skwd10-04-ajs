console.log("Objects pt2");

function Vehicle(id, name, batchNo, price){
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "Tesla Inc.";
    this.printVehicle = function(){
        console.log(`${this.id}. ${this.name} | BATCH:${this.batchNo}, PRICE: ${this.price}`)
    }
};

// function WheeledVehicle(wheels, name){
//     this.wheels = wheels;
//     this.name = name;
//     this.drive = function(){
//         console.log(`Driving on ${this.wheels} wheels`);
//     }
// }

// WheeledVehicle.prototype = Object.create(new Vehicle());
// let firstCar = new WheeledVehicle(4, "Audi");
// firstCar.id = 2;
// firstCar.price = 5000;
// firstCar.batchNo = "A54654";

// firstCar.printVehicle();
// firstCar.drive();

// console.log(firstCar);
// // adding method on to the prototype
// WheeledVehicle.prototype.stop = function(){
//     console.log(`The vehicle ${this.name} stopped`);
// }

// firstCar.stop();

// // accessing prototype
// console.log(firstCar.company);
// console.log(firstCar.__proto__.__proto__.company);

function WheeledVehicle(id, batchNo, name, price, numberOfWheels){
    Object.setPrototypeOf(this, new Vehicle(id, name, batchNo, price));
    this.numberOfWheels = numberOfWheels;
    this.drive = function(){
        console.log(`We are driving ${this.name} vehicle`);
    }
};

let vehicleTwo = new WheeledVehicle(5, "54354", "Skoda", 3000, 4);
console.log(vehicleTwo);
vehicleTwo.drive();

function Car(id, batch, name, price, doors, fuelCapacity){
    // this.__proto__ = Object.create(new Vehicle(id, name, batch, price));
    Object.setPrototypeOf(this, new WheeledVehicle(id, batch, name, price, 4));
    this.name = name;
    this.doors = doors;
    this.fuelCapacity = fuelCapacity;
    this.drift = function(){
        console.log(`This ${this.name} can drift`);
    }
};

let carOne = new Car(10, "1001123", "BMW", 3000, 5, 60);
console.log(carOne);
carOne.printVehicle();

// check objects prototype // Object.getPrototypeOf()

console.log(Object.getPrototypeOf(carOne));
console.log(Object.getPrototypeOf(vehicleTwo));

// constructor

console.log(carOne.constructor);

let anotherCar = new carOne.constructor(15, "Chevy", "B543", 5100);
console.log(anotherCar);
