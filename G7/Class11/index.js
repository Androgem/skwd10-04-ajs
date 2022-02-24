function MasterFunction(masterProp){
    this.masterProp = masterProp;
}
function MyConstructorFunc(prop1, prop2, masterProp) {
    Object.setPrototypeOf(this, new MasterFunction(masterProp))
    this.prop1 = prop1;
    this.prop2 = prop2
}

const obj = new MyConstructorFunc('prop1', 'prop2');
// console.log(obj)

class Vehicle {
    constructor(id, name, batch, price) {
        this.id    = id;
        this.name  = name;
        this.batch = batch;
        this.price = price
    }
}


class WheeldVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
        super(id, name, batch, price);
        this.wheels = wheels;
    }
    changeTire() {
        return 'Flat tire changed successfuly';
    }
}

const myVehicle = new WheeldVehicle(27, 'Car', 3242, 3000, 4);
console.log(myVehicle);

console.log(myVehicle.changeTire());

class Car extends WheeldVehicle {
    constructor(id, name, batch, price, doors, ac) {
        super(id, name, batch, price, 4);
        this.doors = doors;
        this.airConditioning = ac;
    }
    static addAc(car) {
        if (!car.airConditioning) {
            car.airConditioning = true;
            console.log(`${car.name} now has A/C wohooo!!`)
        } else {
            console.log(`${car.name} already has A/C u noob.`)
        }
    }
}

const myCar = new Car(2, 'Peugeot', 213, 3000, 4, true);
const myOtherVar = new Car(3, 'Tarabant', 213, 7, 4, false);

Array.isArray(myOtherVar)
