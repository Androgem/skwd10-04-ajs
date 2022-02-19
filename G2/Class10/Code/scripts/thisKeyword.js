console.log(this); //global scope -> window

console.log("===inside a function===");
function greeting(){
    console.log(this); //window
    console.log("Hi");
}
greeting(); //window.greeting();

console.log("===inside objects (object literals)===");
let someObject = {
    someProperty: this, //window
    someMethod: function(){
        console.log(this); //someObject
    }
};
console.log(someObject.someProperty);
someObject.someMethod();


const a = 8;
console.log(window.a); //undefined

let obj = {
    prop : a
}
console.log(obj.prop);

console.log("constructor functions")
function SomeTemplate(someString){
    this.description = someString;
    console.log(this);
    this.exampleMethod = function(){
        console.log("Example method:");
        console.log(this);
    }
}

//use as normal function (no new keyword)
SomeTemplate("test"); //window.SomeTemplate("test");
let ourObject = new SomeTemplate("our string");
ourObject.exampleMethod();