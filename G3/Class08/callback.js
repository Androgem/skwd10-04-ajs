function callBackHell(showData) {
    setTimeout(() => {
        console.log("one");
        setTimeout(() => {
            console.log("two");
            setTimeout(() => {
                console.log('three');
                setTimeout(() => {
                    console.log('four');
                    setTimeout(() => {
                        console.log('five');
                        setTimeout(function () {
                            console.log('six');
                            setTimeout(function () {
                                console.log('last');
                                showData();
                            }, 1000);
                        }, 2000);
                    }, 1000);
                }, 2000);
            }, 1000);
        }, 2000);
    }, 1000);
}

first(4000)
    .then(data => {
        console.log(data);
        second();
    })
    .catch(error => console.log(`ERROR: ${error}`))
    .finally(() => console.log(`Everything is done at: ${new Date()}`));

console.log('zero');
callBackHell(() => console.log("Hello"));
console.log("after callback");


function promiseLoop(loops) {
    return new Promise((resolve, reject) => {
        
    });
}