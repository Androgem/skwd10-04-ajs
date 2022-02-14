var peopleBtn = document.getElementById('peopleBtn');
var shipsBtn = document.getElementById('shipsBtn');
var tableHeader = document.getElementsByTagName('thead')[0];
var tableBody = document.getElementsByTagName('tbody')[0];
var next = $('#next');
var previous = $('#previous');

next.hide();
previous.hide();

var peopleHeader = [
  'Name',
  'Height ( cm )',
  'Mass ( kg )',
  'Gender',
  'Birth Year',
  'Appearances',
];
var shipsHeader = [
  'Name',
  'Model',
  'Manufacturer',
  'Cost',
  'People Capacity',
  'Class',
];
var baseURL = 'https://swapi.dev/api/';
var counter = 1;
var type = '';

peopleBtn.addEventListener('click', function () {
  type = 'people';
  counter = 1;
  getPeople(1);
});

shipsBtn.addEventListener('click', function () {
  type = 'ships';
  counter = 1;
  getShips(1);
});

next.click(function () {
  counter++;
  type === 'people' ? getPeople(counter) : getShips(counter);
});

previous.click(function () {
  counter--;
  type === 'people' ? getPeople(counter) : getShips(counter);
});

function getPeople(pageNumber) {
  $.ajax({
    url: `${baseURL}people?page=${pageNumber}`,
    success: function (response) {
      generatePeopleData(response.results);
      response.next ? next.show() : next.hide();
      response.previous ? previous.show() : previous.hide();
    },
  });
}

function getShips(pageNumber) {
  $.ajax({
    url: `${baseURL}starships?page=${pageNumber}`,
    success: function (response) {
      generateShipData(response.results);
      response.next ? next.show() : next.hide();
      response.previous ? previous.show() : previous.hide();
    },
  });
}

function generatePeopleData(people) {
  generateTableHeader(peopleHeader);
  var html = '';
  for (let person of people) {
    html += `
        <tr>
            <td>${person.name}</td>
            <td>${person.height}</td>
            <td>${person.mass}</td>
            <td>${person.gender}</td>
            <td>${person.birth_year}</td>
            <td>${person.films.length}</td>
        </tr>
        `;
  }
  tableBody.innerHTML = html;
}

function generateShipData(ships) {
  generateTableHeader(shipsHeader);
  var html = '';
  for (let ship of ships) {
    html += `
        <tr>
            <td>${ship.name}</td>
            <td>${ship.model}</td>
            <td>${ship.manufacturer}</td>
            <td>${ship.cost_in_credits}</td>
            <td>${ship.passengers}</td>
            <td>${ship.starship_class}</td>
        </tr>
        `;
  }
  tableBody.innerHTML = html;
}

function generateTableHeader(values) {
  var html = '';
  for (let value of values) {
    html += `<th>${value}</th>`;
  }
  tableHeader.innerHTML = html;
}
