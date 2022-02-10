console.log("====setTimeout=====");

// setTimeout(() => console.log("This code will execute after 5 seconds!"), 5000);

// let interval = setInterval(() => console.log(new Date()), 2000);

// document.getElementById("clearInterval").addEventListener("click", function(){
//     clearInterval(interval);
// })

function firstGreeting(){
    setTimeout(() => console.log("Hello from first greeting function!"), 4000);
}

function secondGreeting(){
    console.log("Hello from second greeting function!");
}
firstGreeting();
secondGreeting();

function first(){
    setTimeout(() => {
        console.log('First');
        second();
    }, 7000)
}

function second(){
    console.log("Second");
}

first();


