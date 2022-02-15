// simple function with callback

function simple() {
  setTimeout(function () {
    console.log("1. First thing, prepering for second");
    setTimeout(function () {
      console.log("2. Second thing");
    }, 2000);
  }, 2000);
}
// simple();

let printFullName = (firstName, lastName, callback) => {
  return callback(firstName, lastName);
};

let fullNameCb = (fName, lName) => {
  console.log(`Fullname is: ${fName} ${lName}`);
};

// printFullName("John", "Doe", fullNameCb);

// Complex example callback

function complex() {
  setTimeout(function () {
    console.log("1. First thing, preparing for the second");
    setTimeout(function () {
      console.log("2. Second thing, preparing for the third");
      setTimeout(function () {
        console.log("3. Third thing, preparing for the forth");
        setTimeout(function () {
          console.log("4. Forth thing, preparing for the fifth");
          setTimeout(function () {
            console.log("5. Fifth thing, preparing for the Sixth");
            setTimeout(function () {
              console.log("6. Sixth and last thing");
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}

// This phenomenon has many names. CALLBACK HELL, HADOUKEN CODE/PROGRAMMING, PYRAMID OF DOOM
// complex();

let gotUrl = "https://thronesapi.com/api/v2/Characters";
let responseOfApi;
let resultDiv = document.getElementById("result");

function fetchGOTChars(apiUrl, callback, array) {
  $.ajax({
    url: apiUrl,
    success: function (response) {
      console.log(response);
      console.log("reponse is success");
      // #not working example
      // responseOfApi = response;

      // #for fix example
      callback(array, response, printCharacter);
    },
    error: function (error) {
      console.log("Sorry amigo call failed :/", error);
    },
  });
}

let printCharacter = (array) => {
  array.forEach((char) => (resultDiv.innerHTML += `${char.firstName} <br />`));
};

// #not working example
// fetchGOTChars(gotUrl);
// printCharacter(responseOfApi);

// FIX
// #for fix example
function assignToArray(array, response, callBack) {
  // mestoto na array parametarot ke go zavzeme argumentot responseOfApi
  array = response;
  callBack(array);
}

// fetchGOTChars(gotUrl, assignToArray, responseOfApi);

// 2015 ********* PROMISE *********

/**
 * PROMISES SE PRAVAT SO KLUCNOSTO ZBORCHE  new Promise
 * I KAKO PRV ARGUMENT, PROSLEDUVAME ANONIMNA FUNKCIJA, KOJAHSTO VO NEA,
 * KAKO DVA "SPECIJALNI" ARGUMENTI, PO KONVENCIJA GI PISUVAME "resolve" I "reject"
 * "resolve" KJE JA VRATI TAA VREDNOST KOJA SHTO KJE MU JA ZADADEME DOKOLKU PROMISE-OT BIL USPESHEN
 * "reject" KJE JA VRATI TAA VREDNOST KOJA SHTO KJE JA ZADADEME DOKOLKU PROMISE-OT BIL NEUSPESHEN.
 */

// (resolve, reject) =>
// new Promise(function (resolve, reject){resolve(data), reject(error) })
// new Date

let isPersonAdult = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Yep Person is adult");
    } else {
      reject("Noope, not today amigo, person is not adult =)");
    }
  });
};

console.log(isPersonAdult(27));

isPersonAdult(27)
  .then((success) => {
    console.log("Yes, now we resolve the promise");
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("No matter what, I will execute"));

//  PROMISE FOR OUR FETCH GOT CHARS
let fetchGotCharsWithPromise = (url) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      success: (response) => {
        resolve(response);
      },
      error: (err) => {
        reject(err);
      },
    });
  });
};

/**
 * PROMISE SOLUTION, ZA DA GI PRISTAPIME GOT CHARACTERS =)
 */

// fetchGotCharsWithPromise(gotUrl)
//   .then((data) => {
//     printCharacter(data);
//   })
//   .catch((err) => console.log("ERR", err));

// USING FETCH RECAP

// SAMO FETCH SOLUCIJA ZA PRAVENJE REQUEST TO GOT API-TO =)
function usingFetchForSameApi(url) {
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      let parsedData = JSON.parse(data);
      printCharacter(parsedData);
    })
    .catch((error) => {
      console.log("Error happened", error);
    });
}

// usingFetchForSameApi(gotUrl);

//  *************** ASYNC/AWAIT ***************
/**
 * ASYNC/AWAIT E NOVA JS FUNKCIONLANOST, KOJASHTO MOZHEME DA NAVEDEME T.E. ISCHEKAME NEKOJA LINIJA KOD DA SE IZVRSHI
 * PA DA PRODOLZIME SO CITANJE NA KODOT =)
 */
// 2016/ES7

/**
 * ISTOTO RESEINIE ZA PRAVENJE NA REQUEST NA GOT API-TO
 * NO SO ASYNC AWAIT SYNTAXA
 * ZA DA KORISTIME ASYNC/AWAIT, MORAME PRED KEYWORD-OT function DA GO PISHEME KEYWORD-OT ASYNC.
 */

// async function usingNewSyntaxAsync(url) {
//   let response = await fetch(url);
//   let data = await response.json();
//   printCharacter(data);
// }

// try / catch
/**
 * TRY/CATCH SINTAKSATA, VO TRY DELOT, GO POVIKUVAME KODOT KOISTO SAKAME DA SE IZVRSHI =)
 * NO DOKOLKU DOBIEME NEKAKOV ERROR, CATCH BLOCK-OT KJE GO "KONZUMIRA" TOJ ERROR I POTOTA
 * KJE MOZEME DA JA ISPISEME SOODVETNATA PORAKA ILI SOODVETNOTO HENDLANJE NA ERROR-OT =)
 * PS. OVA E ISTTATA FUNKCIJA KAKO I POGORE SAMO SO TRY/CATCH BLOCK =)
 */
async function usingNewSyntaxAsync(url) {
  try {
    console.log("TRY");
    let response = await fetch(url);
    let data = await response.json();
    printCharacter(data);
  } catch (error) {
    console.log("CATCH");
    console.log(error);
  }
}
// usingNewSyntaxAsync(gotUrl);

/**
 * OVDE PRAVIME SIMULACIJA NA TOA KAKO SO POMOSTA NA ASYNC/AWAIT
 * NIE GO KONTROLIRAME NASIOT KOD DA ISCEKA NA NEKOJA FUNCKIJA DA ZAVRSHI PRED DA PRODOLZI
 * SO CHITANJE NA KODOT =)
 */
function first(workTime) {
  return new Promise((resolve, reject) => {
    if (workTime <= 0) {
      reject("It's too short of a work time. Please try again!");
    }
    setTimeout(() => {
      resolve("First thing, preparing for the second");
    }, workTime);
  });
}

function second() {
  console.log("Second thing");
}

// POSLE SEKOJA LINIJA KOD, NAPISHAN E REDOSLEDOT NA TOA SHTO KAKO KE SE IZVRSHI.
// I ZABELEZUVAME DEKA FUNKCIJATA second() KJE ISCEKA DA FUNCKIJATA first(2000) ZAVRSHI.
// TOA GO PRAVIME SO POMOSTA NA KEYWORD-OT AWAIT KOISHTO GO STAVIVME PRED first(2000) FUNKCIJATA.
async function runFunctions() {
  console.log("async func"); //1
  console.log(await first(2000)); // 3
  second(); // 4 //ovaa linija kod iscekuva gornata da se povika
  console.log(`Everything is done at: ${new Date()}`); // 5
}
runFunctions(); // 1
console.log("This does not wait for the async function to finish!"); // 2
