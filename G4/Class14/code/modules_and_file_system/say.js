function sayHello(name) {
    return `Hello ${name}`
}

function sayGoodbay(name) {
    return `Goodbye ${name}`
}

// this will export only the last function
// module.exports = sayHello
// module.exports = sayGodbay

module.exports = {
    hello: sayHello,
    bye: sayGoodbay,
}