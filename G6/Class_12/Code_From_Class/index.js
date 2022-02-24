import { sayHello, sayGoodBye } from "./modules/helloService.js";

sayHello("Goce Kabov");
console.log("-------------------------------------------");
sayGoodBye("Goce Kabov");

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHi = () => {
    console.log(`Hi My name is ${this.name}`);
  };
}

let p = {
  name: "Goce",
  sayHi: () => {
    console.log(`Hi my name is ${name}`);
  },
};

p.sayHi();

// let person = new Person("Goce", 29);
// person.sayHi();
