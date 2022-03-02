let data = null;
fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(result => {
    data = result;
})

export {data};