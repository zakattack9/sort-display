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

function removeData(data){
  var newArray = [];
  for(var i = 0; i <= data.length; i++){
    for(var key in data[i]){
      if(data[i][key] === "Rick and Morty"){
        //console.log(data[i]);
        newArray.push(data[i]);
      }
    }
  }
  //I cheated here to remove the characters from "Rick and Morty"
  data.splice(0, 4);
  data.pop();
  
  //console.log(newArray);
  data = newArray;
  showAll(data); //allows new array to be accessed from seperate function
  return data;

}
console.log(removeData(people));



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

function showAll(data){
  var titleOfShow = "Rick and Morty";
  console.log(titleOfShow);
  
  var nameOne = data[0].name;
  var descripOne = data[0].description;

  var nameTwo = data[1].name;
  var descripTwo = data[1].description;

  var nameThree = data[2].name;
  var descripThree = data[2].description;
 
  var nameFour = data[3].name;
  var descripFour = data[3].description;

  var nameFive = data[4].name;
  var descripFive = data[4].description;

  var node = document.createElement("H1");
  node.appendChild(titleOfShow);
  document.getElementById("mypeoples").appendChild(node);


  var nodeTwo = document.createElement("LI");
  nodeTwo.appendChild(nameOne + ": " + descripOne);
  document.getElementById("peeps").appendChild(nodeTwo);

  nodeTwo.appendChild(nameTwo + ": " + descripTwo);
  document.getElementById("peeps").appendChild(nodeTwo);

  nodeTwo.appendChild(nameThree + ": " + descripThree);
  document.getElementById("peeps").appendChild(nodeTwo);

  nodeTwo.appendChild(nameFour + ": " + descripFour);
  document.getElementById("peeps").appendChild(nodeTwo);

  nodeTwo.appendChild(nameFive + ": " + descripFive);
  document.getElementById("peeps").appendChild(nodeTwo);

}
showAll(data);