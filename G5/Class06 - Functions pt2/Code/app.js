console.log("Functions pt.2");

let sayHello = function(name) {console.log(`Hello there ${name}`)};
sayHello("Jhon");

// storing function in array

let numberStats = [
    (num) => num > 0 ? "Positive" : "Negative",
    (num) => num % 2 === 0 ? "Even" : "Odd"
];

console.log(numberStats[0](10));
console.log(numberStats[1](14));

// functions as argument to other functions

function calculator(calculateFunc, num1, num2){
    return calculateFunc(num1, num2);
}

function sum(num1, num2) {return num1 + num2};
function difference(num1, num2) {return num1 - num2};

console.log(calculator(sum, 10, 15));
console.log(calculator(difference, 100, 55));

// returning function from another function

function calculatorTwo(operator){
    switch(operator){
        case "+":
            return (num1, num2) => num1 + num2;
        case "-":
            return (num1, num2) => num1 - num2;
        default:
            console.log("Wrong operator!");
            return null;
    }
};

let resultFunction = calculatorTwo("+");
console.log(resultFunction(11,2));
console.log(calculatorTwo("-")(5,2));

// function with properties and methods

function saySomething(name){
    return `Hello there ${name}`;
}

saySomething.defaultName = "Boby";
saySomething.description = "This is a function that greets a person";

console.log(saySomething(saySomething.defaultName));


let someText = [
    "I am learning JavaScript",
    "Loving Dogs",
    "Amazing Planet Earth",
    "I will be a great JavaScript Developer"
];

function longestString(args){
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);

    let longest = '';

    for(let i = 0; i < args.length; i++){
        if(args[i].length > longest.length){
            longest = args[i];
        }
    }
    return longest;
};

console.log("Longest argument is:", longestString(someText));

// high-order functions
console.log("------- HOF forEach --------");

let someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < someNumbers.length; i++){
    console.log(someNumbers[i]);
};

console.log("With forEach:");

someNumbers.forEach(function(element){
    console.log(element);
});

let students = [
    {firstName: "Bojan", lastName: "Trpcevski", email: "bojan@example.mk", age: 25},
    {firstName: "George", lastName: "Dimitrov", email: "george@example.mk", age: 19},
    {firstName: "Martina", lastName: "Jovanovska", email: "martina@example.mk", age: 22},
    {firstName: "Stefan", lastName: "Kronevski", email: "stefan@example.mk", age: 24},
    {firstName: "Martina", lastName: "Vujovska", email: "martina.v@example.mk", age: 19}
];

for(let student of students){
    console.log(`Student: ${student.firstName} ${student.lastName} | ${student.email}`);
};

console.log("With forEach:");

students.forEach(function(student){
    console.log(`Student: ${student.firstName} ${student.lastName} | ${student.email}`);
});

// Example that we cannot return with forEach
let studentsNewArray = students.forEach(function(student){
    return `Student: ${student.firstName}`;
});
console.log(studentsNewArray); // undefined with forEach we cannot return values

// high-order function: filter
console.log("------- HOF filter --------");

let movies = [
    {
        name: "The Dark Knight",
        year: 2008,
        rating: 9.0
    },
    {
        name: "Inception",
        year: 2010,
        rating: 8.8
    },
    {
        name: "The Hobbit",
        year: 2013,
        rating: 8.3
    },
    {
        name:"Dune",
        year:2021,
        rating:7.2
    },
    {
        name: "Fifty shades of gray",
        year: 2010,
        rating: 4
    },
    {
        name: "The Matrix",
        year: 1999,
        rating: 7.5
    },
    {
        name: "Casino",
        year: 1995,
        rating: 8.2
    }
];

let goodMovies = [];
for(let i = 0; i < movies.length; i++){
    if(movies[i].rating > 8){
        goodMovies.push(movies[i]);
    }
};
console.log(goodMovies);

console.log("With HOF Filter:");

let goodMoviesFiltred = movies.filter(function(element){
    if(element.rating > 8){
        return element;
    }
});

console.log(goodMoviesFiltred);

let moviesAbove2k = movies.filter(x => x.year > 1999);
console.log(moviesAbove2k);

let moviesBelow2k = movies.filter((x) => {
    return x.year < 2000;
});
console.log(moviesBelow2k);

let studentsAbove20 = students.filter(function(element){
    if(element.age > 20){
        return element;
    }
});
console.log(studentsAbove20);

// high-order function: MAP
console.log("------ HOF Map ------");

let mappedMovies = [];
for(let i = 0; i < movies.length; i++){
    if(movies[i].year > 1988){
        mappedMovies.push({
            movieName: movies[i].name,
            movieYear: movies[i].year,
            movieRating: movies[i].rating
        });
    }
};

