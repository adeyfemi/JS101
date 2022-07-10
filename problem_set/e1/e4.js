let readline = require('readline-sync');

// q1 - generate rand 

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min;
}

let ageRange = getRandomInteger(20, 120);

console.log(`Teddy is ${ageRange} years old!`);

// q2 

console.log('Enter the 1st number:')
let firstNum = Number(readline.question());

console.log('Enter the 2nd number:')
let secondNum = Number(readline.question());

console.log('Enter the 3rd number:')
let thirdNum = Number(readline.question());

console.log('Enter the 4th number:')
let fourthNum = Number(readline.question());

console.log('Enter the 5th number:')
let fifthNum = Number(readline.question());

console.log('Enter the last number:')
let lastNum = Number(readline.question());

let numbers = [firstNum, secondNum, thirdNum, fourthNum, fifthNum];

if (numbers.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${numbers}.`)
} else {
  console.log( `The number ${lastNum} does not appear in ${numbers}`)
}


// q3 when will I retire

console.log('What is your age?');
let age = Number(readline.question());

console.log('At what age will your retire?');
let retireAge = Number(readline.question());

let currentYear = 2022;

let today = new Date();

let currentYear = today.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retireAge - age)}.`);
console.log(`You have only ${retireAge} years of work to go!`);


// q4 is palindrome

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

//q5

function isRealPalindrome(str) {
  let newStr = str.replace(/[^a-zA-Z]/gi, '')
  return isPalindrome(newStr.toLowerCase());
}

// q6

function isPalindromicNumber(num) {
  let numStr = String(num);
  return isPalindrome(numStr);
}


// q7

function runningTotal(arr) {
  let total = 0;
  let numCollection = [];

  arr.forEach(num => {
    total += num
    numCollection.push(total);
  });
  return numCollection;
}

function runningTotal(arr) {
  let result = 0;
  return arr.map(num => result += num);
}


// q8 

function wordSizes(str) {
  let wordArray = str.split(' ');
  let strCollection = {};

  for (let idx = 0; idx < wordArray.length; idx += 1) {
    let wordSize = wordArray[idx].length;
    if (wordSize === 0) {
      continue
    }

    if (!strCollection[wordSize]) {
      strCollection[wordSize] = 0;
    }
    strCollection[wordSize] += 1; 
  }

  return strCollection;
}


function wordSize(str) {
  let newStr = str.replace(/[^a-zA-Z]/g, ' ');
  console.log(newStr);
  return wordSizes(newStr);
}

// check if letter using the numeric ordering of strings
// then pass word through as argument 


// letter swap

function swap(words) {
 return words.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}