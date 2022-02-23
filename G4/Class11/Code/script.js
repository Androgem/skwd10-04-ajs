// function Vehicle(id, name, batchNo, price){
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = "moce.inc";
//     this.printVehicle = function(){
//         console.log(`${id}. ${name}, BATCH: ${batchNo}, ${price}$`);
//     }
// }

// let wheeledVehicle = Object.create(new Vehicle(12, "Yugo", "25B", 500));
// wheeledVehicle.drive = function() {console.log("WROOM!")}
// let car = Object.create(wheeledVehicle);
// car.fuelTank = 32;
// car.drive(); // WROOM!
// car.printVehicle(); // Prints vehicle
// console.log(car);

// let wheeledVehicle1 = new Vehicle(13, "stojadin", "44s", 400);
// let wheeledVehicle2 = {};
// wheeledVehicle2.__proto__ = new Vehicle(12, "Yugo", "25B", 500);
// console.log(wheeledVehicle1);
// console.log(wheeledVehicle);
// console.log(wheeledVehicle.name);
// wheeledVehicle.name = "Buba";
// console.log(wheeledVehicle.name);
// console.log(wheeledVehicle.__proto__.name);

// function Vehicle(id, name, batchNo, price){
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = "moce.inc";
//     this.printVehicle = function(){
//         console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
//     }
// }
// function WheeledVehicle(wheels, name){
//     this.wheels = wheels;
//     this.name = name;
//     this.drive = function(){
//         console.log(`Driving on ${this.wheels} wheels!`);
//     }
// }
// WheeledVehicle.prototype = Object.create(new Vehicle());
// let car = new WheeledVehicle(4, "Yugo");
// car.price = 500;
// car.id = 2;
// car.batchNo = "24a";
// car.printVehicle();  // prints Yugo
// console.log(car);

// WheeledVehicle.prototype.stop = function(){
//     console.log(`The vehicle ${this.name} stopped.`);
// }
// car.stop();

function Vehicle(id, name, batchNo, price){
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "moce.inc";
    this.printVehicle = function(){
        console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
    }
}
//function WheeledVehicle(id, name, batch, price, wheels){
function WheeledVehicle(id, batch, price, name, wheels){

    Object.setPrototypeOf(this, new Vehicle(id, name, batch, price))
    this.wheels = wheels;
    this.drive = function(){
        console.log(`Driving on ${this.wheels} wheels!`);
    }
}

//let someWheeledVehicle = new WheeledVehicle(1, "bmw", "b23", 9000, 4);
let someWheeledVehicle = new WheeledVehicle(1, "b23", 9000, "bmw", 4);
console.log(someWheeledVehicle);
console.log(someWheeledVehicle.name);
someWheeledVehicle.drive();
someWheeledVehicle.printVehicle();

function Car(id, batch, price, name, doors, fuelCapacity){
    Object.setPrototypeOf(this, new WheeledVehicle(id, batch, price, name, 4))
    this.name = name;
    this.doors = doors;
    this.fuelCapacity = fuelCapacity;
    this.drift = function(){
        console.log(`The ${this.name} is drifting!`);
    }
}

let someCar = new Car(99, "b2", 200000000, "Ferrari", 3, 100);
console.log(someCar);
someCar.printVehicle();
someCar.drive();
someCar.drift();

let newVehicle = new someCar.constructor(1, "plane", "fh4", 999999);  // new Vehicle
console.log(newVehicle);


function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.getFullName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
function Student(academyName, id, first, last, age){
    Object.setPrototypeOf(this, new Person(first, last, age));
    this.academyName = academyName;
    this.id = id;
    this.study = function(){
        console.log(`The student ${this.firstName} is studying in ${this.academyName} academy!`);
    }
}

let student1 = new Student("Code", 1, "Pero", "Perovski", 50);
let student2 = new Student("Data Science", 2, "Chandler", "Bing", 30);
console.log(student1);
console.log(student2);
student1.getFullName();
student2.study();

function CodeStudent(id, first, last, age){
    Object.setPrototypeOf(this, new Student("Code", id, first, last, age))
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.doProject = function(type){
        if(type === "individual") this.hasIndividualProject = true;
        if(type === "group") this.hasGroupProject = true;
    }
}

let student3 = new CodeStudent(3, "Michael", "Scott", 20);
console.log(student3.hasIndividualProject);
student3.doProject("individual");
console.log(student3.hasIndividualProject);

function DesignStudent(first, sOfMonth, id, last, age){
    Object.setPrototypeOf(this, new Student("Design", id, first, last, age));
    this.isStudentOfMonth = sOfMonth;
    this.attendAdobeExam = function(){
        console.log(`This student ${this.firstName} is taking an adobe exam!`);
    }
}

let student4 = new DesignStudent("Bobi", true, 9, "Jovanov", 19);
console.log(student4);

function NetworkStudent(first, id, last, age, part){
    Object.setPrototypeOf(this, new Student("Network", id, first, last, age));
    this.academyPart = part;
    this.attendCiscoExam = function(){
        console.log(`This student ${this.firstName} is taking an cisco exam !`);
    }
}

let student5 = new NetworkStudent("Zoran", 10, "Bratmu na Goran", "6 meseci", 2);
console.log(student5);