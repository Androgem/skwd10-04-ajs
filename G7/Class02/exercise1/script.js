let showStudentsBtn = document.getElementById("showStudentsBtn");
let students = ["Marko", "Ana", "Borche", "Pane", "Elena", "Igor"];

showStudentsBtn.addEventListener("click", function(e) {
    let unorderedList = document.createElement("ul");
    for (let student of students) {
        let listItem = document.createElement("li");
        listItem.innerText = student;
        unorderedList.appendChild(listItem);
    }

    console.log(e.target);
    e.target.parentNode.appendChild(unorderedList);
})