const array = [1,23,465,56,2,543,67,5765,23,4];

let result = array.reduce((arr, num) => {
    if (num % 2 === 0) {
        arr.push(num + 2);
    }
    return arr;
}, {}) 

//array.filter(num => num % 2 === 0).map(evenNum => evenNum + 2);

// console.log({result})

const numbers = [175, 50, 25];

console.log(numbers.reduce(myFunc, ''));

function myFunc(total, num) {
    return total + num;
}