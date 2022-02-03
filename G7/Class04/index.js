// function sum(num) {
//     if(num === 0) {
//         return 0;
//         console.log('hello')
//     }
//     return num + sum(--num);
// }

// console.log(sum(2));

// function fibonacci(n) {
//     if (n < 2) {
//       return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
//   console.log(fibonacci(7));

//   function sum(3): 6 {
//     if(3 === 0) {
//         return 0;
//     }
//     return 3 + 3 //sum(2);
//     if(2 === 0) {
//         return 0;
//         }
//     return 2 + 1 //sum(1);
//         if(1 === 0) {
//         return 0;
//     }
//         return 1 + 0//sum(0);
//             if(0 === 0) {
//             return 0;
//         }
// }
// console.log(sum(3))

// jQuery call to an API

const printName = (element, name) => element.innerText = name;

const createTd = value => {
    const td = document.createElement('td')
    td.innerText = value;
    return td;
} 
const createTr = (key, value) => {
    const tr = document.createElement('tr');
    tr.appendChild(createTd(key));
    tr.appendChild(createTd(value));
    return tr;
};

const populateTable = (element, data) => {
    const keys = Object.keys(data); // returns an array of the object's key names
    keys.forEach(key => {
        if(typeof data[key] === 'string') {
            element.appendChild(createTr(key, data[key]))
        }
    });

//     // element.innerHTML = `
//     //     <tr>
//     //         <td>Height</td>
//     //         <td>${data.height}</td>
//     //     </tr>
//     //     <tr>
//     //         <td>Mass</td>
//     //         <td>${data.mass}</td>
//     //     </tr>
//     //     <tr>
//     //         <td>Hair Color</td>
//     //         <td>${data.hair_color}</td>
//     //     </tr>
//     //     <tr>
//     //         <td>Skin Color</td>
//     //         <td>${data.skin_color}</td>
//     //     </tr>
//     //     <tr>
//     //         <td>Eye Color</td>
//     //         <td>${data.eye_color}</td>
//     //     </tr>
//     //     <tr>
//     //         <td>Birth Year</td>
//     //         <td>${data.birth_year}</td>
//     //     </tr>
//     //     <tr>
//     //         <td>Gender</td>
//     //         <td>${data.gender}</td>
//     //     </tr>
//     //     <tr>
//     //         <td>Homeworld</td>
//     //         <td>${data.homeworld}</td>
//     //     </tr>
//     // `;
}

(($) => {
    $.ajax({
        url: 'https://swapi.dev/api/people/1',
        success: res => {
            const header = document.getElementById('title');
            const table = document.getElementById('result');
            console.log({x: res.name});
            printName(header, res.name);
            populateTable(table, res)
        },
        error: err => {
            console.log
        }
    })
})($); 


// // API call with fetch

const result = fetch('https://swapi.dev/api/people/1')
console.log('Making the call')
const parsedResult = result.then(r => r.json())
console.log('Parsing the result')
parsedResult.then(r => console.log(r)).catch(r => console.log({r})).finally(() => console.log('Called Finally'));
console.log('Printing the result to console')
console.log('Reached the end');


const numbers = [1,312,32,12,4,25,645,23,4234,564,546,67,86,45,23,234,65,65,786,345,2,12,453,6,765,324564];

const result = numbers.reduce((res, num) => {
    if (num % 2 === 0) {
        res.evens.push(num);
    } else {
        res.odds.push(num);
    }
    return res;
}, {evens: [], odds: []});

console.log(result);

const sum = numbers.reduce((res, num) => {
    res = res + num;
    return res;
}, 0) 

console.log(sum);
