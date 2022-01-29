$("button").click(function() {
    $.ajax({
        url: "https://swapi.dev/api/people",
        success: function(response) {
            printPerson(response.results);
        }
    })
});

function printPerson(people) {
    //$("#personName").text(person.name);
    var html = "";
    for (let person of people) {
        html += `
        <tr>
            <td>${person.height}</td>
            <td>${person.mass}</td>
            <td>${person.eye_color}</td>
            <td>${person.hair_color}</td>
            <td><button>Delete</button></td>
        </tr>
        `;
    }
    $("tbody").html(html);
    $("button").click(function(e) {
        var row = e.target.parentElement.parentElement;
        row.remove();
    })
}