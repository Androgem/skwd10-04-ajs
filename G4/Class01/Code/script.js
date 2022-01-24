// Exercise01
// Write JS program which calculate sum 1+2+3+...n, where n is inputted by keyboard.

let n =  parseInt(prompt("Enter a Value", "0"));
let sum = 0;

for(let i=1; i<=n; i++)
{
    sum+=i;
}
console.log(`The sum is ${sum}`);


// Exercise02
// Write a program in programming language JS that will print in 
// console all threesome numbers in given interval for which the Pythagorean condition is met.

const start = 5;
const end = 15; // you can use input or prompt to input start and end number

for(let a=start; a<end; a++)
// {
    for(let b=start; b<end; b++)
    // {
        for(let c=start; c<end; c++)
        // {
            if(a*a + b*b === c*c)
            {
                console.log(`The condition is met by the numbers:${a} ${b} ${c}`);
            }  
//         }
//     }
// }


// Exercise03
// Print all digits of a given number

const myNum = 9564;

let pom = myNum;

while(pom>0)
{
    let a = pom % 10;
    console.log(a);
    pom = parseInt(pom/10);
    // pom = parseFloat(pom/10);
    // pom /= 10; // this is valid in C, C++, C#, Java
}


// Exercise04
// Find all palindromes in a given interval
// example palindromes 121, 3443, 22, 232 

const startEx04 = 150;
const endEx04 = 2500; // you can use prompt to input start and end number

for(let j=startEx04; j<=endEx04; j++)
{
    let reverseNum = 0;
    let helper = j;

    while(helper>0)
    {
        let a = helper%10;
        reverseNum=reverseNum*10+a;
        helper = parseInt(helper/10);
    }

    if(j===reverseNum)
    {
        console.log(`Palindrome is: ${j}`);
    }
}

// Exercise05
// Change the character (-) of the members of the array

let numArr = [4, -9, -98, -1, 444, 3, -555];

for(let i = 0; i < numArr.length; i++)
{
    numArr[i] *= -1;
}
console.log(numArr);


// Exercise06
// Copy the odd elements from the given one into a new array. 
// Print the new one in the console.

const givenArr = [12, 45, 88, 1, 567, 3, 91];
let newArr = [];

for(let i=0; i<givenArr.length; i++)
{
    if(givenArr[i] % 2 !== 0)
    {
        newArr.push(givenArr[i]);
        // newArr[newArr.length] = givenArr[i];
        console.log(newArr[newArr.length - 1]);
    }
}

// for(let i=0; i<newArr.length; i++)
// {
//     console.log(i, newArr[i]);
// }

console.log(newArr);


// Exercise07
// Delete all elements of the array except the numbers

function cleanAllButNumbers(inputArray){
    let result = [];
    for(let item of inputArray)
    {
        // if(typeof(item) === "number" && item)
        if(typeof(item) === "number" && !isNaN(item))
        {
            result.push(item);
        }
    }
    return result;
}

console.log(cleanAllButNumbers([true, false, 12, 12, 44, 2345, "Bob", undefined, "Jill", false, "", 99, NaN, null, 1, 22]));


// Exercise08
// How many negative numbers are there in the array

let counter = 0;

for(let i=0; i < numArr.length; i++)
{
    if(numArr[i] < 0)
        counter++;
}
console.log(counter);


// Extra Exercise

for(let i = 0; i < 10; i++)
{
    console.log(`this is i value ${i}`);
    
    for(let j = 0; j < 10; j++)
    {
        console.log(`j val ${j}`);
        if(i === j){
            console.log(`*`);
        }
    }
    console.log(`----------`);
}

