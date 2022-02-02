// Functions as parameters

function calculator(num1, num2, operator) {
    return operators(operator)(num1, num2);
}

function operators(operator) {
    switch (operator) {
        case '+':
            return (num1, num2) => num1 + num2
            break;
        case '-':
            return (num1, num2) => num1 - num2
            break;
        case '*':
            return (num1, num2) => num1 * num2
            break;
    
        default:
            return () => `"${operator}" is not a valid operator`
            break;
    }
}

const sum = operators('+');
const subtract = operators('-');
const multiply = operators('*');
const divide = operators('/');

console.log(calculator(1, 2, '+'));
console.log(calculator(5, 1, '-'));
console.log(calculator(10, 2, '*'));
console.log(calculator(10, 2, '/'));

// Higher order functions

const students = [
	{firstName: "Bob", lastName: "H", grade: 5, age: 19},
	{firstName: "Mel", lastName: "B", grade: 2, age: 33},
	{firstName: "Jill", lastName: "M", grade: 3, age: 15},
	{firstName: "Lucky", lastName: "J", grade: 5, age: 18},
	{firstName: "Strike", lastName: "K", grade: 4, age: 16},
	{firstName: "Eric", lastName: "I", grade: 1, age: 17}
];

// .forEach

// simple way
for(let i = 0; i < students.length; i++){
console.log(students[i].firstName);
}

function printStudent(student) {
    console.log(student.firstName);
}
students.forEach(printStudent);

// long example
students.forEach(function printStudent(student) {
    console.log(student.firstName);
});

// short example
// students.forEach(s => console.log(s.firstName));

// .filter

const underageStudents = students.filter(student => student.age < 18);
const studentsOfAge = students.filter(student => true);
console.log(studentsOfAge, students)

// .map

const igorSchool = students.map(student => {
    const {...s} = student;
    s.firstName = 'Igor';
    return s;
});
console.log(igorSchool, students)
