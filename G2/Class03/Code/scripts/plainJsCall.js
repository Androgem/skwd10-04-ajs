document.getElementById("plainJsRequest").addEventListener("click", function(){
    let xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.onload = function(){
        debugger
        if(xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 300){
            //success
            console.log(`Response: ${xmlHttpRequest.response}`); //server data
            //xmlHttpRequest.response -> JSON string
            let academyObject = JSON.parse(xmlHttpRequest.response); //we parse the response
            console.log(academyObject);
            document.getElementById("academy").innerText = `Academy ${academyObject.academy} has ${academyObject.students.length} students`;
        }
        else{
            console.log("An error occurred!");
        }
    }

    //open connection, we tell that we want to get data, from which url
    xmlHttpRequest.open("get", "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json");
    //send HTTP request
    xmlHttpRequest.send();

    //AGAIN WE NEED TO PARSE EVEN IF IT IS EXPLICIT APPLICATION/JSON
    //response has content type application json
    let xhr2 = new XMLHttpRequest();
    xhr2.onload = function(){
        if(xhr2.status>=200 && xhr2.status < 300 && xhr2.readyState == 4){ 
            console.log(`XHR 2 response ${xhr2.response}`);
            let jsObject = JSON.parse(xhr2.response); // xhr2.response is still json string
            console.log(`XHR 2 response object:`);
            console.log(jsObject);
        }
    }

    xhr2.open("GET", "http://api.open-notify.org/astros.json"); // open connection
    xhr2.send(); //send HTTP request
})