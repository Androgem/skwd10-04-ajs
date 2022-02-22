function Vehicle(id, name, seriesNum, price){
    this.id = id;
    this.name = name;
    this.seriesNum = seriesNum;
    this.price = price;
    this.printVehicle = function(){
        console.log(`Info: ${this.id} - ${this.name} - ${this.price}`);
    }
}

function WheeledVehicle(numberOfWheels, name){
    this.numberOfWheels = numberOfWheels;
    this.name = name;
    this.drive = function(){
    console.log("You are driving a wheeled vehicle. Drive carefully!");
    }
}

let example = new WheeledVehicle(4, "BMW");
console.log(example);

WheeledVehicle.prototype = Object.create(new Vehicle());

let wheeledVehicle = new WheeledVehicle(4, "Renault");
console.log(wheeledVehicle);
console.log(wheeledVehicle.name);
console.log(wheeledVehicle.seriesNum);

WheeledVehicle.prototype.stop = function(){
    console.log(`The vehicle ${this.name} stopped.`);
}

wheeledVehicle.stop();

let secondWheeledVehicle = new WheeledVehicle(2, "Bike");
secondWheeledVehicle.stop();
