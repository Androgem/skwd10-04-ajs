class Vehicle{
    constructor(id, name, seriesNum, price){
        this.id = id;
        this.name = name;
        this.seriesNum = seriesNum;
        this.price = price;
    }
    printVehicle(){
        console.log(`Vehicle: ${this.name} ${this.seriesNum} ${this.price}Euros`);
    }
}

//CLASSES -> TEMPLATES
//OBJECTS -> INSTANCES

let car = new Vehicle(1, "BMW", "73284", 100000); //constructor is called
console.log(car);
console.log(car.price);
car.printVehicle();

let boat = new Vehicle(2, "Our boat", "24324234", 200000);
boat.printVehicle();

//INHERITANCE
class WheeledVehicle extends Vehicle{
    constructor(id, name, seriesNum, price, numOfWheels){
        //super -> constructor of Vehicle
        //initialize the inherited properties
        super(id, name, seriesNum, price);
        //specific properties for WheeledVehicle
        this.numOfWheels = numOfWheels;
    }
    driveWheeledVehicle(){
        console.log(`Drive carefully the ${this.name}`);
    }
}
//bike is object (instance of WheeledVehicle)
let bike = new WheeledVehicle(3, "Super bike", "54354", 200, 2);
console.log(bike);
bike.printVehicle();
bike.driveWheeledVehicle();

//STATIC
class Car extends WheeledVehicle{
    constructor(id, name, seriesNum, price, numOfWheels, numOfDoors, hasAC){
        //super -> constructor of WheeledVehicle
        super(id, name, seriesNum, price, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.hasAC = hasAC;
    }
    buyCar(money) {
	    money >= this.price ? console.log("Congrats! You bought a car") : 
		console.log(`You need ${this.price - money} more to buy this car!`);
    }
    //belongs to the class, not to the objects
    //we don't use this
    static addAirConditioning(carObject){
        if(carObject.hasAC){
            console.log("The car already has ac");
        }
        else{
            carObject.hasAC = true;
            carObject.price += 500;
        }
    }
    static isRentable = false;
    static numOfManufacturedCars = 0;
}

let newCar = new Car(5, "Mercedes", "4325", 120000, 4, 5, true);
newCar.buyCar(100000);
Car.numOfManufacturedCars++;
console.log(newCar.name);
Car.addAirConditioning(newCar);
console.log(Car.isRentable);

Car.isRentable = true;
console.log(Car.isRentable);


