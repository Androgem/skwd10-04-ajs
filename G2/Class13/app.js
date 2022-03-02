class Vehicle {
    constructor(id, name, price, owner) {
        this.id = id;
        this.name = name;
        this.price = price;
        debugger
        this.owner = owner; //set
    }

    printOwner() {
        debugger
        console.log(`Owner ${this.owner}`); //get
    }

    get owner() {
        debugger
        console.log("Getting the value of owner...");
        return this._owner;
    }

    // set owner(ownerName) {
    //     debugger
    //      try {
    //          console.log("Setting the value of owner");
    //          if (!ownerName) {
    //              throw new Error("Invalid owner value");
    //          }
    //      }
    //      catch (error) {
    //          console.log(error);
    //      }
    //      this._owner = ownerName;
    //  } 

    set owner(ownerName) {
       debugger
            console.log("Setting the value of owner");
            if (!ownerName) {
                throw new Error("Invalid owner value");
            }
       
          
        this._owner = ownerName + "test";
        console.log(this._owner);
    } 
}

let vehicle = new Vehicle(1, "Opel", 15000, "SEDC");
vehicle.printOwner();
vehicle.owner = "academy"; //set
console.log(vehicle.owner); //get