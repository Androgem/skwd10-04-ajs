let dog = {
    dogName : "Barnie",
    dogColor: "brown",
    dogAge: 3
};

console.log(dog.dogName);

const {dogName, dogColor, dogAge} = dog;
console.log("after destructuring:");
console.log(dogName);
console.log(dogAge);

function Dog(name, color, age){
    this.name = name;
    this.color= color;
    this.age = age;
}
let anotherDog = new Dog("Sparkie", "brown", 4);
const {name, color} = anotherDog;
console.log(name);
console.log(anotherDog.name);

let student = {
    firstName: "John",
    age: 35,
    grades: {
        JavaScript : 9,
        CSharp : 10
    }
}
function printStudent(stud){
    console.log(stud.firstName);
    console.log(stud.grades.JavaScript);
}
printStudent(student);

function displayInfo({firstName, grades : {JavaScript, CSharp}}){
    console.log("JS grade "+ JavaScript);
    console.log("C# grade "+ CSharp);
}
displayInfo(student);


console.log("====array destructuring====");
let rgb = [255, 0, 200, 10];
let [r, g, b] = rgb;
console.log(`r : ${r}`);
console.log(`g : ${g}`);
console.log(`b : ${b}`);

console.log("====spread=====");
let numbers = [2,5,7];

function sumNumbers(num1, num2, num3, num4){
    console.log(`${num1} ${num2} ${num3} ${num4}`);
    return num1 + num2 + num3;
}

let result = sumNumbers(...numbers);

let res = [...numbers]; //copy
console.log(res);