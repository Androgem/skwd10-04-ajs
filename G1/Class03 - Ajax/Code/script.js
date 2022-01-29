const myJson = `
{
    "name": "test",
    "surname": "value",
    "array": ["10", 2, 4, true]
}
`;
console.log(myJson);
var obj = JSON.parse(myJson);
console.log(obj);
var newJSON = JSON.stringify(obj);
console.log(newJSON);

let xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('The request succeeded!');
    console.log(xhr.response);
    let resultParsed = JSON.parse(xhr.response);
    console.log(resultParsed);
  } else {
    console.log('The request failed!');
    console.log(xhr.responseText);
  }
};
xhr.open('GET', 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json');
xhr.send();

console.log("APP HAS ENDED");

$.ajax({
    url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
    method: "GET",
    success: function (response) {
        console.log("this is from ajax");
        console.log(response)
        var objResponse = JSON.parse(response);
        console.log(objResponse);
    },
    error: function (e) {
        console.log(e);
    }
});

$("button").click(function() {
    $.ajax({
        url: "http://api.open-notify.org/astros.json",
        success: function(response) {
            console.log(response.people);
            printNames(response.people);
        }
    });
});

function printNames(people) {
    let ul = $("ul");
    let html = "";
    for (let person of people) {
        console.log(person);
        html += `<li>${person.name}</li>`;
    }
    ul.html(html);
}

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json")
.then(function(response) {
    return response.json();
}).then(function(response) {
    console.log("THIS IS FROM THE FETCH");
    console.log(response);
});
