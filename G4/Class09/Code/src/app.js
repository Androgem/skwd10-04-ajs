// Get elements
const btnPeople = document.getElementById("btnPeople");
const btnShips = document.getElementById("btnShips");
const loader = document.getElementById("loader");
const result = document.getElementById("result");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

// Global variables for dynamic manipulation of fetching the data
const baseUrl = "https://swapi.dev/api/";

// Get all people
const getPeople = (page) => {
    const peopleUrl = `${baseUrl}people/?page=${page}`


    fetch(peopleUrl)
        .then(res => res.json())
        .then(people => {
            console.log("All people", people);
        })
        .catch(error => {
            console.error(error);
        })
}

const displayPeople = people => {
    if(people !== null) {
        result.innerHTML = '';
        result.innerHTML += `
        <div class="row">
            <div class="col-md-3">Name</div>
            <div class="col-md-3">Height</div>
        </div>
        `
    }
}