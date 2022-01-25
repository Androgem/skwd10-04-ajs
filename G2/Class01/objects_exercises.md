# Exercises 
## Student constructor function
* Create a constructor function for Student objects with:
  * Properties:
    * firstName
    * lastName
    * birthYear
    * academy 
    * grades - array of numbers
  * Methods:
    * getAge() - returns age of student
    * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
    * getGradesAverage() - returns the average of the student grades
* Create an array with 3 students

## Create a student registry page

* Create an HTML page with student registry form with
  * First Name
  * Last Name
  * Age
  * Email
* Create a student generator function
* When the form is submitted, the inputs should be compiled into a new object from the generator function Student
* Validate that input was entered in all fields
* This student should be added to a list called "database"
* After adding a student the database should be printed in the console
* The input fields should be cleared


## Reminder App
* Create a reminder app
* There should be:
    * An input for entering the title
    * An input for entering priority (Low, medium, High)
    * An input for color
    * A textarea for adding a description
    * A button for adding the reminder
    * A button for showing all reminders
* When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
* The object should then be added to an array of reminders
* When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
* The title should be the color of the "color" property
