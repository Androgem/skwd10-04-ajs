console.log("Connected");

let numberOne = document.getElementById("numberOne");
let numberTwo = document.getElementById("numberTwo");
let divideBtn = document.getElementById("divideBtn");
let multiplyBtn = document.getElementById("multiplyBtn");
let resultOfCalc = document.getElementById("resultOfCalc");

/**
 * 1. Kje ni treba funkcija po ime calculateNumber => DONE
 * 2. Ovaa funkcija ke prima dva parametri, samite broevi => DONE
 * 3. Kje dodademe ushte eden parametar operand. => DONE
 * 4. Kje go proverime operand-ot, dokolku e mnozhenje ke mnozhime,
 * dokolku e delenje ke gi podelime broevite => DONE
 * 5. Kje go ispisheme rezultatot => DONE
 * 6. Kje ja povikame funkcijata so sooedvetnite buttons
 */

function calculateNumber(firstNumber, secondNumber, operand) {
  console.log(firstNumber);
  let parsedNumberOne = parseFloat(firstNumber);
  console.log(parsedNumberOne);

  let parsedNumberTwo = Number(secondNumber);

  if (isNaN(parsedNumberOne) || isNaN(parsedNumberTwo)) {
    alert("Please provide numbers");
  } else {
    if (operand === "*") {
      resultOfCalc.innerText = parsedNumberOne * parsedNumberTwo;
    }
    if (operand === "/") {
      resultOfCalc.innerText = parsedNumberOne / parsedNumberTwo;
    }
  }
}

multiplyBtn.addEventListener("click", function () {
  calculateNumber(numberOne.value, numberTwo.value, "*");
});

divideBtn.addEventListener("click", function () {
  calculateNumber(numberOne.value, numberTwo.value, "/");
});

// SECOND EXERCICE

let secondDiv = document.querySelector("#secondDiv");
let textOfExercise = secondDiv.firstElementChild;
let colorPicker = document.getElementsByName("myDynamicColorInput")[0];

colorPicker.addEventListener("change", function (event) {
  console.log("Change has occured");
  console.log(event.target.value);

  let colorPicked = event.target.value;

  textOfExercise.style.color = colorPicked;
});

// Third example
let randomInputText = document.getElementById("randomInputText");

randomInputText.addEventListener("keyup", function (event) {
  console.log("Typing");
  console.log(event);
  console.log(event.target.value);

  let keyCode = event.keyCode;

  if (keyCode === 13) {
    document.body.style.background = "pink";
  }
});
