$("button").click(function() {
    $.ajax({
        url: "https://swapi.dev/api/people/1",
        success: function(response) {
            printPerson(response);
        }
    })
});

function printPerson(person) {
    $("#personName").text(person.name);
    var html = `
    <tr>
        <td>${person.height}</td>
        <td>${person.mass}</td>
        <td>${person.eye_color}</td>
        <td>${person.hair_color}</td>
    </tr>
    `;
    $("tbody").html(html);
}