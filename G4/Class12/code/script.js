// Constructor
// Constructor is a function that constructs other objects by some rules and logic

function Human(name, age) {
    this.name = name;
    this.age = age;
}

let person = new Human("Pane", 29);

// console.log(person);

// console.log(person.constructor);
// console.log(person.constructor.length);
// console.log(person.constructor.name);

//CLASSES

class Vehicle {
    constructor(id, name, batch, price) {
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.price = price;
        this.company = "G4 factory"
    }

    printVehicle() {
        console.log(`${this.name}, Batch: ${this.batch}, price: ${this.price}`);
    }
}

let boat = new Vehicle(1, "Boat", "12321c", 500000);
// console.log(boat);
boat.printVehicle();

//instance with classes
class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
        super(id, name, batch, price)

        this.wheels = wheels
    }

    // printVehicle() {
    //     console.log(`${this.name}, Batch: ${this.batch}, price: ${this.price} and has ${this.wheels} wheels`);
    // }

    driveVihecle() {
        console.log(`We are driving the ${this.name} on ${this.wheels} wheels`)
    }

}

let bike = new WheeledVehicle(2, "Bmw", "13123v", 10000 ,2);

// console.log(bike);
// bike.printVehicle();
// bike.driveVihecle();

// console.log(Object.getPrototypeOf(bike));

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, wheels, engineType, ac) {
        super(id, name, batch,price, wheels)

        this.engineType = engineType;
        this.ac = ac;

        if(ac) this.price += 500;

    }

    buyCar(money) {
        money >= this.price ? 
            console.log("Congragts, you bought the car") :  
            console.log(`You need ${this.price - money} to buy this car`) 
    }


    // --------- static methods-------------- 
    // keyword STATIC

    static addAc(car) {
        if(!car.ac) {
            car.ac = true;
            car.price += 500;
            console.log("The car now has AC");
        } else {
            console.log("The car already comes with AC")
        }
    }
}

let myCar = new Car(3, "Ford", "123213d", 9000, 4, "diesel", true);

// console.log(myCar);
// myCar.printVehicle();
// myCar.driveVihecle();

// Car.addAc(myCar);

// let stojadin = new Car(99, "Zastava 101", "asdsadsad232", 300, 4, "petrol", false);
// Car.addAc(stojadin);
// console.log(stojadin);

class Calculations {
    static pi = 3.14;

    static sum(num1, num2) {
        return num1 + num2;
    }

    static difference(num1, num2) {
        return num1 - num2;
    }
}

console.log(Calculations.pi);
console.log(Calculations.sum(10, 2));
console.log(Calculations.difference(10, 2));


// ----- Getter and Setter ---------

class ElictricCar extends Car {
    constructor(id, name, batch, price, wheels, engineType, owner) {
        super(id, name, batch, price, wheels, engineType, true)

        this.owner = owner;
    }

    get owner() {
        console.log("We are getting the name of the owner!!!")
        return `The owner of this car is ${this._owner}`
        // return this._owner;
    }

    set owner(ownerName) {
        console.log("We are setting the name of the owner!!!");
        ownerName.length > 1 ?
        this._owner = ownerName :
        (() => {throw new Error("The name is too short")})()
    }
}
 
let myElectricCar = new ElictricCar(133, "Toyota", "asdasd2", 500000, 4, "hybrid", "Petre")
console.log(myElectricCar);
console.log(myElectricCar.owner);

let myTeslaCar = new ElictricCar(123, "Tesla", "1233d", 55300, 4, "electric", "Pa");
console.log(myTeslaCar);
console.log(myTeslaCar.owner)
