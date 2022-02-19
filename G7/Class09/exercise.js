function Academy (name, start, end, subjects, students = []) {
    this.name = name;
    this.students = students;
    this.subjects = subjects || [];
    this.start = start;
    this.ends = end;
    this.numberOfClasses = this.subjects.length * 10;
    this.printStudents = function printStudents(){
        this.students.forEach(e => {
            console.log(e)
        });
    }
    this.printSubjects = 
    function printSubjects() {
        this.subjects.forEach(
            e => console.log(e)
        )
    }
}

 
function Subject (title, isElective, academy = {}, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.Academy = academy;
    this.students = students;
    this.overrideClasses = function overrideClasses(number) {
        if (number >= 3){return this.numberOfClasses = number;}
 
    }
}

 
function Student (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(academy){
        this.academy = academy;
    }
    this.startSubject = function(subject) {
        if(this.academy && this.academy.subjects.some(el => el.title === subject.title)) {
            this.currentSubject = subject;
        }
    }
}

const sedc = new Academy('SEDC', 'October', 'September');

const basicJS = new Subject('Basic Javascript', false, sedc)
const advJS = new Subject('Advanced JavaScript', false, sedc)
const basicCSharp = new Subject('Basic C#', true, sedc)
const nodeJS = new Subject('NodeJS', true, sedc)

sedc.subjects = [basicJS, advJS, basicCSharp, nodeJS];

const vedra = new Student('Vedra', 'Stojanovska', 22);
vedra.academy = sedc;
vedra.startSubject(advJS);

console.log(vedra)
