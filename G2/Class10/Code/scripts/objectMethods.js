let dog = {
    isHappy : true,
    bark : function(){
        console.log("BARK BARK");
    }
}

//copy -> different reference
let newDog = Object.create(dog);
console.log(newDog.isHappy);
newDog.name = "Barnie";
console.log(dog);
console.log(newDog);
newDog.age = 20;
console.log(dog.age); //undefined

let barnieTwin = Object.create(newDog);
console.log(barnieTwin.name);
console.log(barnieTwin.age);

console.log("====Object.assign=====");

let addressInfo = {
    street: "Dog street",
    streetNumber : 20
};

//same reference
let barnieTwinUpdated =  Object.assign(barnieTwin, addressInfo);
console.log(barnieTwin.street);
console.log(barnieTwinUpdated.street);
console.log(barnieTwin.name);


