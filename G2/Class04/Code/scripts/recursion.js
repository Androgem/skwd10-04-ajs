function sum(num1, num2) {
    return num1 + num2;
}

//sum(sum(sum(sum(1,2),3),4),5);

function sumTo(num) {
    debugger
    console.log("Input is: " + num);

    if (num == 0) {
        console.log("input is 0");
        return 0;
    }
   console.log(`return ${num} + sumTo(${num-1})`);
   return num + sumTo(num-1); 
}
let result = sumTo(5);
console.log(`Result of recursion: ${result}`);

//5 + sumTo(4)
//4 + sumTo(3)
//3 + sumTo(2)
//2 + sumTo(1)
//1 + sumTo(0) => 1 + 0
//going back
//2 + 1
//3 + 3
//4 + 6
//5 + 10


