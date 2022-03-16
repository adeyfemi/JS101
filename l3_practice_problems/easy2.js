// question 1 - replace every occurence of important with urgent

let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.replace('important', 'urgent');
// replaces only the occurence of the first time word shows up

// replacing all occurences

advice.replaceAll('important', 'urgent');

// question 2
// Array.prototype.reverse: reverses order of elements in array
// Array.prototype.sort: rearranges elements in variety of ways, including descending
//  both methods mutate the original array 

// orginal form
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// new form

let reversedNumbers = []; 
Object.assign(reversedNumbers, numbers);
reversedNumbers.reverse();

let reversedNumbers = []; 
Object.assign(reversedNumbers, numbers);
reversedNumbers.sort((num1, num2) => num2 - num1);

let reversedNumbers = numbers.slice().reverse(); // no mutation to original array

// Spread Syntax
let reversedNumbers = [...numbers].sort((num1, num2) => num2 - num1);

// bonus check
let reversedNumbers = [];

numbers.forEach(word => reversedNumbers.unshift(word)); // unshift does not mutate but shift does
reversedNumbers.sort((num1, num2) => num2 - num1);

// question 3 - determine whether the number is included in the array

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8
let number2 = 95;

numbers.includes(number1);
numbers.includes(number2);


// question 4 - add additional string

let famousWords = "seven years ago...";

let newStr = 'Four score and';

// first way
newStr + ' ' + famousWords

// second way

`${newStr} ${famousWords}`

// third way

"Four score and ".concat(famousWords);

// question 5 - mutate array by removing number in index 2

let numbers = [1, 2, 3, 4, 5]; // remove 1 element at index 2
numbers.filter((num, idx) => idx !== 2);
numbers.splice(2, 1); // remove 1 element at index 2

// question 6 - flatten a nested array

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newArray = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
newArray.flat();

let flintstones = ["Fred", "Wilma"];
flintstones.concat(["Barney", "Betty"], ["Bambam", "Pebbles"]);

// sick code for flattening
flintstones = [].concat(...flatten);

//spread syntax
newArr = [...flintstones].flat();

// reduce function
let newArr = flintstones.reduce((previous, current) => 
  previous.concat(current), []);


// for Each method

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newArr = [];

flintstones.forEach(arr => {
  if (Array.isArray(arr)) {
    newArr.push(...arr);
  } else {
    newArr.push(arr);
  }
});

// better code forEach

let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

// question 7 - create an array from this object contianing only 2 elements
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

Object.entries(flintstones).filter(arr => 
  arr[0] === 'Barney').flat();

// alternative

Object.entries(flintstones).filter(pair => 
  pair[0] === "Barney").shift();

// question 8 - check if variables are arrays

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers);
Array.isArray(table);

// 9 - center the title above table with spaces. 

let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);

// question 10 - count number of lowercase t chars, but in one line expressions

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let count = 0;
statement1.split('').forEach(char => {
  if char === 't' {
    count ++
  }
})

count

// reduce method

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;
