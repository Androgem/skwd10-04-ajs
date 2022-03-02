class Student {
  constructor(name, age, group) {
    this.name = name;
    this.age = age;
    this.group = group;
  }

  get name() {
    return this._name;
  }
  set name(newValue) {
    if (newValue.length > 1) {
      this._name = newValue;
    } else {
      throw new Error("Name must be at least 2 characters");
    }
  }
  sayHi() {
    console.log(`Hi my name is ${this.name}`);
  }

  static changeGroupToStudent(student, newGroup) {
    student.group = newGroup;
  }
}

let student = new Student("Goce", 29, "G6");
console.log(student.name);
student.name = "Angel";
console.log(student);

let sortAsc = document.getElementById("sortASC");
sortAsc.addEventListener("click", () => {
  console.log("I AM SORTING");
});
// student.sayHi();
// student.name;
// Student.changeGroupToStudent(student, "G9");
// console.log(student);
