let dog = {
    name : "Sparky",
    age : 3,
    isHappy : true,
    bark : function(){
        console.log("BARK BARK");
    },
    printMembers : function(){
        console.log("Members:");
        Object.keys(this).forEach(key => console.log(key));
    }
}

dog.printMembers();

//check if member (property or method) exists
console.log(dog.hasOwnProperty("bark"));
console.log(dog.hasOwnProperty("favouriteFood"));

//Object.keys returns array
console.log("third member:");
console.log(Object.keys(dog)[2]);
dog.isHappy = false;
dog['isHappy'] = false;
dog[Object.keys(dog)[2]] = false;

//values of all members (property or method)
dog.printValues = function(){
    console.log("Values:");
    Object.values(this).forEach(v => console.log(v));
}
dog.printValues();

console.log(Object.values(dog)[3]);
Object.values(dog)[3]();


//FREEZE - can not change values or structure
let barnie = {
    name: "Barnie",
    friend: "Sparky"
}
Object.freeze(barnie);
barnie.friend = "Amy";
barnie.age = 5;
console.log(barnie);

//SEAL - can not change structure
let sparky = {
    name : "Sparky",
    friend : "Amy"
}
Object.seal(sparky);
sparky.friend = "Barnie"; //this is allowed
sparky.age = 5; //this is not allowed
console.log(sparky);