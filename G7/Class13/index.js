function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberofclasses = 10;
    function PrintStudents() {
      console.log(this.students);
    }
    function PrintSubjets() {
      console.log(this.subjects);
    }
  }
  function Subject(title, isElective, academy, students, overrideClasses) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.academy.numberOfClasses = overrideClasses;
  }
  function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.curentSubject = null;
    this.startAcademy = function(Academy) {
        Academy.students.push(this);
        this.academy = Academy;
        console.log('Successfully added student to the academy');
    };
    this.startSubject = function(Subject) {
        if(this.academy === null || !this.academy.subjects.some(s => s.title === Subject.title)) {
            console.log('The academy the Student is enlisted in doesn\'t have this subject')
            return;
        }
        if (this.curentSubject !== null) {
            this.completedSubjects.push(this.currentSubject);
        }
        this.curentSubject = Subject;
        Subject.students.push(this);
        console.log('Current subject successfuly updated');
    }
    // if (this.academy !== null) {
    //     let exists = false;
    //     for (subject of this.academy.subjects) {
    //       if (subject === startSubject) {
    //         exists = true;
    //       }
    //     }
    //     if (exists) {
    //       this.curentSubject = startSubject;
    //     } else {
    //       console.log("Error, subject not in this academy.");
    //     }
    //   } else {
    //     console.log("Error, academy not set.");
    //   }
    }

    $.ajax({
        url: 'https://swapi.dev/api/people',
        method: 'GET',
        headers: {},
        success: (r) => {
            
        }
    });
    