function first(callback) {
  setTimeout(function () {
    console.log("I GO FIRST");
    callback();
  }, 1000);
}

function second() {
  console.log("I GO SECOND");
}

// first(second);
// console.log("A GO THIRD");

// let prom = new Promise(function (resolve, reject) {
//   let res = 1 + 1;
//   if (res === 2) {
//     resolve("YES WE MADE IT!");
//   } else {
//     reject("1 + 1 should be 2!");
//   }
// });

// prom
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("I AM EXECUTED ANYWAY");
//   });

// function learnJSBasic(learningTime) {
//   return new Promise(function (resolve, reject) {
//     if (learningTime <= 0) {
//       reject("There is no way you could learn JS Basic in no time");
//     }

//     setTimeout(function () {
//       resolve("I FINALLY LEARNED JS Basic!");
//     }, learningTime);
//   });
// }

// function learnJSAdvanced() {
//   console.log("I HAVE LEARNED JS ADVANCED!");
// }

// learnJSBasic(0)
//   .then(function (result) {
//     console.log(result);
//     learnJSAdvanced();
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

function getDocuments() {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json",
      success: function (res) {
        const data = JSON.parse(res);
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}

function filterImportantDocuments(documents) {
  return new Promise(function (resolve, reject) {
    if (documents.length === 0) {
      reject("There is no documents to be filtered!");
    }

    let importantDocuments = [];
    for (let doc of documents) {
      if (doc.important) {
        importantDocuments.push(doc);
      }
    }
    resolve(importantDocuments);
  });
}

// getDocuments()
//   .then(function (documents) {
//     return filterImportantDocuments(documents);
//   })
//   .then(function (importantDocuments) {
//     console.log(importantDocuments);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// getDocuments()
//   .then(function (documents) {
//     filterImportantDocuments(documents)
//       .then(function (filteredDocuments) {
//         console.log(filteredDocuments);

//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// fetch(
//   "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
// )
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (documents) {
//     return filterImportantDocuments(documents);
//   })
//   .then(function (importantDocuments) {
//     console.log(importantDocuments);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("THE WORK IS DONE FINALLY!");
//   });

async function getDataFromFetch() {
  try {
    let result = await fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
    );
    let documents = await result.json();
    let filteredDocuments = await filterImportantDocuments(documents);
    let starWarsPerson = await getStarWarsPerson();
    createList(filteredDocuments);
  } catch (error) {
    console.log("Something went wrong, please try again later", error);
    let h1 = document.createElement("h1");
    h1.textContent = "Something went wrong, please try again later";
    h1.style.color = "red";
    document.getElementsByTagName("body")[0].appendChild(h1);
  }
}

// Behind the scene (promises)

// function getDataFromFetch() {
//   fetch(
//     "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
//   )
//     .then(function (result) {
//       return result.json();
//     })
//     .then(function (documents) {
//       return filterImportantDocuments(documents);
//     })
//     .then(function (filteredDocuments) {
//       return { person: getStarWarsPerson(), filteredDocuments };
//     })
//     .then(function (res) {
//       createList(res.filteredDocuments);
//     });
// }

async function getStarWarsPerson() {
  let result = await fetch("https://swapi.dev/api/people/1/");
  let person = await result.json();
  return person;
}

function createList(documents) {
  console.log("List created for: ", documents);
}

getDataFromFetch();

fetch("https://restcountries.com/v3.1/alpha/MKD")
  .then((result) => result.json())
  .then((country) => console.log(country));

async function getCountry() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/alpha/MKD");
    const data = await res.json();
    let mkd = data[0];
    let borderCountriesPromises = [];
    for (const border of mkd.borders) {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
      borderCountriesPromises.push(res.json());
    }
    // wait all promises to be resolved Promise.all
    let promisesResults = await Promise.all(borderCountriesPromises);
    // something that will be learned in following classes (map)
    const countries = promisesResults.map(function (country) {
      return country[0];
    });
    console.log(countries);
    // console.log(promisesResults);
  } catch (error) {
    console.log(error);
  }
}

getCountry();
