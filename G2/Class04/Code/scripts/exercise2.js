let changeColor = (element, color = "black") => element.style.color = color;

let changeTextSize = (element, fontSize = 24) => element.style.fontSize = fontSize+"px";

document.getElementById("changeColorBtn").addEventListener("click", function(){
    let header = document.getElementsByTagName("h1")[0];
    let colorInput = document.getElementById("colorInput");
    changeColor(header, colorInput.value);
    changeTextSize(header, document.getElementById("textSizeInput").value);
});