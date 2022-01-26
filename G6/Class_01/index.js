let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let phoneNumberInput = document.getElementById("phoneNumber");
let resultTableDiv = document.getElementById("resultTable");

// let createContactButton = document.getElementById("createContact");

// console.log(createContactButton);
// let createContactButton = document.getElementsByTagName("button")[0]

function ContactNumber(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

let createContactButton = document.querySelector("#createContact");
let phoneContacts = [];

createContactButton.addEventListener("click", function () {
  resultTableDiv.innerHTML = "";
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let phoneNumber = phoneNumberInput.value;

  if (firstName.length < 2 || lastName.length < 2 || phoneNumber.length !== 9) {
    alert("Some of the input values are invalid");
    return;
  }

  let phoneContact = new ContactNumber(firstName, lastName, phoneNumber);
  phoneContacts.unshift(phoneContact);
  generateTable(phoneContacts);
});

function generateTable(contacts) {
  let columnNames = ["First Name", "Last Name", "Phone Number"];
  let table = document.createElement("table");
  let tableHead = document.createElement("thead");
  let tableBody = document.createElement("tbody");
  let theadRow = document.createElement("tr");

  for (let column of columnNames) {
    let th = document.createElement("th");
    th.textContent = column;
    th.style.border = "1px solid black";
    theadRow.appendChild(th);
  }

  tableHead.appendChild(theadRow);
  table.appendChild(tableHead);
  table.style.border = "1px solid black";
  table.style.width = "500px";
  table.style.marginTop = "50px";

  for (let contact of contacts) {
    let tr = document.createElement("tr");

    let firstNameTD = document.createElement("td");
    firstNameTD.style.border = "1px solid black";
    firstNameTD.textContent = contact.firstName;
    tr.appendChild(firstNameTD);

    let lastNameTD = document.createElement("td");
    lastNameTD.textContent = contact.lastName;
    lastNameTD.style.border = "1px solid black";
    tr.appendChild(lastNameTD);

    let phoneNumberTd = document.createElement("td");
    phoneNumberTd.textContent = contact.phoneNumber;
    phoneNumberTd.style.border = "1px solid black";
    tr.appendChild(phoneNumberTd);
    tableBody.appendChild(tr);
  }

  table.appendChild(tableBody);

  resultTableDiv.appendChild(table);
}
