function calculate(callBackFn, num1, num2) {
    console.log("doing some calculations.. calling callback function..");
    return callBackFn(num1, num2);
}
let result = calculate((x, y) => x + y, 4, 5);
console.log(result);

console.log("===synchronous====");
function first() {
    console.log("First");
}
function second() {
    console.log("Second");
}

first();
second();


console.log("=====callback with timeout=====");
// function firstGreeting(callBackFn){
//     setTimeout(()=> {
//         console.log('Hello SEDC!');
//         callBackFn();
//     }, 5000)
// }

function firstGreeting(callBackFn) {
    setTimeout(() => {
        console.log('Hello SEDC!');
        setTimeout(() => {
            callBackFn();
        }, 3000);
    }, 5000)
}

function secondGreeting() {
    console.log('Goodbye SEDC');
}

firstGreeting(secondGreeting);

//AJAX calls
// function makeAjaxCall(url){
//     $.ajax({
//         url: url,
//         success: function(response){
//             console.log(response);
//             return response;
//         },
//         error: function(errorResponse){
//             console.log(errorResponse);
//         }
//     })
//     console.log('Right after ahjax call')
// }

// console.log('Before ajax call');
// let res = makeAjaxCall("https://swapi.dev/api/people/1/");
// console.log(res);
// console.log('After ajax call');

function makeCall(url, successCallbackFn){
    //successCallbackFn = print
    $.ajax({
        url:url,
        success: function(response){
            console.log(response);
            successCallbackFn(response);
        },
        error: function(errorResponse){
            console.log(errorResponse);
        }
    })
    console.log('Right after ajax call')
}

function print(serverResponse){
    console.log("The request succeeded, the response is:");
    console.log(serverResponse);
}

console.log('Before ajax call')
makeCall("https://swapi.dev/api/people/1/", print);
console.log('After ajax call')