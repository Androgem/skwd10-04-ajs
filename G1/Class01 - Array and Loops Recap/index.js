console.log("Connected");

console.log("********* ARRAY AND LOOPS *********");

let myBasket = [
  "Cedevita",
  "Coca-cola",
  "Bread",
  2,
  3,
  5,
  true,
  5 > 2,
  undefined,
  null,
  56912,
];

console.log(myBasket);

console.log("Element of index 1 is: ", myBasket[1]);
console.log("Number of elements in our basket: ", myBasket.length);
console.log("Last element of the array is: ", myBasket[2]);
console.log(
  "Better way of selecting last element in the array: ",
  myBasket[myBasket.length - 1]
);

// push() => Dodava element na krajot na nizata;

myBasket.push("Fanta");
console.log("New item is added in our basket ", myBasket);

// pop() => Go brishe posledniot element od nizata, no mozheme i da ja zachuvame negovata vrednost

let lastItemOfTheArray = myBasket.pop();
console.log("Item is removed from our basket ", myBasket);
console.log(`Last item from the array was: ${lastItemOfTheArray}`);

// unshift() => Dodava element na pochetokot na samata niza
myBasket.unshift("Milka");
console.log("Item is added at the beggining of the array ", myBasket);

// shift() => Go brishe prviot element of samata niza

let firstItemRemoved = myBasket.shift();
console.log("Item is removed from the beggining of the array ", myBasket);
console.log("Item is: ", firstItemRemoved);

console.log("****** LOOPS ******");

// WHILE LOOP
// let input = "";
// while (input === "" || input === null) {
//   input = prompt("Please enter you first name");
//   console.log(input);
// }

let iterator = 0;
// 19 <= 20 ? Da, uslovot e ispolnet, izvrshi go kodot i zgolemi go iteratorot
// 20 <= 20 ? Da, uslovot e ispolnet, izvrshi go kodot i zgolemi go iteratorot
// 21 <= 20 ? Ne, i prekinuvame so izvrsuvanje na samiot loop =)

while (iterator <= 20) {
  console.log(iterator);
  iterator++;
}

let firstNames = ["Bob", "John", "Alex", "Stefan"];
let i = 0;

while (i < firstNames.length) {
  console.log(firstNames[i]);
  i++;
}

// DO WHILE
// let input = "";
// do {
//   input = prompt("Enter your first name amigooo =)");
// } while (!input);

console.log("Names with do while: ");

let y = 0;
do {
  console.log(firstNames[y]);
  y++;
} while (y < firstNames.length);

// FOR
// Napravi funkcija kojashto ke prima niza i kje ja isprinta taa niza, previniraj falsy input

/**
 * 1. Deklarirame funcija po ime printElements => DONE
 * 2. Ovaa funkcija ke prima parametar niza, => DONE
 * 3. Kje proverime dali parametarot e validen => DONE
 * 4. Ako parametarot e truthy togash ke gi isprintame elementite od nizata =) => DONE
 */

function printElements(arrayOfElements) {
  let elements = ``;
  //  !arrayOfElements.length
  if (arrayOfElements.length === 0) {
    return `Sorry the array was empty my friend.`;
  } else {
    for (let i = 0; i < arrayOfElements.length; i++) {
      elements += `${arrayOfElements[i]} \n`;
    }
    return elements;
  }
}

let moviesArray = ["Harry Potter", "Lord of the Rings", "The Hobbit"];

let printedElements = printElements(moviesArray);
console.log(printedElements);

// FOR OF

console.log("For of:");

for (let movieName of moviesArray) {
  console.log(movieName);
}

var basket = ["apple", "banana", "orange", "avocado"];
function groceries(food) {
  if (food.length === 0) {
    alert("Array is Empty");
  } else {
    for (var i = 0; i < food.length; i++) {
      console.log(` ${i + 1}: ${food[i]} `);
    }
  }
}
groceries(basket);

groceries(["Banana", "Strawberry", "Raspberry"]);

// CLEAN ARRAY

/**
 * 1. Deklarirame funkcija po ime returnThreeDifferentArrays => DONE
 * 2. Ke prima parametar niza => DONE
 * 3. Ke proverime dali nizata e prazna i dokolku e ke ispesheme error poraka => DONE
 * 4. Dokolku nizata ima elementi ke iterirame niz samata niza => DONE
 * 5. Dokolku tipot na elementot e string ke go dodademe vo pomasna niza arrayofStrings
 * 6. Dokolku tipot na elementot e number ke go dodademe vo pomsna niza arrayOfNumbers
 * 7. Ke ja iscisteme nizata t.e. ke vratime nova niza kojashto ima samo truthy vrednosi
 * 8. Ke gi vratime site 3 nizi
 */

function returnThreeDifferentArrays(arrayOfRandomValues) {
  if (!arrayOfRandomValues.length) {
    return `Empty array amigo :d `;
  }

  let stringsArray = [];
  let numberArray = [];
  let cleanArray = [];

  for (let i = 0; i < arrayOfRandomValues.length; i++) {
    if (
      typeof arrayOfRandomValues[i] === "string" &&
      !!arrayOfRandomValues[i]
    ) {
      stringsArray.push(arrayOfRandomValues[i]);
    }
    if (
      typeof arrayOfRandomValues[i] === "number" &&
      !isNaN(arrayOfRandomValues[i])
    ) {
      numberArray.push(arrayOfRandomValues[i]);
    }
    if (arrayOfRandomValues[i]) {
      cleanArray.push(arrayOfRandomValues[i]);
    }
  }

  //   return {
  //     stringsArray: stringsArray,
  //     numberArray: numberArray,
  //     cleanArray: cleanArray,
  //   };

  return {
    stringsArray,
    numberArray,
    cleanArray,
  };
}

let allThreeArraysInObject = returnThreeDifferentArrays([
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
]);

console.log(allThreeArraysInObject);
