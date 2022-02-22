function ObjTemplate(a, b, c) {
    this.b = b;
    this.a = a;
    this.c = c;
}

const obj = new ObjTemplate(1,2,3);

// console.log(obj);

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


// Spread/rest operator

function printValues(...vals) {
    vals.length
    console.log(vals[0]);
}


const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
const arrComplete = [...arr1, ...arr2];
const arr3 = [0, ...arr1, ...arr2, 10];
const arrayCopy = [...arr1];

const [head, ...tail] = arr3;
// console.log(head, tail)

const secondObj = { d: 4, e: 5, f: 6, ...obj, a: 'String value' };

const thridObj = { ...secondObj, ...obj };

// console.log(secondObj)

// console.log(thridObj)

// Destructing

// hard way
// const first = arr3[0];
// const second = arr3[1];
// const fifth = arr3[4];

//ez way
const [first,,third,,fifth,,,n] = arr3;

const me = {
    name: 'Igor',
    nickname: 'Igeto',
    lastVisited: 'Right now',
    hometown: {
        name: 'Bitola',
        landmarks: ['Sato', 'Magnolija', 'Butikite']
    }
}

// const myName = me.name;
const {
    name, 
    nickname, 
    hometown: {
        name: hometownName, 
        landmarks: [sato,,butki]
    }
} = me;

function someFunction(obj) {
    const {param1, param3 = 'string', param2 = 0} = obj;
    
    console.log(param1, param2, param3)
}
const optionsObj = {param1: 'some value', param2: 435345, param4: 'some other value'};
// someFunction(optionsObj)

// console.log(name, nickname, ' from ', hometownName, 'kaj', sato)
