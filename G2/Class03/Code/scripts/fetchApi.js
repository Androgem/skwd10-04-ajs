document.getElementById("fetchStudentsBtn").addEventListener('click', function(){
    //returns promise
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json") //get by default
    .then(function(response){
        //success
        debugger
        console.log(response);
        //json() returns promise
        response.json().then(function(data){
            debugger
            //data is parsed
            console.log(data);
            console.log('Fetched students:');
            for(let student of data.students){
                console.log(student);
            }
        })
    })
    .catch(function(errorResponse){
        //error
    })
})

document.getElementById("fetchAstronautsBtn").addEventListener("click", function(){
    fetch("http://api.open-notify.org/astros.json")
    .then(function(response){
        console.log("Second fetch")
        console.log(response);
        response.json().then(function(data){
            //data is parsed server data
            for(let astronaut of data.people){
                console.log(astronaut.name);
            }
        })
    })
    .catch(function(errorResponse){
        console.log(errorResponse);
    })
})