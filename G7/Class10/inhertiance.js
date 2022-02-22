let arr = [1]
// console.log(arr.map);
let obj = {}
// console.log(obj.toString());

function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = `${price} euro`;
    this.startEngine = () => {
        console.log('brm brm brm')
    }
}
Vehicle.stopEngine = function() {
    console.log('stopping engine');
}
// Object.keys = () => console.log('OMG WHAT HAVE I DONE, HOW WILL I GET THE KEYS NOW?!?!?')
Object.prototype.keys = Object.keys;
function WheeledVehicle(wheels, name, id, batchNo, price) {
    Object.setPrototypeOf(this, new Vehicle(id, name, batchNo, price))
    this.wheels = wheels;
}
// WheeledVehicle.prototype = new Vehicle();

// console.log(WheeledVehicle.prototype)

function Car(doors, fuelCapacity, name, id, batchNo, price) {
    Object.setPrototypeOf(
        this, 
        new WheeledVehicle(4, name, id, batchNo, price)
    );
    this.doors = doors;
    this.fuelCapacity = fuelCapacity
}

const myBike = new WheeledVehicle(2, 'Honda Rebel 500', 666, 76, 8200);
// Car.prototype = new WheeledVehicle();

const myCar = new Car(4, 60, 'Peugeout', 12312, 74, 2000)
console.log({myCar, myBike})

const myObjLiteral = Object.create(Vehicle);

car = {
    myProperty: 1,
    batchNo: 2,
    prototype: {
        wheels: 4,
        prototype: {
            batchNo: 45,
            prototype: {
                Objectproperties
            }
        }
    }
}
car.batchNo
