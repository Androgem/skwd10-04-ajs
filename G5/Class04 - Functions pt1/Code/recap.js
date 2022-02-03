console.log("Connected.");

let dataFromAPI;

$.ajax({
    url:"https://swapi.dev/api/planets/",
    success: function(response){
        console.log("API Call Succeded!");
        console.log(response);
        
        dataFromAPI = response;
        return dataFromAPI;
    },
    error: function(error){
        console.log("EPI Call Failed");
        console.log(error);
    }
})

// BAD WAY to work with the data
setTimeout(function(){
    console.log("Call from the Timeout function.")
    console.log(dataFromAPI)
}, 3000);


fetch("https://swapi.dev/api/films/")
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log("API Call Succeeded!")
        console.log(response);
    })
    .catch(function(error){
        console.log("API Call Failed");
        console.log(error);
    });