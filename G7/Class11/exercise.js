class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type =  type || 'herbivore' || 'carnivore' || 'omnivore';
        this.age = age;
        this.size - size;
        this.isEaten = false;
    }
    eat(animal) {
        if (!(animal instanceof Animal)) {
            return `${this.name} only eats animals`
        }
        if (animal instanceof Animal && this.type === 'herbivore') {
            return `The animal ${this.name} is a herbivore and does not eat other animals`
        } if (animal instanceof Animal && this.type !== 'herbivore') {
            if (animal.size >= (this.size * 2)) {
                return `The animal ${this.name} tried to eat the ${animal.name} but it was too large`
            } else {
                animal.isEaten = true;
                return `The animal ${this.name} ate the ${animal.name}`
            }
        }  if (!animal) {
            return`The animal ${this.name} has nothing to eat`
        }
    }
}
 
const bono = new Animal ('Bono', 'herbivore', 2, 3)
const chicken = new Animal('chicken', 'omnivore', 6, 2)
const wolf = new Animal('Valk', 'carnivore', 7, 6)

bono.eat(chicken);