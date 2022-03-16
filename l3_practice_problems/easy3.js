// Easy 3

// question 1 - 3 different ways to remove all elements from the array.

// pop
// unshift
// splice

let numbers = [1, 2, 3, 4];

numbers.length = 0;
numbers.splice(0, numbers.length);

while (numbers.length > 0) {
  numbers.pop();
}

while (numbers.length > 0) {
  numbers.shift();
}

// question 2 - what will code output

console.log([1, 2, 3] + [4, 5]); // one array with all elements but first element of second array added to last el in first array

// the + operator in JS converts the arrays to strings, then concatenates the strings

// question 3 - what will code output

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // "hello there" -> JS creates a new string copy when assigning to a variable

// question 4 - what will code output

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); // first key in object will be a value of 42

// question 5 - rewrite function so it only has one return statement and does not explicity use either true or false

// original

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// corrected

function isColorValid(color) {
  return color === 'blue' || color == 'green';
}; // return the value of a conditional expression directly

const isColorValid = color => color === "blue" || color === "green";
const isColorValid = color => ["blue", "green"].includes(color);




