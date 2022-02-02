var peopleBtn = document.getElementById("peopleBtn");
var shipsBtn = document.getElementById("shipsBtn");
var tableHeader = document.getElementsByTagName("thead")[0];

var peopleHeader = ["Name", "Height ( cm )", "Mass ( kg )", "Gender", "Birth Year", "Appearances"];
var shipsHeader = ["Name", "Model", "Manufacturer", "Cost", "People Capacity", "Class"];

peopleBtn.addEventListener("click", function() {
    generateTableHeader(peopleHeader);
});


shipsBtn.addEventListener("click", function() {
    generateTableHeader(shipsHeader);
});

function generateTableHeader(values) {
    var html = "";
    for(let value of values) {
        html += `<th>${value}</th>`
    }
    tableHeader.innerHTML = html;
}