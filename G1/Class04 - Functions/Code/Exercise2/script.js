var setColor = (element, color = black) => element.style.color = color;
var setTextSize = (element, fontSize) => element.style.fontSize = (fontSize || 24) + "px";

var h1 = document.getElementsByTagName("h1")[0];
var color = document.getElementsByTagName("input")[0];
var textSize = document.getElementsByTagName("input")[1];
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
    setColor(h1, color.value);
    setTextSize(h1, textSize.value);
});