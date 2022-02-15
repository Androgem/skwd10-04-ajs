// setTimeout(() => {
//   console.log("FROM TIMEOUT");
// }, 0);

// console.log("FIRST");
// console.log("SECOND");

function first(callback) {
  setTimeout(() => {
    console.log("FIRST THING");
    callback();
  }, 300);
  console.log("RANDOM THING!");
}

function second() {
  console.log("SECOND THING");
}

// async function third() {
//   const data = await fetch("https://api.fungenerators.com");

//   console.log("SOMETHING");
// }

function fourth() {
  console.log("FOURTH THING!");
}

// first(fourth);
// second();
// third();

let time = document.getElementById("currentTime");
let stopTime = document.getElementById("stopTime");
let getDataButton = document.getElementById("getData");
let totalTitle = document.getElementById("total");
let isStoped = true;

// let handler = setInterval(() => {
//   time.textContent = new Date().toLocaleString();
// }, 1000);
// let handler;

// stopTime.addEventListener("click", () => {
//   if (isStoped) {
//     handler = setInterval(() => {
//       time.textContent = new Date().toLocaleString();
//     }, 1000);
//     isStoped = false;
//     stopTime.textContent = "STOP TIME";
//   } else {
//     clearInterval(handler);
//     isStoped = true;
//     stopTime.textContent = "START TIME";
//   }
// });

// setTimeout(() => {
//   clearInterval(handler);
// }, 5000);

getDataButton.addEventListener("click", async () => {
  // getData(printData, printData2);
  let result = await getData("https://swapi.dev/api/people");
  printTotalPeople(result.count);
  generatePeopleTable(result.results, document.getElementById("resultTable"));
  generatepaginationButtons(
    document.getElementsByTagName("body")[0],
    result.previous,
    result.next
  );
});

// printData, printData2
async function getData(url) {
  let res = await fetch(url);
  let data = await res.json();
  // printData(data, printData2)
  // printCallback(data, callback2);
  return data;
}

function generatepaginationButtons(element, prev, next) {
  let prevBtn = document.createElement("button");
  prevBtn.textContent = "PREV";
  if (!prev) {
    prevBtn.setAttribute("disabled", true);
  }
  prevBtn.addEventListener("click", async () => {
    let result = await getData(prev);
    generatePeopleTable(result.results, document.getElementById("resultTable"));
  });
  let nextBtn = document.createElement("button");
  nextBtn.textContent = "NEXT";
  if (!next) {
    nextBtn.setAttribute("disabled", true);
  }
  nextBtn.addEventListener("click", async () => {
    let result = await getData(next);
    generatePeopleTable(result.results, document.getElementById("resultTable"));
    generatepaginationButtons(
      document.getElementsByTagName("body")[0],
      result.previous,
      result.next
    );
  });
  element.appendChild(prevBtn);
  element.appendChild(nextBtn);
}

function printTotalPeople(total) {
  totalTitle.textContent = `Total: ${total}`;
}

let table;

function generatePeopleTable(people, element) {
  element.innerHTML = "";
  table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let columns = ["Name", "Gender", "Weight", "Height"];
  let propertyNames = ["name", "gender", "mass", "height"];
  columns.forEach((column) => {
    let th = document.createElement("th");
    th.textContent = column;
    thead.appendChild(th);
  });
  people.forEach((person) => {
    let tr = document.createElement("tr");
    propertyNames.forEach((prop) => {
      let td = document.createElement("td");
      td.textContent = person[prop];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  element.appendChild(table);
}

// function printData(people, callback) {
//   console.log(people);
//   callback();
// }

// function printData2() {
//   console.log("I AM NOT IMPORTANT");
// }
