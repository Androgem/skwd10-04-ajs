let emailInput = document.getElementById("emailAddress");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let submitBtn = document.getElementById("submitBtn");
let resultOutput = document.getElementById("resultOutput");

function Student(firstName, lastName, email, age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.age = age
}

let database = [];

function addResult(list, element){
    element.innerHTML = "";
    for(let i = 0; i < list.length; i++){
        element.innerHTML += `
        <tr>
        <td>${list[i].firstName}</td>
        <td>${list[i].lastName}</td>
        <td>${list[i].email}</td>
        <td>${list[i].age}</td>
        </tr>`
    }
}

submitBtn.addEventListener("click", function(){
    if(firstName.value !== "" || lastName.value !== "" || emailInput.value !== "" || age.value !== ""){
        let student = new Student(firstName.value, lastName.value, emailInput.value, age.value);
        database.push(student);
        console.log(database);
        addResult(database, resultOutput);
    } else {
        document.getElementsByClassName("container")[0].innerHTML += `
        <div class="alert alert-danger" role="alert">
         Please fill the information!
        </div> `
    }
    firstName.value = "";
    lastName.value = "";
    emailInput.value = "";
    age.value = "";
})