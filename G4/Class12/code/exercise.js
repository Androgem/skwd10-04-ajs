class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    set type(data) {
        data = data.toLowerCase();
        if(data !== 'carnivore' && data !== "omnivore" && data !== "herbivore") {
            throw new Error('There is no such type');
        } else {
            this._type = data;
        }
    }

    get type() {
        return this._type;
    }

    eat(food) {
        if(food instanceof Animal) {
            if(this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`)
                return;
            }

            if(this.size >= food.size * 2) {
                food.isEaten = true;
                console.log(`The animal ${this.name} ate the ${food.name}`)
                return;
            } else {
                console.log(`The animal ${this.name} tried to eat the ${food.name} but it was too large`)
                return;
            }
        }

        console.log(`The animal ${this.name} is eating ${food}`);
    }
}

let lion = new Animal("lion", "carnivore", 2, 250);
let elephant = new Animal("elephant", "herbivore", 6, 2000);
let mouse = new Animal("mouse", "omnivore", 1, 2);

lion.eat(elephant);
lion.eat("dog");
elephant.eat(mouse);
mouse.eat(elephant);
lion.eat(mouse);