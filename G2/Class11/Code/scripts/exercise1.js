function Academy(name, students, subjects, start, end) {
    this.name = !name ? "Unnamed" : name;
    this.students = !students ? [] : students;
    this.subjects = !subjects ? [] : subjects;
    this.start = start;
    this.end = end;
    this.numberClasses = this.subjects.length * 10;
    this.printStudents = function () {
        this.students.forEach(student => console.log(student));
    },
        this.printSubjects = function () {
            this.subjects.forEach(subject => console.log(subject));
        }
}

function Subject(title, isElective, academy, students) {
    this.title = !title ? "Untitled" : title;
    //default value
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.overrideClasses = function (numOfClasses) {
        this.numberOfClasses = numOfClasses < 3 ? this.numberOfClasses : numOfClasses;
    }
}

let advancedJS = new Subject("Advanced JS", false, "SEDC WEB Programming", []);
console.log(advancedJS);
advancedJS.overrideClasses(15);
console.log(advancedJS);

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function (academy) {
        this.academy = academy;
        this.academy.students.push(this);
    },
        this.startSubject = function (subject) {
            if (this.academy == null) {
                console.log("The student must be assigned to an academy");
                return;
            }

            if (this.academy.subjects.filter(x => x.title == subject.title).length == 0) {
                console.log(`This subject is not a part of ${this.academy.name}`);
                return;
            }
            if(this.currentSubject != null){
                this.completedSubjects.push(this.currentSubject);
            }
            this.currentSubject = subject;
            this.currentSubject.students.push(this);
        }
}

var academy = new Academy("SEDC WEB Programming", [], [advancedJS], new Date(), new Date("2/22/2023"));
var student = new Student("Tanja", "Stojanovska", 27);
console.log(student);
console.log(academy);
student.startAcademy(academy);
console.log(student);
console.log(academy);

student.startSubject(advancedJS);
console.log(student);
console.log(advancedJS);
