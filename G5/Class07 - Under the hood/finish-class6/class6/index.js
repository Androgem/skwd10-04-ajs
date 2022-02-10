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

let sortedByNameLength = myCarsArray.sort(
  (car1, car2) => car1.model.length - car2.model.length
);

console.log("Sorted by model name length", sortedByNameLength);
console.log("Original array", myCarsArray);
// Original sorted :///
