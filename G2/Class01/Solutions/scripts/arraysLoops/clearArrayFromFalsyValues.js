let mixedArray = [false, "test", [1,2], 0, true, "", 10];

let cleanedArray = [];

for(let item of mixedArray){
    if(item){
        cleanedArray.push(item);
    }
}

for(let item of cleanedArray){
    console.log(item);
}