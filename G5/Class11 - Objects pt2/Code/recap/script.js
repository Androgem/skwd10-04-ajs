console.log("Connected.");

// Object Methods

let dog = {
    name: "Jacky",
    isHappy: true,
    bark: () => console.log(`Bark Bark!`)
};

console.log(dog);
let barnie = Object.create(dog);
console.log(barnie);
barnie.bark();
barnie.name = "Barnie";
barnie.hasOwner = true;

console.log(barnie);

let bucky = new Object();
console.log(bucky);

let addressInfo = {
    street: "Dogge Street",
    streetNumber: 25,
    contactPerson: "5435345345345"
};

// assign
let barnieChip = Object.assign(barnie, addressInfo);
console.log(barnie);

// keys 
console.log(Object.keys(barnie)); // result is array of strings

barnie.printProperties = function(){
    Object.keys(this).forEach(key => console.log(key));
};
barnie.printProperties();

// values 
console.log(Object.values(barnie));

barnie.printValues = function(){
    Object.values(this).forEach(key => console.log(key));
};
barnie.printValues();

console.log("------------Objects part 2  ------");

function Vehicle(id, name, batchNo, price){
    this.id = id;
    this.name = name;
    this.batchNumber = batchNo;
    this.price = price;
    this.company = "Tesla Inc.";
    this.printVehicle = function(){
        console.log(`${this.id}. ${this.name} | Batch: ${this.batchNumber}, Price: ${this.price}`);
    }
};

let vehicleOne = new Vehicle(1, "Tesla", "3543534", 25000);
// With the create method, we create a new object that inhertis from the object given
let wheeledVehicle = Object.create(vehicleOne);
wheeledVehicle.model = "Tesla Model X";
wheeledVehicle.numOfWheels = 4;

console.log(wheeledVehicle);
wheeledVehicle.printVehicle();

wheeledVehicle.printCarInfo = function(){
    console.log(`${this.id + 10} - ${this.model} | ${this.company}`);
}

wheeledVehicle.printCarInfo();
console.log(wheeledVehicle);

console.log("-----------------------------");

function Animal(id, type){
    this.id = id;
    this.type = type;
    this.printInfo = function(){
        console.log(`This animal is ${this.type}`);
    }
};

let someAnimal = new Animal(1, "Dog");

let dogBucky = Object.create(someAnimal);
dogBucky.name = "Bucky";
dogBucky.race = "Labrador";

console.log(dogBucky);
dogBucky.printInfo();
