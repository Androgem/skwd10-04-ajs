const array = [1,23,465,56,2,543,67,5765,23,4];

let result = array.reduce((arr, num) => {
    if (num % 2 === 0) {
        arr.push(num + 2);
    }
    return arr;
}, []) 

//array.filter(num => num % 2 === 0).map(evenNum => evenNum + 2);

// console.log({result})

const numbers = [175, 50, 25];

// console.log(numbers.reduce(myFunc, ''));

function myFunc(total, num) {
    return total + num;
}

// call stack

function one() {
    two();
    two();
}
function two() {
    three();
    three();
}
function three() {
    four();
    four();
}
function four() {
    console.log('What dont u understand Vedra? :)')
}

// one();

// count to 5
// console.log('1')
// setTimeout(() => {console.log('2')}, 2000)
// setTimeout(() => {console.log('3')}, 4000)
// setTimeout(() => {alert('4')}, 6000)
// setTimeout(() => {console.log('5')}, 8000)

// let interval = setInterval(() => console.log('I get called every 2 seconds'), 2000);

// document.getElementById('stop').addEventListener('click', () => {
//     clearInterval(interval);
// })


// callbacks

// function first() {
//     setTimeout(() => console.log('ajax call to SWAPI'), 1000)
//     console.log('Making the call to SWAPI!');
// }
// function second() {
//     console.log('Working with the results of first()');
// }

// first();
// second();


function first(callback) {
    setTimeout(() => {
        console.log('ajax call to SWAPI')
        callback();
    }, 1000)
    console.log('Making the call to SWAPI!');
}

function second() {
    console.log('Working with the results of first()');
}

// first(second);


function getLukeHere(url, callback) {
    fetch(url)
    .then(r => r.json())
    .then(r => callback(r)).catch(err => console.log(err));
}

getLukeHere('https://swapi.dev/api/people/1', getLukeToTheConsole);

function getLukeToTheConsole(Luke) {
    console.log(Luke);
}

