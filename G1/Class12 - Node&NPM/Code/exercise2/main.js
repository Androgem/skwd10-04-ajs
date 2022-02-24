const title = document.getElementById('title');

function getFromApi() {
  fetch('http://localhost:3000/hello')
    .then((response) => response.json())
    .then((data) => (title.innerHTML = data));
}

getFromApi();
