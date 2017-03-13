/*
** Sort and Display
*/

var people = [
  {
    'name' : 12,
    'description' : 'Wubbaluba Dub Dub',
    'show' : 'Rick and Morty'
  },
  {
    'name' : 'Scary Terry',
    'description' : 'Scare tactical officer',
    'show' : 'Rick and Morty'
  },
  {
    'name' : 'Morty Smith',
    'description' : 'Grandson',
    'show' : 'Rick and Morty'
  },
  {
    'name' : 'Rick Sanchez',
    'description' : 'Retired Scientist still Mad',
    'show' : 'Rick and Morty'
  },
  {
    'name' : 'Bart Simpson',
    'description' : 'Son of Homer Simpson',
    'show' : 'The Simpsons'
  },
  {
    'name' : 'Summer Smith',
    'description' : 'Grand daughter',
    'show' : 'Rick and Morty'
  }
];



/*
* Cleaning Data
* Create a function named removeData that passes one parameter - data
* Using array method(s) remove objects from people
* Return a new array where the name
* Console log your new array of objects
*
* @parameter(s) data
* @return an array of objects of people from Rick and Morty
*   & Re-assign the variable people to the new data
*
*/




/*
* Display New Data
* With your new list of people add them to the HTML unordered list 'peeps'
* Create a function named showAll that passes one parameter - data
* Within the function:
*   Access the Array
*   Create a variable with the title of the show - should console log once
*   For each object create variables for the person's name and description
*
*  Add the Title and a list of names and description for each person:
*   Create an HTML element h1 and append it to the #mypeoples div
*   Append the variable title of the show to the H1 element
*   Create new 'li' to append to the ul in the #peeps div
*   Append the person's name and description
* Stretch goal: display the name in an h3 and the description in a p tag
*
** Note test adding elements in the browser.
*
* @function showAll
* @parameter(s) data from removeData(people)
* @display the list of people and title of the show to the DOM
*
*/
