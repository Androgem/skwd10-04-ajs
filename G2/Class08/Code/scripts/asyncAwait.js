// async function getDocuments(){
//     console.log("Started getting documents..");
//     let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
//     let data = await response.json();
//     console.log("Got the data");
//     console.log(data);
// }
// getDocuments();

function waitSomeTime(delay){
    return new Promise((resolve, reject) => {
        if(delay < 0){
            reject("The delay can not be negative");
        }
        setTimeout(function(){
            resolve(`The delay was ${delay}`);
        }, delay);
    })
}

function greeting(){
    console.log(`Hello. The date and time are ${new Date()}`);
}

async function runAllFunctions(){
    let message = await waitSomeTime(3000); //3
    console.log(message); //5
    greeting(); //6
    console.log('Everything is done!'); //7
}

// console.log(`Start at ${new Date()}`); //1
// runAllFunctions(); //2
// console.log("This message doesn't wait!"); //4


function getResult(number){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve(number * number);
        }, 4000);
    })
}

async function printResult(num){
    let result = await getResult(num);
    console.log(`The square of ${num} is ${result}`);
}

printResult(3);