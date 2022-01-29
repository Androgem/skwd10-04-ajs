# Exercises
## List Generator
* Create 3 inputs:
  * Color
  * FontSize
  * Items
* Create a button for generating unordered lists
* When the button is clicked generate a new ul element with the color, font size and items from the inputs 
> Items should be added separated by , in the input

## Movie renting app
* Create a movie renting app
* There should be an array of movie names
* There should be an input and a search button
* When the person enters a name of a movie it should search the array
* If the name exists it should show an H1 element that says: "The movie can be rented" in green text
* If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
* The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

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

## ATM machine
* Create an ATM machine. Use objects. The ATM has property balance. Initialize it with some value.
* The ATM should have the following functionalities:
* - make deposit (this function should add money to the balance)
* - make withdrawal (this function should  withdraw money)
* - get the balance (this function should display the current balance)
* - display interactive menu using prompt (1 -> get balance, 2-> make deposit, 3 -> withdrawal, 4 - exit).
* Use alerts or Use dom elements and events (ex. select, input, buttons..)
