let starshipsUrl = "https://swapi.dev/api/starships";

// more control
// callbacks
// Promises (resolve, reject)

//fetch always returns a promise =);
//za da go ischitame rezultatot od samiot promise,
//nie moravme da go resolve-neme/da go izrabotime
//toa go pravevme so pomosh na chainuvanje na then() funkcii =)

// ASYNC/AWAIT => Fancy resolvnuvanje na promise =)

let getStarshipsWithFetch = (url) => {
  fetch(url)
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then((data) => {
      //   console.log(data);
      let parsedData = JSON.parse(data);
      console.log(parsedData);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

// getStarshipsWithFetch(starshipsUrl);

async function letAsyncFunc() {}

let getStarshipsWithAsyncAwaitSyntax = async (url) => {
  try {
    console.log("1");

    let response = await fetch(url);
    console.log("RESPONSE", response);
    console.log("2");

    let starShipsData = await response.json();
    console.log("3");

    console.log(starShipsData);
    console.log("4");
  } catch (error) {
    console.log("Error Occured", error);
  }
};

getStarshipsWithAsyncAwaitSyntax(starshipsUrl);
console.log("I wont wait amigo");
