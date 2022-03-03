// const fileSystem = require("fs");
// const fileName = "testFile.txt"

// function writeFile(text){

//     fileSystem.writeFile(fileName, text, function(param){
//         if(param){
//             console.log("Error!!");
//             return;
//         }
//     })
// }

// function readFile(){
//      console.log(fileSystem.readFileSync(fileName, {encoding : 'utf-8'}).toString());
// }

// function readJsonFile(){
//     let jsonContent = fileSystem.readFileSync("animals.json", {encoding : 'utf-8'});
//     console.log(jsonContent);
//     let jsObject = JSON.parse(jsonContent);
//     console.log(jsObject);
// }

// function appendFile(text){
//     fileSystem.appendFile(fileName, text, function(param){
//         if(!param){
//             console.log("Error!");
//             return;
//         }
//     })
// }

// module.exports ={
//     writeFile : writeFile,
//     readFile : readFile,
//     readJsonFile : readJsonFile,
//     appendFile : appendFile
// }

const fs = require('fs');
let file = "test.txt";
module.exports = {
    addText: function(text){
         //creates a file with the content given as second argument
        //if the files exists, it overwrites it
        fs.writeFileSync(file, text, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    },
    appendText: function(text){
        //appends [text] at the end of the file on path [file]
        fs.appendFileSync(file, text, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    },
    readText: function(){
        return fs.readFileSync(file, {encoding: 'utf-8'});
    }
}