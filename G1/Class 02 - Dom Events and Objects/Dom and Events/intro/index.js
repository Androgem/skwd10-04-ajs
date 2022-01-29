console.log("Connected");

let myTitle = document.getElementById("myTitle");
console.log(myTitle);

let myParagraphs = document.getElementsByClassName("myParag");
console.log(myParagraphs);
myParagraphs[0].innerText = "Hello once again";

let h2TagSelector = document.getElementsByTagName("h2");
console.log(h2TagSelector);
h2TagSelector[1].innerText = "Lorem ipsum";
h2TagSelector[1].style.color = "green";

let myBtn = document.getElementById("myBtn");

function handleClick() {
  console.log("I am clicked =)");
}

myBtn.onclick = handleClick;

let secondBtn = document.querySelector("#secondBtn");

// secondBtn.addEventListener("click", handleClick);

function writeName(name) {
  console.log(`Hello ${name}`);
}
secondBtn.addEventListener("click", function () {
  writeName("John Doe");
});
