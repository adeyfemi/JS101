// q1

let arr = [340, 15, 1, 3400];
arr.sort(); // => [ 1, 15, 340, 3400 ]

// q2

const ARR = [
  { one: '1', two: 2 },
  [ { four: 5, three: 6 }, 'three' ],
  'three',
  { '2': 'two', '3': 'three' }
]

ARR[1][1];

// q3

let todoLists = [
  {
    id: 1,
    listName: 'Groceries',
    todos: [
      { id: 1, name: 'Bread', completed: false },
      { id: 2, name: 'Milk', completed: false },
      { id: 3, name: 'Apple Juice', completed: false }
    ]
  }
];

[2][2][name]


todoLists[0]["todos"][2].name = 'Orange Juice';

// q7

function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);


// quiz answers

// Array.prototype.sort arranges the values in the array by comparing the values of each element
// as strings. The resulting array contains all of the elements arranged in ascending lexicographic
// order based on UTF-16 codepoints. If two strings have the same value up to the length of the 
// shorter string, sort positions the shorter string before the longer one

// First class functions are true
// all JS functions are first-class functions
// first class function can return a first-class function


// additional notes on first class functions
//  not necessary for a first class function to accept a function argument or return a function value
// no limit to the number of functions that can be passed as arguments to a first class function
// first class functions can be passed to or returned by any other first class function


// Higher order functions
// must accept a function as an argument or return a function
// JS does support higher order functions
// Functions have nested function definitions - called nested functions
// Higher order function can return any function, including a function that is itself another
//    higher order functions


// Callback functions

//higher order functions accept functions as arguments or return them. Since a callback function is
// passed as an argument to another function, that other function must be a higher order function

// JS functions are first class functions
// no limit to the number of callback functions that can be passed to another function, provided
// that function is prepaed to deal with those callbacks
