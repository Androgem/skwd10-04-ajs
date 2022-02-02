console.log("connected");

let myBtn = document.getElementById("myBtn");
let results = document.getElementById("results");

let gotURL = "https://thronesapi.com/api/v2/Characters";
let responseOfApi;

// BAD WAY!!!!
// function fetchGOTChars(apiUrl) {
//   $.ajax({
//     url: apiUrl,
//     success: function (response) {
//       console.log("Success", response);
//       responseOfApi = response;

//     },
//     error: function (error) {
//       console.log(error);
//     },
//   });
// }

// myBtn.addEventListener("click", function () {
//   fetchGOTChars(gotURL);
//   printResults(responseOfApi, results);
// });

// BETTER WAY!!!! AND VALID WAY!
// WITH AJAX

// function fetchGOTChars(apiUrl) {
//   $.ajax({
//     url: apiUrl,
//     success: function (response) {
//       // KE SE SLUCHI KOGA ODGOVOROT OD NADVORESHNIOT SERVICE
//       // KJE BIDE SUCCESS T.E USPESHEN
//       console.log("Success", response);
//       printResults(response, results);
//     },
//     error: function (error) {
//       console.log(error);
//     },
//   });
// }

function fetchGOTChars(apiUrl) {
  //fetch sekogash vrakja PROMISE;

  // nie treba da go resolve-neme (obrabotime) promisot (vetuvanjeto) od fetch-ot
  let promiseOfFetch = fetch(apiUrl);
  console.log(promiseOfFetch);

  promiseOfFetch
    // resolve-nuvanjeto (obravotuvanjeto) na promisot go pravime so pomosh na .then() metodata
    // kojashto e metoda za/od samite promises
    // vo .then() pisuvame anonimna funkcija koja prima specijalen argument koisto e samiot RESPONSE (odgovor od nadvoresniot servis)
    .then(function (response) {
      console.log(response);

      // za da go izvlecheme stringificiraniot JSON od samiot response koristime response.text()
      // no isto taka, so pomosh na return, go vrkjame response.text(), za vo vtoriot .then() go doobrabotime
      return response.text();
    })
    .then(function (result) {
      //za da go konzumirame i koristime stringificiraniot JSON od prethodniot .then(),
      //vo anonimnata funkcija vo vtoriot .then(), isto taka imame pristap do "specijalen" argument koisto e samiot result
      //t.e. toa ke bide stringificiraniot json koistho bil vraten od prethodniot then() ( t.e. ke bide vrednosta od return response.text()) =)
      console.log("here", result);
      //za da mozheme da go koristime stringificiraniot json, morame da go isparsirame.
      //to go pravime so metodata JSON.parse.
      let parsedResult = JSON.parse(result);
      console.log(parsedResult);
      //   responseOfApi = parsedResult DON'T DO THIS!!!!
      //shtom go isparsiravme veke mozeme da go koristime =)
      printResults(parsedResult, results);
    })
    //catch() e isto taka methoda na samite promisi, i ni sluzi za da "fati/catch" dokolku dojde do error =)
    //isto taka vo catch() pisuvame anonimna funkcija,kojashto ima pristap do specijalen argument.
    //toj argument po konvencija go pisuvame error.
    //dokolku nastane nekoj error (nevaliden url, padnal serverot ili slicno) catch(function(error){}) ke go ulovi toj error =)
    .catch(function (error) {
      console.log(`Error happened`, error);
    });
}

myBtn.addEventListener("click", function () {
  fetchGOTChars(gotURL);
});

function printResults(charactersArray, element) {
  console.log(charactersArray);
  element.innerHTML = "";

  for (let i = 0; i < charactersArray.length; i++) {
    element.innerHTML += `
            <ul>
                <li>Characters name ${charactersArray[i].firstName}</li>
            </ul>
        
        `;
  }
}
