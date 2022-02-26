function Vehicle(id, name, seriesNum, price){
    this.id = id;
    this.name = name;
    this.seriesNum = seriesNum;
    this.price = price;
    this.printVehicle = function(){
        console.log(`Vehicle: ${this.name} ${this.seriesNum} ${this.price}Euros`);
    }
}
let vehicle = new Vehicle(4, "Test", "sdfj", 100);

function WheeledVehicle(id, name, seriesNum, price, numberOfWheels){
    Object.setPrototypeOf(this, new Vehicle(id, name, seriesNum, price));
    this.numberOfWheels = numberOfWheels;
    this.drive = function(){
        console.log("We are driving carefully!");
    }
}

 let wheeledVehicle = new WheeledVehicle(1, "BMW", "324234", 100000, 4);
 console.log(wheeledVehicle);
 console.log(`Price: ${wheeledVehicle.price}`);
 wheeledVehicle.printVehicle();
 wheeledVehicle.drive();

function Car(id, name, seriesNum, price, numberOfWheels, fuelTank){
    Object.setPrototypeOf(this, new WheeledVehicle(id, name, seriesNum, price, numberOfWheels));
    this.fuelTank = fuelTank;
    this.stop = function(){
        console.log("The car stopped!");
    }
}

let car = new Car(2, "Mercedes", "242eew53", 150000, 4, 60);
console.log(car);

let secondCar = new Car(3, "Opel", "453453", 20000, 30);
car.price = 120000;

console.log(car);
console.log(car.price);

console.log(car.__proto__.__proto__.price);

console.log("Prototype of car:");
console.log(Object.getPrototypeOf(car));

console.log("Prototype of wheeled vehicle:");
console.log(Object.getPrototypeOf(wheeledVehicle));

console.log(car.constructor);
console.log(vehicle.constructor);