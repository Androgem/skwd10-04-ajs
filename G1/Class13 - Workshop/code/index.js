const tbody = document.getElementById('tbody');
const searchEl = document.getElementById('searchInput');
const loadingDiv = document.getElementById('loading');
const url = 'https://restcountries.com/v3.1/all';
let lastSortedBy = '';
let specificCountrySearched = false;

function getUrlByName(name) {
  // From this we know that we are searching for a specific country
  specificCountrySearched = true;
  return `https://restcountries.com/v3.1/name/${name}`;
}

function getAllCountries(sortBy) {
  showSpinner();
  specificCountrySearched = false;
  tbody.innerHTML = '';
  fetch(url)
    .then((res) => res.json())
    // Sorting
    .then((res) => {
      if (sortBy) {
        tbody.innerHTML = '';
        const sorted = res.sort((a, b) => {
          switch (sortBy) {
            case 'population':
              if (lastSortedBy === sortBy) {
                // dsc
                return a.population - b.population;
              }
              // asc
              return b.population - a.population;
            case 'name':
              if (lastSortedBy === sortBy) {
                return b.name.common.localeCompare(a.name.common);
              }
              return a.name.common.localeCompare(b.name.common);
            case 'area':
              if (lastSortedBy === sortBy) {
                return a.area - b.area;
              }
              return b.area - a.area;
          }
        });
        lastSortedBy = sortBy;
        return sorted;
      } else {
        return res;
      }
    })
    // UI Rendering
    .then((res) => {
      res.forEach((country) => {
        renderUI(country);
      });
      hideSpinner();
    });
}

function renderUI(country) {
  const tr = document.createElement('tr');
  tbody.appendChild(tr);
  tr.innerHTML = fillData(country);
}

function fillData(country) {
  return `
    <td><img style="height:44px; width:44px" src="${
      country.flags.png
    }" alt=""></td>
    <td>${country.name.common}</td>
    <td>${country.population}</td>
    <td>${country.capital ? country.capital[0] : 'Unkown'}</td>
    <td>${country.area}</td>
    `;
}

function showSpinner() {
  loadingDiv.style.visibility = 'visible';
}

function hideSpinner() {
  loadingDiv.style.visibility = 'hidden';
}

function sort(sordBy) {
  if (!specificCountrySearched) {
    getAllCountries(sordBy);
  }
}

function searchCountry() {
  if (searchEl.value) {
    fetch(getUrlByName(searchEl.value))
      .then((res) => res.json())
      .then((res) => {
        tbody.innerHTML = '';
        renderUI(res[0]);
      })
      .catch((err) => {
        console.log(`ERROR: ${err}`);
      });
  } else {
    getAllCountries();
  }
}

getAllCountries();
