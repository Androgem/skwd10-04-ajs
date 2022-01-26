let titleElem = document.getElementById("title");
let priorityElem = document.getElementById("priority");
let colorElem = document.getElementById("color");
let description = document.getElementById("description");
let createRemainderBtn = document.getElementById("createRemainderButton");
let showRemainderBtn = document.getElementById("showRemainderButton");
let result = document.getElementById("result");
let reminders = [];

function Reminder(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description =description;
}

function displayRemainders() {
    result.innerHTML = "";
    if(reminders.length === 0) {
        result.innerText = "No reminders available";
        return;
    }
    let table = document.createElement("table");

    let header = document.createElement("thead");
    let headerRow = document.createElement("tr");
    let titleCell = document.createElement("th");
    titleCell.innerText = "Title";

    let priorityCell = document.createElement("th");
    priorityCell.innerText = "Priority";

    let descriptionCell = document.createElement("th");
    descriptionCell.innerText = "Description";

    let tableBody = document.createElement("tbody");
    headerRow.appendChild(titleCell);
    headerRow.appendChild(priorityCell);
    headerRow.appendChild(descriptionCell);
    header.appendChild(headerRow);
    table.appendChild(header);
    for (let remainder of reminders) {
        let row = document.createElement("tr");
        let tCell = document.createElement("td");
        tCell.innerText = remainder.title;

        let pCell = document.createElement("td");
        pCell.innerText = remainder.priority;
        
        let descCell = document.createElement("td");
        descCell.innerText = remainder.description;
        tCell.style.color = remainder.color;

        row.appendChild(tCell);
        row.appendChild(pCell);
        row.appendChild(descCell);
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    result.appendChild(table);
}

function validateInputs() {
    if(!titleElem.value) {
        return false
    }
    if(!priorityElem.value) {
        return false;
    }
    if(!colorElem.value) {
        return false;
    }
    if(!description.value) {
        return false;
    }

    return true;
}

function resetInputs() {
    titleElem.value = "";
    priorityElem.value = "";
    colorElem.value = "";
    description.value = "";
}



createRemainderBtn.addEventListener("click", function() {
    if(!validateInputs()) {
        alert("You must enter all values in the inputs");
        return;
    }

    let reminder = new Reminder(titleElem.value, priorityElem.value, colorElem.value, description.value);
    reminders.push(reminder);
    resetInputs();

})


showRemainderButton.addEventListener("click", displayRemainders);
