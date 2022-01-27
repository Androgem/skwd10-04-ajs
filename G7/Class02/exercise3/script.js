let titleElem = document.getElementById("title");
let priorityElem = document.getElementById("priority");
let colorElem = document.getElementById("color");
let descriptionElem = document.getElementById("description");
let createReminderBtn = document.getElementById("createReminderBtn");
let showReminderBtn = document.getElementById("showReminderBtn")
let result = document.getElementById("result");

let reminders = [];

function Reminder(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description
}

function displayReminders() {
    result.innerHTML = "";
    if(reminders.length === 0) {
        result.innerText = "You have no saved reminders";
        return
    }
    let table = document.createElement("table");
    let header = document.createElement("thead");
    let headerRow = document.createElement("tr");

    let titleCell = document.createElement("th");
    titleCell.innerText = "Title"

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

    for (let reminder of reminders) {
        let row = document.createElement("tr")

        let tCell = document.createElement("td");
        tCell.innerText = reminder.title;

        let pCell = document.createElement("td");
        pCell.innerText = reminder.priority;

        let descCell = document.createElement("td");
        descCell.innerText = reminder.description;

        tCell.style.color = reminder.color;
        descCell.style.color = reminder.color;

        row.appendChild(tCell);
        row.appendChild(pCell);
        row.appendChild(descCell);
        tableBody.appendChild(row)
    }

        table.appendChild(tableBody);
        result.appendChild(table);
}

function validateInputs() {
    if(!titleElem.value) {
        return false;
    }
    if(!priorityElem.value) {
        return false;
    }
    if(!colorElem.value) {
        return false;
    }
    if(!descriptionElem.value) {
        return false;
    }

    return true;
}

function resetInputs() {
    titleElem.value = "";
    priorityElem.value = "";
    colorElem.value = ""; 
    descriptionElem.value = "";
}


createReminderBtn.addEventListener("click", function() {
    if(!validateInputs()) {
        alert("You must enter all fields");
        return;
    }

    let reminder = new Reminder(titleElem.value, priorityElem.value, colorElem.value, descriptionElem.value);
    reminders.push(reminder);
    // console.log(reminders)
    resetInputs();
})

showReminderBtn.addEventListener("click", displayReminders);
