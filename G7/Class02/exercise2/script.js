let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');
let resultHeader = document.getElementById('result');

let movies = ["Joker", "Harry Potter", "Lord of The Rings", "Transformers"];

function showResult() {
    resultHeader.innerText = "";
    resultHeader.style.color = "black";
    if(!searchInput.value) {
        resultHeader.innerText = "You must enter a movie";
    }
    else {
        let searchResult = searchMovie()
        if(!searchResult) {
            resultHeader.innerText = "We don't have that movie currently"
            resultHeader.style.color = "red";
        }
        else {
            resultHeader.innerText = "The movie is available for renting"
            resultHeader.style.color = "green"
        }
    }

    searchInput.value = ""
}


function searchMovie() {
    // for (let movie of movies) {
    // if(movie.toLowerCase().includes(searchInput.value.toLowerCase()))
    //     if(movie.toLowerCase() === searchInput.value.toLowerCase()) {
    //         return movie;
    //     }
    // }
    // return null

    let flag = false;
    for (let movie of movies) {
        // if(movie.toLowerCase().includes(searchInput.value.toLowerCase()))
        if(movie.toLowerCase()=== searchInput.value.toLowerCase()) {
            flag = true;
            break;
        }
    }
    return flag;
}

searchBtn.addEventListener("click", showResult);