console.log(mappedMovies);

let mappedMoviesNew = moviesAbove2k.map(function(element){
    return {
        mName: element.name,
        mRating: element.rating
    }
});

console.log(mappedMoviesNew);

let dataFromMovies = movies.map(function(element){
    return `${element.name} | ${element.year}`;
});
console.log(dataFromMovies);

let mappedMovies2 = movies.map(function(movie){
    return{
        movie_name: movie.name,
        movie_year: movie.year,
        movie_old: `The movie is: ${2022 - movie.year} old`
    }
});
console.log(mappedMovies2);

let filtredAndMappedMovies = movies.filter(function(element){
    return element.year > 1999;
}).map(function(el){
    return {movieName: el.name, movieYear: el.year};
});

console.log(filtredAndMappedMovies);

let filtredAndMappedMoviesNew = movies
.filter(movie => movie.year > 2010)
.map(el => el);

console.log(filtredAndMappedMoviesNew);

// high-order function: Reduce
console.log("--------- HOF Reduce -------");

someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let totalSum = 0;
for(let number of someNumbers){
    totalSum += number;
}
console.log(totalSum);

let calculationWithReduce = someNumbers.reduce(function(total, currentNumber){
    return total += currentNumber;
});
console.log(calculationWithReduce);

let moviesRatingReduced = movies
.map(x => x.rating)
.reduce((totalRating, ratingItem) =>{
    return totalRating += ratingItem;
});

console.log(moviesRatingReduced);
console.log(`Average movie rating is: ${Math.floor(moviesRatingReduced / movies.length)}`);

let academyStudents = [
    {
        id: 1,
        firstName: "Frasquito",
        lastName: "Koop",
        email: "fkoop0@ow.ly",
        gender: "Male",
        city: "Benzilan",
        averageGrade: 4,
        age: 33
    },
    {
        id: 2,
        firstName: "Mirilla",
        lastName: "Heazel",
        email: "mheazel1@forbes.com",
        gender: "Female",
        city: "Buena Esperanza",
        averageGrade: 3,
        age: 37
    },
    {
        id: 3,
        firstName: "Edie",
        lastName: "Butler-Bowdon",
        email: "ebutlerbowdon2@hhs.gov",
        gender: "Female",
        city: "Cigembong",
        averageGrade: 2,
        age: 14
    },
    {
        id: 4,
        firstName: "Stearn",
        lastName: "Chrstine",
        email: "schrstine3@google.co.jp",
        gender: "Male",
        city: "Charras",
        averageGrade: 2,
        age: 34
    },
    {
        id: 5,
        firstName: "Leslie",
        lastName: "Portigall",
        email: "lportigall4@java.com",
        gender: "Male",
        city: "Resende",
        averageGrade: 5,
        age: 19
    },
    {
        id: 6,
        firstName: "Andros",
        lastName: "Dorgon",
        email: "adorgon5@sbwire.com",
        gender: "Male",
        city: "Pila",
        averageGrade: 3,
        age: 17
    },
    {
        id: 7,
        firstName: "Jervis",
        lastName: "Yitshak",
        email: "jyitshak6@gizmodo.com",
        gender: "Male",
        city: "Lâm Thao",
        averageGrade: 4,
        age: 17
    },
    {
        id: 8,
        firstName: "Carolyne",
        lastName: "Kilday",
        email: "ckilday7@time.com",
        gender: "Female",
        city: "Carbajales",
        averageGrade: 3,
        age: 23
    }
];

let onlyHighGraders = academyStudents
.filter(student => student.averageGrade > 2)
.map(student => student.averageGrade)
.reduce((totalSum, grade) =>{
    return totalSum += grade;
});
console.log(onlyHighGraders);

// high-order function: sort
console.log("------ HOF Sort -------");

let randomNumbers = [5, 2, 1, 4, 9, 6, 8];
console.log(randomNumbers);
randomNumbers.sort(); // only works for arrays with primitive values = default sorting.
console.log(randomNumbers);

let sortedMoviesASC = movies.sort(function(movie1, movie2){
    return movie1.year - movie2.year;
});
console.log(sortedMoviesASC);

let sortedMoviesDESC = movies.sort((movie1, movie2) =>{
    return movie2.year - movie1.year;
});
console.log(sortedMoviesDESC);



let ourListOfMovies = movies
.filter(x => x.rating > 7)
.map(x => x)
.sort((movie1, movie2) => movie1.year - movie2.year);

console.log(ourListOfMovies);