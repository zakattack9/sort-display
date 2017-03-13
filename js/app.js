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

function removeData(data) {
  // console.log('data',data);
  var newItems;
  var newArray = data.filter(function (obj) {
    for (var keys in obj){
      if (obj[keys] === 'Rick and Morty'){
        newItems = obj;
        if(typeof newItems.name === 'string'){
          // console.log('obj', obj);
          return obj;
        }
      }
    }
  });
  //returns the new filtered array. Or you can push
  return newArray;

//alternative return
  // return data.filter(function (obj) {
  //   for (var keys in obj){
  //     // console.log('obj[keys]',obj[keys]);
  //     if (keys === 'name' && typeof obj[keys] === 'string'){
  //       return obj;
  //     }
  //   }
  // });
}

// console.log('removeData(people)', removeData(people));
  people = removeData(people);

// console.log('people',people);


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

function showAll(data) {
  var myPeoplesEl = document.getElementById('mypeoples');
  var titleEl = document.createElement('h1');
  myPeoplesEl.appendChild(titleEl);

  var title = data[0].show;
  var titleTextNode = document.createTextNode(title);
  titleEl.appendChild(titleTextNode);

  data.forEach(function (obj) {
    // console.log('arry',obj.name);
    var name = obj.name;
    var desc = obj.description;

    var listEl = document.getElementById('peeps');
    var eachListEl = document.createElement('li');
    //BEING EXTRA: Adding name to an heading and desc to a p *STRETCH GOAL*

    var nameEl = document.createElement('h3');
    eachListEl.appendChild(nameEl);

    var nameTextNode = document.createTextNode( name + ': ');
    nameEl.appendChild(nameTextNode);
    // eachListEl.appendChild(nameTextNode);

    var descEl = document.createElement('p');
    eachListEl.appendChild(descEl);

    var descTextNode = document.createTextNode(desc);
    descEl.appendChild(descTextNode);
    // eachListEl.appendChild(descTextNode);

    listEl.appendChild(eachListEl);


  });

}


showAll(people);