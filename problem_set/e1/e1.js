// q1 - isn't it odd?

/*
input: integer
  - positive, negative or zero
output: boolean

algorithm:
- pass an integer into a function
- check if absolute value is odd 
  - odd means not divisible by 2
- return true or false
*/

function isOdd(num) {
  return (num < 0 ? (num * -1) % 2 === 1 : num % 2 === 1);
}

console.log(isOdd(2)); 
console.log(isOdd(5)); 
console.log(isOdd(-17)); 
console.log(isOdd(-8));
console.log(isOdd(0)); 
console.log(isOdd(7)); 

// alternative 

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

// q2 - log all odd numbers from 1 to 99, each number on a separate line

for (let count = 1; count < 100; count +=2) {
  console.log(count);
}

let count = 1;

while (count < 99) {
  console.log(count);
  count += 2;
}

// q3 - log all even numbers from 1 to 99

for (let count = 2; count < 100; count +=2) {
  console.log(count);
}

// alternative

for (let num = 1; num < 100; num += 1) {
  if (num % 2 === 1) {
    continue;
  }

  console.log(num);
}


// q3 - build a program that asks user to enter length and width of a room in meters
// and 2) log area of room to console in both sq meters and sq ft

/*
let readline = require('readline-sync');

const SQ_METERS_FEET = 10.7639;

console.log('Enter the length of the room in meters:');
let length = readline.question();
console.log('Enter the width of the room in meters:');
let width = readline.question();

let sqMeters = length * width;
let sqMetersFeet = (sqMeters * SQ_METERS_FEET);

console.log(
  `The area of the room is ${sqMeters.toFixed(2)} square meters (${sqMetersFeet.toFixed(2)}) square feet).`
  );

/* solution

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);

*/

// q4 - tip calculator

/*
let bill = parseFloat(readline.question('What is the bill?'));

let tipPercent = parseFloat(readline.question('What is the tip percentage?'));

let tip = bill * (tipPercent/100);
console.log(tip)

let total = bill + tip;
console.log(total);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

*/

// q5 - sum or product of numbers between 1 through entered number

let readline = require('readline-sync');

let maxNumber = Number(readline.question('Please enter an integer greater than 0:'));
let ans = readline.question('Enter "s" to conmpute the sum, or "p" to compute the product.');

let sum = 0;
let product = 1;

for (let count = 1; count < maxNumber + 1; count ++) {
  if (ans === 's') {
    sum += count;
  } else if (ans === 'p') {
    product *= count;
  }
}

if (ans === 's') {
  console.log(`The sum of the integers between 1 and ${maxNumber} is ${sum}.`);
} else if (ans === 'p') {
  console.log(`The product of the integers between 1 and ${maxNumber} is ${product}.`);
}


// solution

function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}


// q6 - short long short

// get two strings
// determine length of two strings
// return concatenation of short long short

function shortLongShort(str1, str2) {
  return str1.length > str2.length ? str2.concat(str1, str2) : str1.concat(str2, str1);
}

shortLongShort('abc', 'defgh'); 

// q7 - leap year

function isLeapYear(year) {
  if (year % 400 === 0 && year % 100 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
  return false;
}

// shorter solution

function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 === 0);
}

isLeapYear(2016);      
isLeapYear(2015);      
isLeapYear(2100);      
isLeapYear(2400);      
isLeapYear(240000);    
isLeapYear(240001);    
isLeapYear(2000);      
isLeapYear(1900);      
isLeapYear(1752);      
isLeapYear(1700);      
isLeapYear(1);         
isLeapYear(100);       
isLeapYear(400); 

// q8 - leap year p2

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}


// q9 - multiples of 3 and 5

function multiSum(num) {
  let multiples = [];

  for (let count = 1; count < num + 1; count++) { // finding the multiples
    if (count % 3 === 0 || count % 5 === 0) {
      multiples.push(count);
    } 
  }

  return multiples.reduce((total, num) => total += num, 0); // summing the multiples
}

// good scenario to make it into two separate functions as there is two actions here.


multisum(3);      
multisum(5);      
multisum(10);      
multisum(1000);


// UTF-16 String Value


function utf16Value(str) {
  let strArr = str.split('');
  let totalCodeValue = 0;

  strArr.forEach((char, idx) => totalCodeValue += char.charCodeAt(char));
  return totalCodeValue;
}


const OMEGA = "\u03A9";
utf16Value(OMEGA);
utf16Value(OMEGA + OMEGA + OMEGA);


// Solution

function utf16Value(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}


