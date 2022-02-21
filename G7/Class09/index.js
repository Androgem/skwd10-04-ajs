// object

const volvo = { make: 'Volvo' };
const lada = Object.create({ make: 'Lada' });
const bmw = new Object({ make: 'BMW' });
// console.log({ volvo, lada, bmw });

// let crysler = volvo;
// console.log({ crysler })
// crysler = 'Not an object'
// console.log({ crysler })

const myDog = { 
    name: 'Freya', 
    breed: 'Dogo Argentino', 
    color: 'white', 
    age: 1, 
    hasOwner: true, 
    favoriteFood: 'All the foods'
}

const yourDog = { 
    name: 'unnamed', 
    breed: 'Yorkie', 
    color: 'gray and brown', 
    age: .6, 
    hasOwner: true, 
    favoriteFood: 'chicken kibble'
}

function Dog(name, breed, color, age, hasOwner, favoriteFood) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
    this.hasOwner = hasOwner;
    this.favortiteFood = favoriteFood;
}

const freya = new Dog('Freya', 'Dogo Argentino', 'white', 1, true, 'All foods');
const yorkie = new Dog('Bono', 'Yorkie', 'gray and brown', .6, true, 'chicken kibble');
freya.medicalHistory = '';
// console.log({myDog, yourDog, freya})

// this
function whatIsThis() {
    return this;
}

// console.log(whatIsThis())

const obj = { name: 'Toni Zen', profession: 'Artist', whoAmI: whatIsThis  };

// console.log(obj.whoAmI())


// error handling
function returnFullName(firstName = '', lastName = '') {
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
        return 'You need to send string values as arguments to this function';
    }
    
    return `${firstName} ${lastName}`
}