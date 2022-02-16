//simple callback example
// function simpleFunction(){
//     setTimeout(function(){
//         console.log("This is the first timeout ending..");
//         setTimeout(function(){
//             console.log("This is second timeout ending..");
//         }, 2000);
//     }, 3000);
// }
// simpleFunction();


//PROMISES
function waitSomeTime(delay){ //delay -> time in milliseconds
   return new Promise((resolve, reject) => {
        if(delay < 0){
            debugger
            reject(`The delay can not be negative!`); //The Promise gets status rejected
        }
        setTimeout(function(){
            resolve(`The delay was ${delay}`);
        }, delay);
   })
}

// waitSomeTime(3000)
// .then(successData => {
//     console.log(successData);
// })
// .catch(errorData => {
//     console.log(errorData);
// })
// .finally(()=>{
//     console.log("The delaying finished!!");
// });
// console.log('After calling waitSomeTime');


// waitSomeTime(-5)
// .then(successData => {
//     debugger;
//     console.log(successData);
// })
// .catch(errorData => {
//     debugger
//     console.log(errorData);
// })
// .finally(()=>{
//     console.log("The delaying finished!!");
// });


function getDocuments(url){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            success: function(response){
                debugger
                resolve(JSON.parse(response));
            },
            error: function(errorResponse){
                debugger
                reject(errorResponse);
            }
        })
    })
}

function printDocuments(documents){
    console.log("We got the following documents:");
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type}`);
    });
}

getDocuments("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
.then(successData => {
    debugger
   console.log(successData);
   printDocuments(successData);
})
.catch(errorData => {
    debugger
    console.log(errorData);
})
.finally(()=>{
    console.log("Finished getting the documents!");
})