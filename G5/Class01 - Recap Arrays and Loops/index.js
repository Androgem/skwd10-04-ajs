console.log("Connected");

console.log("******** ARRAY AND LOOPS ********");
//                  0         1        2           3
//prettier-ignore //Eurocream
// let myBasket = ["Cedevita", "Beer", "Bread", "Coca-cola",  2, 3, 5, true, 5> 2, undefined];
let myBasket = ["Cedevita", "Beer", "Bread", "Coca-cola"];

console.log(myBasket);

console.log(`Our first element in the basket array is: ${myBasket[0]}`);
console.log(`Our basket contains ${myBasket.length} elements.`);
console.log(`The third element in our basket is ${myBasket[2]}`);

console.log(`Our last element in our basket is ${myBasket[3]}`);
let lengthOfOurBasket = myBasket.length;
// ${myBasket[lengthOfOurBasket - 1]}
console.log(`Last element in the array: ${myBasket[myBasket.length - 1]}`);

console.log("*** METHODS OF ARRAY ***");

// push() => Dodava element na krajot od nizata
myBasket.push("Fanta");
console.log(`New item is beign added in our basket ${myBasket}`);
// pop() => Go brishe posledniot element od nizata, no isto taka mozheme da ja zachuvame negovata vrednost
let lastItemOfTheBasket = myBasket.pop();
console.log(`Last item has beign removed in our basket `, myBasket);
console.log(`Item that was removed ${lastItemOfTheBasket}`);
// unshift() => Dodava element na pochetokot na samata niza
myBasket.unshift("Eurocream");
console.log("Item is added in the array", myBasket);
// shift() => Go brishe prviot element od nizata, no isto taka mozheme da ja zachuvame negovata vrednost
let firstItemRemovedOfTheArray = myBasket.shift();
console.log("First item is removed", myBasket, firstItemRemovedOfTheArray);

console.log("**** LOOPS ****");

//WHILE LOOP

// let input = "";
// while (input === "" || input === null) {
//   input = prompt("Please enter your first name my friend =)");
//   console.log(input);
// }

// [John doe, George, Aleksandar, Bob Bobski]
// arrayOfNames[0],arrayOfNames[1],arrayOfNames[2],arrayOfNames[3]

/** Write a function that will accept array of names, and print each name in console */
/**
 *  1. Deklariraj funckcija po ime printNames => DONE
 *  2. Funkcijata ke prima parametar po ime arrayOfNames => DONE
 *  3. Ke iskoristime while loop za da iterirame niz nizata => DONE
 *  4. Na sekoja iteracija ke printame vo consola
 */

function printNames(arrayOfNames) {
  let iterator = 0;
  while (iterator < arrayOfNames.length) {
    console.log(arrayOfNames[iterator]);
    iterator++;
  }
}

printNames(["John Doe", "George", "Aleksandar", "Bob Bobski", "Katerina"]);

//DO WHILE
console.log("*** DO WHILE ***");
function printNamesWithDoWhile(arrayOfNames) {
  let iterator = 0;
  do {
    console.log(arrayOfNames[iterator]);
    // document.write(arrayOfNames[iterator]);
    iterator++;
  } while (iterator < arrayOfNames.length);
}

printNamesWithDoWhile(["Dummy Name 1", "Dummy Name 2"]);

do {
  console.log("Print in do loop");
} while (5 < 2);

//FOR
console.log("*** FOR LOOP ***");

function printElementsWithForLoop(arrayOfElements) {
  let elements = ``;
  if (arrayOfElements.length === 0) {
    return `Sorry the array was empty my friend`;
  } else {
    for (let i = 0; i < arrayOfElements.length; i++) {
      elements += `${i + 1}. ${arrayOfElements[i]} \n`;
    }
    return elements;
  }
}
let arrayOfMovies = ["Harry Potter", "The Hobbit", "Lord of the Rings"];

console.log(printElementsWithForLoop(arrayOfMovies));

//FOR OF
console.log("*** FOR OF ***");
function printNamesWithForOf(arrayOfNames) {
  // name = arrayOfNames[iterator]
  for (let name of arrayOfNames) {
    console.log(name);
  }
}
//prettier-ignore
printNamesWithForOf(["John Doe", "George", "Aleksandar", "Bob Bobski", "Katerina"])

function evenNumbers(arrayOfNumbers) {
  let arrayOfEvenNumbers = [];
  if (arrayOfNumbers.length === 0) {
    return "nothing";
  } else {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (arrayOfNumbers[i] % 2 === 0) {
        arrayOfEvenNumbers.push(arrayOfNumbers[i]);
      }
    }
    return arrayOfEvenNumbers;
  }
}

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let onlyEvenNumbers = evenNumbers(newArray);
console.log(onlyEvenNumbers);
