// const num = 3;
// function multiplyBy2(inputNumber) {
//   const result = inputNumber * 2;
//   return result;
// }
// const output = multiplyBy2(num);
// const newOutput = multiplyBy2(10);

// function tenSquared() {
//   return 10*10;
// }

// function nineSquared() {
//   return 9*9;
// }

// DRY - DONT REPEAT YOURSELF

// function squereNum(num) {
//   return num * num;
// }

// function copyArrayAndMultiplyBy2(array) {
//   const output = [];
//   for (let i = 0; (i = array.length); i++) {
//     output.push(array[i] * 2);
//   }
//   return output;
// }

// const myArray = [1, 2, 3];
// const result = copyArrayAndMultiplyBy2(myArray);

// function copyArrayAndDivideBy2(array) {
//   const output = [];
//   for (let i = 0; (i = array.length); i++) {
//     output.push(array[i] / 2);
//   }
//   return output;
// }

// const myArray = [1, 2, 3];
// const result = copyArrayAndDivideBy2(myArray);

// function copyArrayAndManipulate(array, instructions) {
//   const output = [] // [2,];
//   for (let i = 0; i < array.length; i++) {
//     output.push(instructions(array[i]));
//   }
//   return output;
// }

// function multiplyBy2(input) {
//   return input * 2;
// }

// function divideBy2(input) {
//   return input * 2;
// }

// const myArray = [1, 2, 3];
// const result = copyArrayAndManipulate(myArray, multiplyBy2);
// const newOutput = copyArrayAndManipulate(myArray, divideBy2);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(`${companies[i].name} ${companies[i].category}`);
// }

// // forEach
// companies.forEach(function (company) {
//   console.log(company);
// });

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     canDrink.push(ages[i]);
//   }
// }

// // filter
// const canDrink = ages.filter(function (age) {
//   if (age >= 18) {
//     return true;
//   }
// });

const canDrink = ages.filter((age) => age >= 18);

// const retailCompanies = companies.filter(function (company) {
//   if (company.category == 'Retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);

const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end < 1990
);

// map
// const companyNames = companies.map(function (company) {
//   return company.name;
// });

const companyNames = companies.map((company) => company.name);

// const ageMap = ages
// .map((age) => Math.sqrt(age))
// .map(age => age * 4)
// .map(age => age / 2)

// sort
// const sortedCopmanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

const url =
  'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json';

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((s) => {
    const avgGradeHigherThenThree = s.filter(
      (student) => student.averageGrade >= 3
    );
    const fStudentWithAvgGradeOfFive = s
      .filter(
        (student) => student.gender == 'Female' && student.averageGrade >= 5
      )
      .map((student) => student.firstName);
    const maleStudentInSkopje = s
      .filter((student) => student.city == 'Skopje' && student.age >= 18)
      .map((student) => student.firstName + ' ' + student.lastName);
    const avgFemaleGrade = s
      .filter((student) => student.gender == 'Female' && student.age >= 24)
      .map((student) => student.averageGrade);
    const maleStudentStartingWithB = s.filter(
      (student) => student.firstName[0] == 'B' && student.averageGrade >= 2
    );
    console.log(maleStudentStartingWithB);
  });


// Impure function  ( using a variable from the outside )
let one = 1
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + one)
    }
    return result;
}

// Impure function ( changing the DOM outside of the function )
function increaseByOne(numbers) {
  let result = [];
  for(let i = 0; i < numbers.length; i++) {
  result.push(numbers[i] + 1)
      document.getElementById("result") += numbers[i] + " ";
  }
  return result;
}

// Pure function
function increaseByOne(numbers) {
  let result = [];
  for(let i = 0; i < numbers.length; i++) {
      result.push(numbers[i] + 1)
  }
  return result;
}

// Strict Typing
'use strict'

number = 15 // no declartion
delete number // cant 
