function sayHello(name){
    console.log(`Hello ${name}`);
}

function sayGoodbye(name){
    console.log(`Bye ${name}`);
}

function sum(num1, num2){
    return num1 + num2;
}

let result = sum(7,8);

//EXPORT
module.exports = {
    sayHello: sayHello,
    sayGoodBye: sayGoodbye,
    result: result
}