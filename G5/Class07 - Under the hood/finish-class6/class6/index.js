console.log("connected");

let myCarsArray = [
  { model: "Lada", color: "white", manufactoredAt: 2008 },
  { model: "Peugeot", color: "red", manufactoredAt: 2005 },
  { model: "Opel Insignia", color: "grey", manufactoredAt: 2013 },
  { model: "Opel Corsa", color: "orange", manufactoredAt: 2002 },
  { model: "Astra", color: "blue", manufactoredAt: 1998 },
];

// console.log(myCarsArray);
// console.log(
//   "Sorted by model name ASC",
//   myCarsArray.sort((car1, car2) => car1.model.localeCompare(car2.model))
// );

// let sortedByNameLength = myCarsArray.sort(
//   (car1, car2) => car1.model.length - car2.model.length
// );

// console.log("Sorted by model name length", sortedByNameLength);
// console.log("Original array", myCarsArray);
// Original sorted why amigo? :///

// Still not solution

// let copiedMyCarsArray = myCarsArray;

// let sortedCopiedArrayByNameLength = copiedMyCarsArray.sort(
//   (car1, car2) => car1.model.length - car2.model.length
// );

// console.log("Copied array", copiedMyCarsArray);
// console.log("Original array", myCarsArray);
// console.log("Sorted with copy", sortedCopiedArrayByNameLength);

// SOLUTION

function copyArray(array) {
  let copiedArray = [];
  array.forEach((element) => copiedArray.push(element));
  return copiedArray;
}

let copiedMyCarsSolution = copyArray(myCarsArray);

let sortedCopiedArray = copiedMyCarsSolution.sort(
  (a, b) => a.model.length - b.model.length
);

console.log("Copied array", copiedMyCarsSolution);
console.log("Original array", myCarsArray);
console.log("Sorted with copy", sortedCopiedArray);

// Primitive Data Types: Number, String, Boolean, undefined and NULL
// Complex Data Types: Objects, function or array, etc

// So here comes the interesting part is, Only Primitive types can be Passed by Value but not Complex types,
// which can be passed by reference only. Technically, Pass by Reference is present in JavaScript. When variables hold an object,
// an array of a function which is complex types passes by Reference comes into picture where variable holds the
