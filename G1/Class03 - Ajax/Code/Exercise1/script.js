$("button").click(function(){
    $.ajax({
        url: "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",
        success: function(response) {
            var obj = JSON.parse(response);
            printStudents(obj.students);
        }
    });
});

function printStudents(students) {
    var html = "";
    for(let student of students) {
        html += `<li>${student}</li>`;
    }
    $("#students").html(html);
}