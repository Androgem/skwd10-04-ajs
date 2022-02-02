$(document).ready(function(){
    $("#getStudentsBtn").click(function(){
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
            success: function(response){
                debugger
                console.log(response);
                //we don't have explicit content type -> application/json
                //response -> JSON string (not parsed)
                let parsedObject = JSON.parse(response);
                console.log(parsedObject);
                for(let student of parsedObject.students){
                    $("#students").append(`<li>${student}</li>`);
                }
            },
            error: function(response){
                console.log("The request failed!");
                console.log(response);
            }
        })
    })

    $("#getAstronautsBtn").click(function(){
        $.ajax({
            url:"http://api.open-notify.org/astros.json",
            success: function(response){
                debugger
                //explicit content type -> application/json (Network tab -> Response Headers)
                //response is already parsed
                console.log(response);
                for(let astronaut of response.people){
                    $("#astros").append(`<li>${astronaut.name}</li>`);
                }

            },
            error:function(errResponse){
                console.log("An error occurred");
                console.log(errResponse);
            }
        })
    });
})