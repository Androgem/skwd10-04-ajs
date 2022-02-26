console.log("Objects pt3.");
// Classes in Javascript

class Vehicle{
    constructor(id, name, batchNo, price){
        this.id = id;
        this.name = name;
        this.batch = batchNo;
        this.price = price;
    }

    printVehicle(){
        console.log(`${this.id}. ${this.name} | Batch: ${this.batch}, Price: ${this.price}`);
    }
};

let boat = new Vehicle(122, "Boat", "#5BB", 50000);
console.log(boat);
boat.printVehicle();

// Inheritance with classes

class WheeledVehicle extends Vehicle{
    constructor(id, name, batchNo, price, wheels){
        super(id, name, batchNo, price)
        this.wheels = wheels;
    }
    driveVehicle(){
        console.log(`We are driving a ${this.name} vehicle with ${this.wheels} wheels`);
    }
};

let bike = new WheeledVehicle(3, "Bike", "#F10", 150, 2);
console.log(bike);
bike.printVehicle();
bike.driveVehicle();
console.log(Object.getPrototypeOf(bike));

class Car extends WheeledVehicle{
    constructor(id, name, batchNo, price, doors, ac){
        super(id, name, batchNo, price, 4)
        this.doors = doors;
        this.airCon = ac;

        if(ac) this.price += 400;
    }

    buyCar(money){
        if(money >= this.price){
            console.log(`Congrats, you purchase ${this.name} car.`);
        } else if(money < this.price){
            console.log(`You will need ${this.price - money} more to purchase this car.`);
        }
    }

    static addAirCon(car){
        if(!car.airCon){
            car.airCon = true;
            car.price += 400;
            console.log(`Your car has AC now, and now will cost ${car.price}`);
        } else {
            console.log(`Your car already have AC`);
        }
    }
};

let carOne = new Car(200, "Mazda", "#M498", 5000, 5, true);
console.log(carOne);
carOne.printVehicle();
carOne.driveVehicle();
carOne.buyCar(5000);
console.log(carOne.wheels);
console.log(Object.getPrototypeOf(carOne));

let carTwo = new Car(36, "Yugo", "Y100", 500, 3, false);
console.log(carTwo);
carTwo.buyCar(800);

Car.addAirCon(carTwo);
carTwo.buyCar(800);