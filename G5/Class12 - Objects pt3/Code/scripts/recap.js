console.log("Connected.");

function Animal(id, species, area){
    this.id = id;
    this.species = species;
    this.area = area;
    this.originOf = function(){
        console.log(`Animal Origin: ${this.species} are from ${this.area}`)
    }
};

function Mammlas(id, area, type, name, color){
    Object.setPrototypeOf(this, new Animal(id, "Mammlas", area));
    this.type = type;
    this.name = name;
    this.color = color;
    this.originOf = function(){
      console.log(`${this.name} origin: ${this.species} are from ${this.area}`);
    }
};

let gorilla = new Mammlas(12, "Africa", "Gorilla", "James", "black");
console.log(gorilla);
gorilla.originOf();

let chimpanzee = new gorilla.constructor(34, "Mongolia", "Chimpanzee", "Tony", "brown");
console.log(chimpanzee);

let something = new Object();

console.log(something.constructor);
console.dir(something.constructor);

console.log(Object.prototype.constructor);
console.dir(Object.prototype.constructor);