// Bonus

const getFullName = (...args) => {
    return `Hello, my name is ${args[0]} ${args[1]} ${args[4]}`
};
console.log(getFullName('Igor', 'Igeto', 'Mitkovski', 'The Lecturer'));

// Function parameters

function getFullName(firstName, lastName, nickname) {
    console.log(arguments) // arguments object that will catch even undefined parameters
    return `Hello, my name is ${firstName} ${nickname} ${lastName}`;
}

getFullName('Igor', 'Igeto', 'Mitkovski') // sending all defined parameters
getFullName('Igor', '', 'Mitkovski') // sending only 2 arguments maintaining the correct order of parameters
getFullName('Igor', 'Mitkovski') // sending only 2 arguments without maintaining the correct order of parameters
getFullName('Igor', 'Igeto', 'Mitkovski', 'The Lecturer') // sending more arguments then defined parameters

// Anonymous functions

const myAnonymousFunc = function () {
    return 'I am anonymous';
}

console.log(myAnonymousFunc());

// IIFE
(function namedFunction(num){ 
    console.log(num) 
})(2);
(() => {
    console.log('You can\'t reach me from outside');
})();

namedFunction(2) // wont work

// Recursion

// DONT UNCOMMENT!!!
// function callOnMe() {
//     console.log('Hello')
//     callOnMe();
// }
// callOnMe()

function countDown(num) {
    if(num > 0){
        countDown(--num)
    }
    console.log(num);
}