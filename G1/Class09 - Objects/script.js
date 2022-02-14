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