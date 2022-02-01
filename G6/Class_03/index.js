// let someObject = {
//   firstName: "Goce",
//   lastName: "Kabov",
//   age: 29,
//   subjects: ["JS", "C#", "HTML"],
// };
// console.log(someObject);

// let jsonObject = JSON.stringify(someObject);
// console.log(jsonObject.firstName);
// let jsObject = JSON.parse(jsonObject);
// console.log(jsObject.firstName);

// let button = document.getElementById("getData");

// button.addEventListener("click", function () {
//   let xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       console.log("YEAH WE MADE IT!");
//       let trainer = JSON.parse(xhr.response);
//       console.log(trainer);
//     } else {
//       console.log("OH NO THE CALL FAILED");
//     }
//   };

//   xhr.open(
//     "GET",
//     "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"
//   );
//   xhr.send();
// });

// let button = $("#getData");

// button.on("click", function () {
//   $.ajax({
//     url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
//     success: function (res) {
//       let trainer = JSON.parse(res);
//       console.log(trainer);
//     },
//     error: function (error) {
//       console.log(error);
//     },
//   });
// });

fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"
)
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (trainer) {
    console.log(trainer);
  })
  .catch(function (error) {
    console.log(error);
  });

function myFunction(res) {
  console.log(res);
}
