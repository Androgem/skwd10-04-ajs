function getDocuments(url){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            success: function(response){
                debugger
                resolve(JSON.parse(response));
            },
            error: function(errorResponse){
                debugger
                reject(errorResponse);
            }
        })
    })
}

function printDocuments(documents){
    console.log("We got the following documents:");
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type}`);
    });
}

function validateDocuments(documents){
    if(!documents || documents.length == 0){
        console.log("There are no documents!");
        return false;
    }
    return true;
}

function getImportantDocuments(documents){
    let importantDocuments = documents.filter(d => d.important == true);
    return new Promise((resolve, reject) => {
        if(importantDocuments.length == 0){
            reject("There are no important documents");
        }
        setTimeout(function(){
            debugger
            resolve(importantDocuments);
        }, 5000);
    })
}

// getDocuments("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
// .then(successData => {
//     debugger
//     let isResponseValid = validateDocuments(successData);
//     if(isResponseValid){
//         return getImportantDocuments(successData);
//     }
// })
// .then(importantDocuments => {
//     debugger
//     printDocuments(importantDocuments);
// })
// .catch(errorData => {
//     console.log("An error occured!")
//     console.log(errorData);
// })
// .finally(()=>{
//     debugger
//     console.log("The end!");
// })



fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
.then(response => {
    debugger
    return response.json(); //return Promise
})
.then(documents => {
    debugger
    printDocuments(documents);
})
.catch(errorData => {
    console.log("An error occured!")
    console.log(errorData);
})
.finally(()=>{
    debugger
    console.log("The end!");
})