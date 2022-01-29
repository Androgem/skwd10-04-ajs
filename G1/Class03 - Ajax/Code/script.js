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