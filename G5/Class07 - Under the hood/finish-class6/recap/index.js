// 1. napravi funkcija kade shto ke proveri koj studenti im e dozvoleno da posetat disko t.e. se polnoletni
// 2. neka imame property isLadiesNight
let result = document.getElementById("result");

let apiUrl =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let fetchStudent = (url) => {
  fetch(url)
    .then((promise) => promise.json())
    .then((result) => {
      console.log(result);
      console.log(checkForAdults(result, true));
    })
    .catch((error) => console.log("Error occured", error));
};

fetchStudent(apiUrl);

let checkForAdults = (arrayOfStudents, isLadiesNight = false) => {
  let adultStudents = [];

  // FILTER and MAP return new ARRAY
  adultStudents = arrayOfStudents
    .filter((student) => {
      console.log(isLadiesNight);
      if (isLadiesNight) {
        return student.age >= 18 && student.gender === "Female";
      } else {
        return student.age >= 18;
      }
    })
    .map((student) => {
      let newStudentObject = {
        fullName: `${student.firstName} ${student.lastName}`,
        age: `${student.age} years old.`,
        gender: student.gender,
      };
      return newStudentObject;
    })
    .forEach((newStudent) => printStudent(newStudent, result));

  //   return adultStudents;
};

let printStudent = (student, element) => {
  if (!student) {
    return;
  } else {
    element.innerHTML += `
            <ul>
                <li>${student.fullName}</li>
                <li>${student.age}</li>
                <li>${student.gender}</li>

            </ul>
        
        `;
  }
};
