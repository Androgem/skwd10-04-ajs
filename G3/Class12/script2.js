class Vehicle {
    constructor(id, name, batch, price, showLog = false) {
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.price = price;
        this.company = 'Move.Inc';
        if (showLog) {
            console.log("Im the constructor of Vehicle!");
        }
    }

    printVehicle() {
        console.log(`${this.id}. ${this.name}`);
    }    
}

let vehicle = new Vehicle(1, 'Yugo', '1A2D', 100);
console.log(vehicle);
vehicle.printVehicle();

class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
        super(id, name, batch, price, true);
        console.log("Im the constructor of WheeledVehicle!");
        this.wheels = wheels;
    }
}

let wheeledVehicle = new WheeledVehicle(2, '101', 'ABC1', 200, 4);
console.log(wheeledVehicle);

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, wheels, doors, ac) {
        super(id, name, batch, price, wheels);
        console.log("Im the constructor of Car!");
        this.doors = doors;
        this.ac = ac;
        if (ac) {
            this.price += 400;
        }
    }
}

let car = new Car(3, 'Fico', 'AZ1', 200, 4, 2, true);
console.log(car);

class ElectricCar extends Car {
    constructor(id, name, batch, price, wheels, doors, owner) {
        super(id, name, batch, price, wheels, doors, true);
        this.owner = owner;
        this.something = 'a';
    }

    get owner() {
        console.log("We are getting the name of the owner. Please wait....");
        return 'The car is owned by: ' + this._owner;
    }

    set owner(ownerName) {
        console.log("We are setting the name of the owner. Please wait....");
        ownerName.length > 1 ? this._owner = ownerName : this._owner = null;
    }

    get something() {
        return 'Always returning something';
    }

    set something(value) {
        this._something = 'I dont care about the value';
    }

    // // default getter and setter
    // get owner() {
    //     return this._owner;
    // }

    // set owner(ownerName) {
    //     this._owner = ownerName
    // }
}

let electricCar = new ElectricCar(5, 'Tesla', 'AS12', 150, 4, 3, 'Trajan');
console.log(electricCar);

electricCar.owner = 'Nikola';
console.log(electricCar.owner);
let carOwner = electricCar.owner;
console.log(carOwner);

electricCar.owner = 'a';
console.log(electricCar.owner);

console.log(electricCar.something);
