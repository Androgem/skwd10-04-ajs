let countryInput = document.getElementById("countryName");
let searchButton = document.getElementById("countriesSearch");

function getCountryByCode(code){
   return  fetch(`https://restcountries.com/v2/alpha/${code}`)
    .then(response => response.json());
}

async function getBorderingCountries(borderCodes){
    console.log('Neighbours:');
    debugger;
    for(let code of borderCodes){
        let borderCountryInformation = await getCountryByCode(code);
        console.log(borderCountryInformation);
    }
}


searchButton.addEventListener("click", function(e){
    console.log("Getting country information...");
    getCountryByCode(countryInput.value).then(data => {
        debugger;
        console.log('Country data:');
        console.log(data);
        getBorderingCountries(data.borders);
    })
});