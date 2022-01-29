console.log("Looking back at DOM and Events");

// Selectors

let webTitle = document.getElementById("websiteTitle");
console.log(webTitle);
let studentInfoParagraphs = document.getElementsByClassName("student-info");
console.log(studentInfoParagraphs);
let allDivs = document.getElementsByTagName("div");
console.log(allDivs);
let oneParagraph = document.querySelector("p");
console.log(oneParagraph);
let allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

// innerText, innerHTML, outerHTML, value, style

let studentName = document.getElementById("studentName");
console.log(studentName.innerText);
studentName.innerText = "Bojan";
studentName.innerText += " Trpcevski";

document.getElementById("secondDiv").innerHTML += ` 
<p><i>Additional Element added from JS</i></p>`;
document.getElementById("secondDiv").innerHTML += `<hr>`;
// document.getElementById("secondDiv").innerHTML = "";
console.log(document.getElementById("secondDiv"));

console.log(webTitle.outerHTML);
webTitle.outerHTML = `<h1>Recap: DOM, Events and Objects</h1>`;
console.log(webTitle.outerHTML);

// difference between outerHTML and innerHTML
// let additionalDiv = document.getElementById("secondDiv");
// additionalDiv.innerHTML = `<p>Some random text</p>`;
// additionalDiv.innerHTML = "";
// additionalDiv.outerHTML = "";

let linkBtn = document.getElementById("linkBtn");
console.log(linkBtn.value);
linkBtn.value = "bing.com";
linkBtn.value += "/account";
console.log(linkBtn.value);

studentInfoParagraphs[0].style.color = "red";
studentInfoParagraphs[1].style.color = "blue";
studentInfoParagraphs[2].style.color = "green";

// Traversing through the DOM 

let mainDiv = document.getElementsByClassName("wrapper")[0].parentElement;
console.log(mainDiv);
mainDiv.style.backgroundColor = "whitesmoke";

let cardInfo = document.getElementsByClassName("card-info")[1].children;
console.log(cardInfo);

let nextElement = studentName.nextElementSibling;
console.log(nextElement);

let previousElement = nextElement.previousElementSibling;
console.log(previousElement);

let firstBodyElement = mainDiv.firstElementChild;
console.log(firstBodyElement);

let lastElementfromCard = document.getElementsByClassName("card-info")[1].lastElementChild;
console.log(lastElementfromCard);

// Capturing an Event

linkBtn.addEventListener("click", function(){
    console.log("Button has been clicked!");
})

linkBtn.addEventListener("click", function(e){
    console.log("Button is clicked. This is the Event:")
    console.log(e);
})


function handleClick(event){
    console.log("From external function. This is the Event object:")
    console.log(event);
}

linkBtn.addEventListener("click", handleClick);

// Objects and Constructor Function
console.log("------------- Objects --------------");

let exampleObject = {};
console.log(typeof exampleObject);
let dog = new Object();
console.log(typeof dog);

let secondObjectExample = {
    firstProperty: "Example Text",
    secondProperty: "Random String",
    someArray: [10, 20, 30]
};

dog.name = "Sparky"
dog.color = "Brown"
dog.age = 1
dog.faveFood = ["Carrot", "Bacon", "Apple"];
dog.bark = function(){
    console.log("Bark! Bark!");
}

console.log(dog);
console.log(dog.bark());


function Dog(dogName, dogColor, dogAge, favouriteFood){
    this.name = dogName;
    this.color = dogColor;
    this.age = dogAge;
    this.faveFood = favouriteFood;

    this.bark = function(){
        console.log("Bark! Bark!");
    }
}

let jacky = new Dog("Jacky", "White/Brown", 3, ["Meat", "Apple", "Bannana"]);
console.log(jacky);


let doggy = new Dog("Bucky");
console.log(doggy);






