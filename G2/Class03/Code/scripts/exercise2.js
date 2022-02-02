$(document).ready(function(){

    function printName(name){
        debugger
        $("#result").text(`Name: ${name}`);
    }

    function printStats(person){
        debugger
        $("#resultTable").append(`<tr><td>Height:</td><td>${person.height}</td></tr>`);
        $("#resultTable").append(`<tr><td>Mass:</td><td>${person.mass}</td></tr>`);
    }

    $("#getFirstPersonBtn").click(function(){
        $.ajax({
            url:"https://swapi.dev/api/people/1",
            success:function(response){
                debugger
                printName(response.name);
                printStats(response);
            },
            error:function(errorResponse){
                console.log("Error!");
            }
        })
    })
})