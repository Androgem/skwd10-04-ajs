// A single-threaded non-blocking asynchronous concurrent
// Single-threaded means that it has one threaded (it can do one thing at a time) code is executeded in one place
// Blocking - do something until it's finished and then continue with the next peace of code

// JavaScript allows you not only to invoke the function right now but also a particular time later. The latter is known as a “scheduling call.”
// Two main methods can be highlighted for it
// setTimeOut AND setInterval

// ********* EXAMPLE #1 *********

// let myBtn = document.getElementById("myBtn");

// let printName = (fullName) => console.log(`Full name is: ${fullName}`);

// let ourTimeOutFunc = () => {
//   setTimeout(() => console.log("Call executed for 3 secs"), 3000);
// };

// ourTimeOutFunc();
// printName("John Doe");

// //function(){}
// let counter = 0;
// let intervalFunc = setInterval(() => {
//   console.log("Intervals amigoo =)", counter);
//   counter++;
// }, 2000);

// clearInterval e funkcija koja shto ko chisto nashiot interval =)
// so toa shto ke prevenira da se trigerira intervalno zasekogash

// setTimeout(() => clearInterval(intervalFunc), 10000);

// myBtn.addEventListener("click", () => {
//   clearInterval(intervalFunc);
// });

// ********* EXAMPLE #2 *********

// let ourCallBackFunc = () => console.log("cb1");

// console.log("Hi");
// setTimeout(ourCallBackFunc, 1000);
// console.log("Bye");

/**
 * 1. Hi
 * 2. cb1
 * 3. Bye
 */

/**
 * 1. Hi
 * 2. Bye
 * 3. cb1
 */

// ********** CALLBACK FUNCTIONS **********

// Callback functions are functions that are executed inside of other functions ( usually after the execution of the other, parent function ).
// Since javascript executes line by line and throws functions out of the stack when we have to wait for them, it is easy to see that sometimes we would need a system that actually executes the code in our defined order.
// This is where callbacks come into the picture. If we want to be sure that a function is executed after another, then we just pass that function as an argument to the first one.
//  That way when the first one completes inside of it we call it the second one. This way we keep the order of execution

//apiCallFunc(url)
// {

//call code here fetch/ajax
//printanje functions

// }

// WITHOUT CALLBACKS

// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// let result = printFullName("Gjorge", "Dimitrov");
// console.log(result);

// WITH CALLBACK

function printFullNameWithCallback(firstName, lastName, callback) {
  return callback(firstName, lastName);
}

//prettier-ignore
// let resultWithCallback = printFullNameWithCallback("Gjorge", "Dimitrov", (fName, lName) =>  fName + lName);
//SAME AS ABOVE
let resultWithCallback = printFullNameWithCallback("Gjorge", "Dimitrov", callbackForFullName);

function callbackForFullName(fName, lName) {
  return `${fName} ${lName}`;
}
console.log(resultWithCallback);

let moviesList = [
  { name: "Harry Potter", raiting: 10 },
  { name: "The Gentleman", raiting: 9.5 },
  { name: "Spider-Man No Way Home", raiting: 9 },
];

/**
 * FUNKCIJATA printMovieNamesParentFunction PRIMA 2 PARAMETRI, callBackFunction I movie
 * VO SAMOTO BODY NA FUNCKIJATA T.E. SCOPE-OT, JA POVIKUVAME CALLBACK FUNKCIJATA
 * KOJASHTO KJE BIDE ISPRATENA PODOCNA KAKO ARGUMENT.
 */
let printMovieNamesParentFunction = (callBackFunction, movie) => {
  console.log("Parent of callback function");

  return callBackFunction(movie);
};

// OVAA FUNKCIJA, PODOLU KJE JA ISPRATIME KAKO ARGUMENT ZA callBackFunction
let printMovie = (movie) => {
  console.log(`Movie name: ${movie.name}. Raiting is: ${movie.raiting}`);
};

// PRI ITERRINJE NIZ moviesList NIZATA, ZA SEKOJ ELEMENT JA POVIKUVAME FUNKCIJATA
// printMovieNamesParentFunction, KOJASTO KAKO PRV ARGUMENT JA PROSLEDIVME FUNKCIJATA
// printMovie A TAA KJE GO ZAVZEME MESTOTO NA PRVIOT PARAMETAR KOISHTO E CALLBACK =),
// I KAKO VTOR ARGUMENT KJE GO PROSLEDIME movie, KOISHTO VSUSHTOST E I SAMIOT ELEMENT PRI SAMATA ITERACIJA OD NIZATA.

moviesList.forEach((movie) => printMovieNamesParentFunction(printMovie, movie));

// moviesList.forEach((movie) => printMovie(movie));

//without delay

function firstFuncCall() {
  console.log("First func call");
}

function secondFuncCall() {
  console.log("Second func call");
}

firstFuncCall();
secondFuncCall();

//with delay
function firstFuncCallDelayed() {
  setTimeout(() => console.log("Delayed function call"), 2000);
}

firstFuncCallDelayed();
firstFuncCall();

function second() {
  console.log("Second thing!");
}

/**
 * SIMULIRAME API POVIK, ODNOSNO DELAY, I SO POMOSHTA NA CALLBACK FUNKCIJATA
 * GO KONTROLIRAME FLOW-TO NA IZVRSUVANJE NA FUNKCIITE,
 * ODNOSNO VO KONKTRETNIOT SLUCAJ, CALLBACK FUNKCIJATA KJE SE POVIKA, POSLE console.log("FIRST THING")
 */
function firstFuncCallWithCallBack(callback) {
  setTimeout(() => {
    console.log("FIRST THING"); // API POVIK
    callback(); // PRINT RESULT
  }, 1000);
}

/**
 * ISTO TAKA, OVAA FUNKCIJA JA POVIKAVME POVEKE PATI SO RAZLICHNI CALLBACK FUNKCII =)
 */
firstFuncCallWithCallBack(second);
firstFuncCallWithCallBack(firstFuncCall);
firstFuncCallWithCallBack(secondFuncCall);

//API CALL WITH CALLBACK SOLUTION =)

function fetchJedi(url, callback, callBackForError) {
  $.ajax({
    url: url,
    success: (reponse) => {
      // 100% TOCHNO =)
      // printJedi(reponse)
      callback(reponse);
    },
    error: (error) => {
      console.log("The request failed", error);
      callBackForError(error);
    },
  });
}

function printJedi(jediResult) {
  console.log(jediResult);
}

function printJedi2(jediResult) {
  console.log(jediResult);
}

function printJedi3(jediResult) {
  console.log(jediResult);
}

/**
 * SO POMOSH NA CALLBACKS, FETCHJEDI FUNKCIJATA JA POVIKAVME TRI PATI
 * SO TRI RAZLICNI URLs, I SO TRI RAZLICHNI CALLBACK FUNKCII ZA PRINTANJE ;)
 */
//prettier-ignore
fetchJedi("https://swapi.dev/api/people/1/", printJedi, (err) => console.log(err))

//prettier-ignore
fetchJedi("https://swapi.dev/api/people", printJedi2, (err) => console.log(err))

//prettier-ignore
fetchJedi("https://swapi.dev/api/people/3/", printJedi3, (err) => console.log(err))
