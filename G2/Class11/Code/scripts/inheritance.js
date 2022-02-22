function Vehicle(id, name, seriesNum, price){
    this.id = id;
    this.name = name;
    this.seriesNum = seriesNum;
    this.price = price;
    this.printVehicle = function(){
        console.log(`Info: ${this.id} - ${this.name} - ${this.price}`);
    }
}
let vehicle = new Vehicle(1, "Opel", "1232", 10000);
console.log(vehicle);

let wheeledVehicle = Object.create(vehicle);
console.log(wheeledVehicle);
wheeledVehicle.numberOfWheels = 4;
wheeledVehicle.drive = function(){
    console.log("You are driving a wheeled vehicle. Drive carefully!");
}
console.log(wheeledVehicle);
console.log(wheeledVehicle.numberOfWheels);
console.log(wheeledVehicle.name);
console.log(wheeledVehicle.seriesNum);

console.log(vehicle.seriesNum);

//override values
wheeledVehicle.seriesNum = "5555";
console.log(wheeledVehicle);
console.log(wheeledVehicle.id);
console.log(wheeledVehicle.name);
console.log(wheeledVehicle.seriesNum);

//access the prototype
console.log(wheeledVehicle.__proto__);
console.log(wheeledVehicle.__proto__.price);
console.log("===Series num====");
console.log(wheeledVehicle.seriesNum);
console.log(wheeledVehicle.__proto__.seriesNum);

let car = Object.create(wheeledVehicle);
console.log(car);
console.log(car.numberOfWheels); //inherited from wheeled vehicle
console.log(car.price); //inherited from vehicle
console.log(car.seriesNum); //inherited from wheeled vehicle

console.log(car.__proto__); //wheeled vehicle
console.log(car.__proto__.__proto__); //vehicle
