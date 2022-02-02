console.log("connected");

// JSON

// STRINGIFICIRAN JSON
let personOneJSON = `{
    "firstName": "Bob",
    "lastName": "Bobski",
    "age": 26,
    "hobbies": ["Running", "Gaming"]
  }
  `;
console.log(typeof personOneJSON);
console.log(personOneJSON);
console.log(personOneJSON.firstName);

// JSON.parse(value) ni sluzi za convertiranja na stingificiran json vo obichen object =)
let personOneParsedJson = JSON.parse(personOneJSON);
console.log(personOneParsedJson);
console.log(personOneParsedJson.firstName);

let personTwoObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["Gaming", "Watching movies"],
};

console.log(personTwoObject);
// JSON.stingify(value) ni sluzi za convertiranje na object vo stringificiran JSON =)
let stringifiedJSONPersonTwoObject = JSON.stringify(personTwoObject);

console.log(typeof stringifiedJSONPersonTwoObject);
console.log(stringifiedJSONPersonTwoObject);

// XML
// GET requests => da zemame nekoja informacija od nadvoreshniot servis
// POST request => da prikachime nekoja informacija do nadvoreshniot servis
// PUT requst => da updatene nekoja postocka informacija do nadvoreshniot servis
// DELETE request => da izbriseme informacija vo nadvoresniot servis

let myBtn = document.getElementById("myBtn");
let results = document.getElementById("results");
/**
 * 0 => unsent
 * 1 => opened;
 * 2 => headers recieved;
 * 3 => loading, go ziamme reponsot t.e. go downloadirame
 * 4 => DONE
 */

//  Informational responses (100–199)
//  Successful responses (200–299)
//  Redirection messages (300–399)
//  Client error responses (400–499)
//  Server error responses (500–599)

myBtn.addEventListener("click", function () {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    console.log(xhttp);
    if (xhttp.readyState === 4 && xhttp.status >= 200 && xhttp.status < 300) {
      let responseText = xhttp.responseText;
      let parsedReponseText = JSON.parse(responseText);
      console.log(parsedReponseText);
      for (let person of parsedReponseText.results) {
        results.innerHTML += ` ${person.name} <br />`;
      }
    }
  };

  xhttp.open("GET", "https://swapi.dev/api/people/");
  xhttp.send();
});
