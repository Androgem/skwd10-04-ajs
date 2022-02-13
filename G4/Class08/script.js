const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
];

function getPosts() {
    setTimeout(() => {
        posts.forEach(post => console.log(post.title))
    }, 1000)
}

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000)
// }

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 2000)
}


// createPost({title: "Post Three", body: "This is post Three"}, getPosts);
// getPosts();


// ------------------- Promises ------------------  

// Creating our own promise  

function first(workTime) {
    return new Promise((resolve, reject) => {
        if(workTime >= 5000) {
            reject("This is taking too long. please try again");
        }

        setTimeout(() => {
            let person = {
                name: "Panche",
                lastName: "Manaskov",
                age: 29
            }

            resolve(person)
        }, workTime)
    })
}


function second() {
    console.log("Second thing")
}


// first(2500)
//     .then(response => {
//         console.log(response);
//         second();
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("Finnaly has been invoked");
//     })


// Handling AJAX calls with a promise

function getDocuments() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json",
            success: response => {
                resolve(JSON.parse(response))
            },
            error: err => {
                reject(err)
            }
        })
    })
}

function showDocuments(documents) {
    if(!documents && typeof(documents) != "object") {
        console.log(error);
    }

    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
    })
}

// getDocuments()
//     .then(data => {
//         console.log("We got the documents!")
//         showDocuments(data);
//     })
//     .catch(error => console.log(error))


// Handling AJAX call with multiple promises

function getImportantDocuments(documents) {
    let importantDocuments = documents.filter(doc => doc.important);

    return new Promise((resolve, reject) => {
        if(importantDocuments === 0) {
            reject("There are no important documents")
        }

        setTimeout(() => {
            resolve(importantDocuments);
        }, 3000)
    })
}


// getDocuments()
//     .then(data => {
//         console.log("We got the important documents")
//         showDocuments(data);
//         return getImportantDocuments(data);
//     })
//     .then(data => {
//         showDocuments(data);
//     })
//     .catch(error => console.log(error.message))


// using FETCH

// fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
//     .then(response => response.json())
//     .then(response => {
//         console.log("We got the documents")
//         return getImportantDocuments(response)
//     })
//     .then(response => showDocuments(response))
//     .catch(err => console.log(err))
//     .finally(() => console.log("DONE"))


// ------------- ASYNC/AWAIT ------------   
// this is just syntacic sugar, it works with promises also

function Document(name) {
    this.name = name;
}

let mapObjects = (array) => {
    return array.map(doc => new Document(doc.name))
}

async function getDataAsync() {
    let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
    let data = await response.json();

    console.log("this is the data", data);
    let importantData = await getImportantDocuments(data);
    console.log("this is the filtered data of important documents", importantData)

    // let mappedData = mapObjects(importantData)
    // console.log("this is the mapped data", mappedData)

    // mappedData.forEach(doc => console.log(doc.name));
}


try {
    getDataAsync();
    
} catch (error) {
    console.log(error)
}