// const user1 = {
//   name: 'David',
//   score: 3,
//   increment: function () {
//     user1.score++;
//   },
// };

// user1.increment();

// const user2 = {};

// user2.name = 'Dimitar';
// user2.score = 4;
// user2.increment = function () {
//   user2.score++;
// };

// const user3 = Object.create(null);

// user3.name = 'Anita';
// user3.score = 5;
// user3.increment = function () {
//   user3.score++;
// };

// DO NOT REPEAT YOURSELF - DRY

/*
 * Solution 1 - Generalize code
 */

// function userCreator(name, score) {
//   const newUser = {};
//   newUser.name = name;
//   newUser.score = score;
//   newUser.increment = function () {
//     newUser.score++;
//   };
//   return newUser;
// }

// const user1 = userCreator('David', 3);
// const user2 = userCreator('Dimitar', 2);
// user1.increment();

/*
 * Solution 2 - Using the prototype chain
 */

// function userCreator(name, score) {
//   const newUser = Object.create(userFunctionsStore);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }

// const userFunctionsStore = {
//   increment: function () {
//     this.score++;
//   },
//   login: function () {
//     console.log('Logged In');
//   },
// };

// const user1 = userCreator('David', 3);
// const user2 = userCreator('Dimitar', 2);
// user1.increment();
// user2.increment();

/*
 * Functions are both objects and function
 */

// function multiplyBy2(num) {
//   return num * 2;
// }

// multiplyBy2.ime = 'Dimitar';
// multiplyBy2(3); // 6
// multiplyBy2.prototype; // {}

/*
 * Solution 3 - Introducing the keyword
 * that automates the hard work
 * new
 */

// function userCreator(name, score) {
//   this.name = name;
//   this.score = score;
// }

// userCreator.prototype.increment = function () {
//   this.score++;
// };

// userCreator.prototype.login = function () {
//   console.log('login');
// };

// const user1 = new userCreator('Dimitar', 5);
// user1.increment();

// let dog = {
//   dogName: 'Bugsy',
//   dogColor: 'Black',
//   dogAge: 4,
// };

// const { dogName, dogColor, dogAge } = dog;
// console.log(dogAge)

/*
 * Exercise 1
 */

function Academy(name, students, subjects, start, end) {
  this.name = name;
  this.students = students === undefined ? [] : students;
  this.subjects = subjects === undefined ? [] : subjects;
  this.start = new Date(start);
  this.end = new Date(end);
  this.numberOfClasses = this.subjects.length * 10;
  this.printStudents = function () {
    this.students.forEach((student) => console.log(student));
  };
  this.printSubjects = function () {
    this.subjects.forEach((subject) => {
      console.log(subject);
    });
  };
}

function Subject(title, isElective, academy, students) {
  this.title = title;
  this.numberOfClasses = 10;
  this.isElective = isElective;
  this.academy = academy;
  this.students = students;
  this.overrideClasses = function (classes) {
    this.numberOfClasses = classes <= 3 ? console.log('Error') : classes;
  };
}

function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = [];
  this.academy = null;
  this.currentSubject = null;
  this.startAcademy = function (someAcademy) {
    this.academy = someAcademy;
    someAcademy.students.push(this);
  };
  this.startSubject = function (someSubject) {
    if (this.academy === null) {
      console.log('You cant enroll on a subject without academy');
    } else if (
      this.academy.subjects.filter(
        (sub) => sub.tittle === someSubject.title
      ) === []
    ) {
      console.log('There is no subject like that in your academy');
    } else if (this.currentSubject !== null) {
      this.completedSubjects.push(this.currentSubject);
      this.currentSubject = someSubject;
      someSubject.students.push(this);
    } else {
      this.currentSubject = someSubject;
      someSubject.students.push(this);
    }
  };
}

let javascript = new Subject('javascript', false, undefined, []);
let html = new Subject('html', false, undefined, []);
let cSharp = new Subject('C#', false, undefined, []);
let codeAcademy = new Academy(
  'Code',
  [],
  [javascript, html, cSharp, '2/2/2022', '3/3/2022']
);

let bob = new Student('Bob', 'Bobsky', 35);

bob.startAcademy(codeAcademy);
bob.startSubject(javascript);
bob.startSubject(html);
bob.startSubject(cSharp);

console.log(bob);
