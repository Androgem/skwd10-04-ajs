let fname = "Kate";
function getFullName(firstName, lastName){
    console.log(`First name: ${firstName}`);

    if(firstName.length > 5){
        //block scope
        let blockResult = `${firstName} ${lastName}`;
        console.log(blockResult);
    }
   // console.log(`Outer scope: ${blockResult}`); -> error, block scope, blockResult lives in the if block

    console.log(`Fname: ${fname}`)
    let result = 10;
}
getFullName("Marija", "Markovska");
// console.log(result); //error

//ANOTHER EXAMPLE
let numberTen = 10; //GLOBAL SCOPE
function sumWithOne(num1, num2){
    debugger
    //FUNCTION SCOPE
    let numberOne = 1;
    console.log(num1 + num2 + numberOne);
    console.log(num1 + num2 + numberOne + numberTen);

    function addFive(number){
        //new function scope
        let number5 = 5;
        console.log(number + number5);
        console.log(number + number5 + numberTen);
    }
    addFive(8);
    console.log("number5:");
    //console.log(number5); ERROR
}

sumWithOne(2,3);