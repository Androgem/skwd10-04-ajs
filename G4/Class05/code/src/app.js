let peopleBtn = document.getElementById("peopleBtn");

peopleBtn.addEventListener("click", getPeople);


function getPeople() {
    let peopleUrl = "https://swapi.dev/api/people/?page=1";
    fetch(peopleUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(people) {
        console.log("The request secceeded!")
        console.log(people)
        createTable(people);
    })
    .catch(function(err) {
        console.log("The request has failed!");
        console.log(err);
    })
}