import { data as importedData } from './data.js'

let html = {
    searchInput: document.getElementById("searchInput"),
    searchBtn: document.getElementById("searchBtn"),
    resetBtn: document.getElementById("resetBtn"),
    spiner: document.getElementById("spiner"),
    cardContainer: document.getElementById("cardContainer"),
    notification: document.getElementById("notification"),
    btnCurrency: document.getElementById("btnCurrency"),
    btnEnglish: document.getElementById("btnEnglish"),
    btnMacedonia: document.getElementById("btnMacedonia")
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(importedData);
        }, 3000);
    })
}

function prepareWikiSearchValue(countryName) {
    return countryName.split(" ").join("_");
}

function createCard(country) {
    return `
    <div class="col mb-4">
        <div class="card">
            <img src="${country.flags.png}" alt="${country.name.common} Flag">
            <div class="card-body">
                <h5 class="card-title">${country.name.common}</h5>
                <p class="card-text">${country.name.common} is country with population of ${country.population} with the capital city ${!country.capital ? "unknown" : country.capital[0]}. </p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Open on <a href="https://en.wikipedia.org/wiki/${prepareWikiSearchValue(country.name.common)}" target="_blank">Wikipedia</a></small>
            </div>
        </div>
    </div>`
}

function toggleSpinner(showSpinner) {
    if (showSpinner) {
        html.spiner.style.display = "block";
    }
    else {
        html.spiner.style.display = "none";
    }
}

html.btnCurrency.addEventListener("click", function () {
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";
    toggleSpinner(true);

    getData().then(function (countriesData) {
        toggleSpinner(false);
        let filteredCountries = countriesData.filter(x => x.currencies != undefined
            && x.currencies.hasOwnProperty("EUR"));
        filteredCountries.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        });
    })
})

html.btnEnglish.addEventListener("click", function () {
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";
    toggleSpinner(true);

    getData().then(function (countriesData) {
        toggleSpinner(false);
        let filteredCountries = countriesData.filter(x => x.languages != undefined
            && x.languages.hasOwnProperty("eng"));
        filteredCountries.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        });
    })
})

html.btnMacedonia.addEventListener("click", function(){
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";
    toggleSpinner(true);

    getData().then(function(countryData){
        toggleSpinner(false);
        let result = countryData.filter(x => x.name.common.includes("Macedonia")); // result is an array of one element
        debugger
        html.cardContainer.innerHTML += createCard(result[0]);
    })
})

async function searchCountriesByName(countryName){
    toggleSpinner(true);

    try{
    let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    let data = await response.json();

    toggleSpinner(false);
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";

    data.forEach( c => html.cardContainer.innerHTML += createCard(c));
    }
    catch(error){
        html.notification.innerHTML = "<div class='alert alert-danger'>You entered an invalid or empty name!</div>"
    }
}

html.searchBtn.addEventListener("click", function(){
    searchCountriesByName(html.searchInput.value);
})

html.resetBtn.addEventListener("click", function(){
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";
    html.searchInput.value = "";
})