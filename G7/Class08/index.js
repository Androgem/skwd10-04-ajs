
// setTimeout(() => {
//     console.log('Inside the setTimeout callback function');
//     setTimeout(() => {
//         console.log('Inside the callback of the setTimeout inside the callback of the first setTimeout');
//     }, 1000);
// }, 1000)

// function countToSix() {
//     setTimeout(() => {
//         console.log(1)
//         setTimeout(() => {
//             console.log(2)
//             setTimeout(() => {
//                 setTimeout(() => {
//                     setTimeout(() => {
//                         console.log(5)
//                         setTimeout(() => {
//                             console.log(6)
//                         }, 1000)
//                     }, 1000)
//                     console.log(4)
//                 }, 1000)
//                 console.log(3)
//             }, 1000)
//         }, 1000)
//     }, 1000);
// }

// countToSix()


const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = true//Math.random() < .8
        return random ? resolve() : reject('Ooops something wrong happend');
    }, ms)
})

// const countToSix = miliseconds => {
//     console.log(1)
//     delay(miliseconds)
//     .then(() => {
//         console.log(2)
//         return delay(miliseconds)
//     })
//     .then(() => {
//         console.log(3)
//         return delay(miliseconds)
//     })
//     .then(() => {
//         console.log(4)
//         return delay(miliseconds)
//     })
//     .then(() => {
//         console.log(5)
//         return delay(miliseconds)
//     })
//     .then(() => {
//         console.log(6)
//         return delay(miliseconds)
//     })
//     .catch(e => console.log(`We cought this: ${e}`))
//     .finally(() => console.log('I execute always'))
// }

// const countToSix = async ms => {
//     console.log(1)
//     await delay(ms)
//     console.log(2)
//     await delay(ms)
//     console.log(3)
//     await delay(ms)
//     console.log(4)
//     await delay(ms)
//     console.log(5)
//     await delay(ms)
//     console.log(6)
//     return 'Successfully finished'
// }

// async function readResults() {
//     const result = await countToSix(1000)
//     console.log({result})
// }
// readResults();

const url = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json';

function getDocuments(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            success: response => resolve(response),
            error: err => reject(err)
        })
    })
}

const showDocument = documents => {
    if(!documents && typeof documents !== 'object') {
        throw new Error('Problem with the documents')
    }
    if(documents.length === 0) {
        throw new Error('No documents in database')
    }
    documents.forEach(d => console.log(`Name: ${d.name} - Type: ${d.type} - Size: ${d.size}MB`))
}


async function readDocuments(url) {
    const data = await getDocuments(url);
    const documents = JSON.parse(data);
    showDocument(documents)
}

// readDocuments(url)
// getDocuments(url)
// .then(data => JSON.parse(data)).then(data => showDocument(data))

const swapi = 'https://swapi.dev/api/';

// function getLuke(url) {
//     $.ajax({
//         url,
//         success: luke => {
//             console.log({luke})
//             $.ajax({
//                 url: luke.homeworld,
//                 success: homeworld => {
//                     console.log({homeworld})
//                     $.ajax({
//                         url: homeworld.residents[1],
//                         success: resident => console.log({resident})
//                     })
//                 }
//             })
//         }
//     })
// }

// function getLuke(url) {
//     fetch(url)
//     .then(luke => luke.json())
//     .then(luke => {
//         console.log({luke})
//         fetch(luke.homeworld)
//         .then(data => data.json())
//         .then(homeworld => {
//             console.log({homeworld})
//             fetch(homeworld.residents[1])
//             .then(data => data.json())
//             .then(resident => console.log({resident}))
//         })
//     })
// }

async function getLuke(url) {
    const lukeData = await fetch(url);
    const parsedLuke = await lukeData.json();
    const homeworldData = await fetch(parsedLuke.homeworld);
    const parsedHw = await homeworldData.json();
    const residentData = await fetch(parsedHw.residents[1]);
    const parsedResident = await residentData.json();
    console.log({parsedLuke, parsedHw, parsedResident})
}

getLuke(`${swapi}/people/1`)
console.log('I will execute last')
