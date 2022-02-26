# JediArchives 📚
## Idea ☄
The Jedi Archives has long been forgotten, but that should not stop us from rebuilding this masterpiece of knowledge. The JediArchives app is the first step to rebuilding the collective knowledge about the Star Wars universe. The app should help any user that is interested in some Star Wars data to go through the archive and find what they are looking for. A small step for the internet, but a huge step for Star Wars fans.
## Requirements 🗺
The web page should be:
* Single page application
* There should be only one page
* The logo should show at the front of the page
* On the page there should be an image of **person** and **space-ship** that get data for the corresponding image and display a table
* Tables:
  * Person
    * Name
    * Height
    * Mass
    * Gender
    * Birth Year
    * Homeworld
    * Appearances ( Count of movies they appeared in )
  * Ship
    * Name
    * Model
    * Manufacturer
  * ShipDetails
    * Cost
    * Cargo Capacity 
    * People Capacity ( Max people on board )
    * Class
* There should be 10 records per page of a table
* There should be next/previous buttons to change the pages
* Ship should inherit from class ShipDetails
## Flow 🌈
1. Person opens the web app
2. Right away the StarWars logo is shown and images of a person and spaceship
3. The person clicks on the person image
4. A table is generated with 10 people from the StarWars universe and below, a next button
5. The person clicks on the Next button
6. Immediately the view changes to a new table with new people and a previous button appears
7. A table is generated with 10 ships from the StarWars universe and below, a next button
8. The person clicks on the Next button
9. Immediately the view changes to a new table with new ships and a previous button appears
10. The person clicks on the previous button
11. Immediately the view changes to a new table with the first ships and the previous button disappears


## BONUS

1. Use getters/setters to mutate the data of Height and Mass fields in Person to be suffixed with cm/kg repsectively
2. Use getters/setters to muatate the data of Cost and Cargo Capacity in Ship to be shown as '1.000.000' instead of only digits example '1000000'

3. Add a click event for each Person in the table that will open a page with all the details for that person including the details for that person's homeworld
  * Create a static function on the Person class that will accept a Person object and call an endpoint to retrieve that person's homeworld data (the static function needs to check if it's getting a valid Person object or else it should throw a descriptive error)
  * Create a Planet class to store all the necessary data for the homeworld
  * Planet
    * name
    * rotationPeriod (should be suffixed with h)
    * orbitalPeriod (should be suffixed with d)
    * diameter (should be suffixed with km)
    * climate
    * gravity
    * terrain
    * surfaceWater (should be suffixed with %)
    * population (should be formated in a more readable way i.e 1.000.000 instead of 1000000)

4. Notice that there are a lot of requirements to add suffixes or format data in a certain way, try to create a utility function for this that you will be able to reuse to achieve wanted results