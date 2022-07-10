// q1

// remove duplicate characters from given string
// return a new string

function crunch(str) {
  let newStr = '';

  str.split('').forEach((char, idx) => {
    if (newStr === '' || !newStr.includes(char)) {
      newStr += char;
    } else if (char !== str[idx - 1]) {
      newStr += char;
    }
  })

  return newStr;
};


function logInBox(str) {
  let horizontalRule = console.log(`+${'-'.repeat(str.length + 2)}+`)
  let emptyRule = console.log(`|${' '.repeat(str.length + 2)}|`)
  
  console.log(horizontalRule);
  console.log(emptyRule);
  console.log(`| ${str} |`);
  console.log(emptyRule);
  console.log(horizontalRule);
}

// q2

function stringy(number) {
  let totalString =''
  for (let count = 1; count <= number; count++) {
    if (count % 2 === 1) {
      totalString += '1';
    } else if (count % 2 === 0) {
      totalString += '0';
    }
  }

  return totalString;
}

// q3

function findFibonacciIndexByLength(number) {
  let idx = 2;
  let first = 1;
  let second = 1;
  
  while (true) {
    let fibonacci = first + second;
    first = second;
    second = fibonacci;
    idx += 1;

    if (String(fibonacci).length === number) {
      break;
    }
  }

  return idx;

}


// q4

function triangle(number) {
  for (let stars = 1; stars <= number; count ++) {
    console.log(`${' '.repeat(number - count)}${'*'.repeat(stars)}`);
  }
}

// q5

// double number: even length -> left side === right side digits
// input: number
// output: number

// input x 2, unless double number
// 1. determine if double number
  // find middle and slice 
  // compare two sides 
// 2. if two sides === same number return the input
// if two sides !== same number multiply by 2

function isDoubleNumber(number) {
  let strArray = String(number).split('')
  let middle = Math.floor(strArray.length / 2);
  let firstHalf = Number(strArray.slice(0,middle).join(''));
  let secondHalf = Number(strArray.slice(middle).join(''));

  return firstHalf === secondHalf;
}

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

// q6

function findAverage(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;
  return average;
}

function getGrade(score1, score2, score3) {
  let average = findAverage(score1, score2, score3);

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

function getGrade(...scores) {
  let mean = scores.reduce((acc, elm) => acc + elm) / scores.length;
  switch (true) {
      case mean < 60: return 'F';
      case mean < 70: return 'D';
      case mean < 80: return 'C';
      case mean < 90: return 'B';
      default: return 'A';
  }
}

// alternative 

const gradeMean = (grades)=>{
  let sum=0;
  for (i=0;i<grades.length;i++){
    sum+=grades(i);
  }
  return sum/grades.length;
}

switch (gradeMean){
  case (gradeMean>=90 && gradeMean<=100):
  console.log('A');
  case (gradeMean>=80 && gradeMean<=90):
  console.log('B');
  case (gradeMean>=70 && gradeMean<=80):
  console.log('C');
  case (gradeMean>=60 && gradeMean<=70):
  console.log('D');
  case (gradeMean>=0 && gradeMean<=60):
  console.log('F');
}


// q7

function cleanUp(words) {
  let cleanStr = words.replace(/[^a-z]/g, ' ')
  let strArray = cleanStr.split('');
  console.log(strArray);

  let newStr = '';

  strArray.forEach((char, idx) => {
    if (newStr === '') {
      newStr += char;
    } else if (newStr[idx - 1] !== ' ') {
      newStr += char;
    } else {
      newStr += char;
    }
  })

  return newStr;
}

function cleanUp(words) {
  return words.replace(/[^a-z]/gi, ' ').replace(/\s+/gi, ' ');
}

// q8

/*
- iterate through each word and check if palindrome
- Palindrome
  - word is the same forward and backword
  - case matters
  - convert string to array, reverse and if true return 
  - if array is not empty return true, false otherwise
*/


function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isRealPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return isPalindrome(cleanStr);
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

// running totals

function runningTotal(arr) {
  let newArr = [];
  let total = 0;

  arr.map(num => {
    total += num;
    newArr.push(total);
  });

  return newArr;
}

//

function wordSizes(str) {
  let strArr = str.split(' ');
  console.log(strArr);
  let obj = {};

  for (let count = 0; count < strArr.length; count ++) {
    obj[strArr[count].length] = obj[strArr[count].length] || 0;
    obj[strArr[count].length] += 1;
  }

  return obj;
}


// 

function cleanWord(str) {
  let result = [];

  str.split(' ').forEach(word => {
    word = word.replace(/[^A-Za-z0-9]/gi, '');
    result.push(word);
  });

  return result;
}


function wordSizes(str) {
  let strArr = cleanWord(str);
  let obj = {};

  for (let count = 0; count < strArr.length; count ++) {
    obj[strArr[count].length] = obj[strArr[count].length] || 0;
    obj[strArr[count].length] += 1;
  }

  return obj;
}

// swap
function swapLetters(str) {
  if (str.length === 1) {
    return str;
  }

  return str[str.length - 1] + str.slice(1, -1) + str[0];
}

function swap(str) {
  let strArr = strArr.split(' ');

  for (let idx = 0; idx < strArr.length; idx ++) {
    strArr[idx] = swapLetters(strArr[idx]);
  }

  return strArr;
}

function swap(str) {
  let strArr = str.split(' ');

  return strArr.map(word => {
    if (word.length === 1) {
      return word;
    } else if (word.length > 1) {
      return word[word.length - 1] + word.slice(1,-1) + word[0];
    }
  }).join(' ');
}



// 

function union(arr1, arr2) {
  let combinedArray = arr1;

  arr2.forEach(num => {
    if (!combinedArray.includes(num)) {
      combinedArray.push(num)
    }
  });

  return combinedArray;
}


function halvsies(arr) {
  let half = Math.ceil(arr.length / 2);
  let newArr = [];
  newArr.push(arr.slice(0, half), arr.slice(half))
  return newArr;
}


//

function findDup(arr) {
  let obj = {};

  arr.forEach(num => {
    obj[num] = obj[num] || 0;
    obj[num] += 1;
  });

  let result = Object.entries(obj).filter(subArr => subArr[1] === 2);
  return Number(result[0][0]);
}

// 

function interleave(arr1, arr2) {
  let newArr = [];

  arr1.forEach((char1, idx) => {
    newArr.push(char1, arr2[idx])
  });

  return newArr;
}

// 

// multiply all integers
// divide result by # of entries in array
// return string
// value rounded to 3 decimal places


function multiplicativeAverage(arr) {
 let product = arr.reduce((total, num) => total *= num )
 let division = (product / arr.length);
 return division.toFixed(3);
}


// multiply lists

// multiply each pair of numbers that have the same index
// return an array 


function multiplyList(arr1, arr2) {
  let result = [];

  arr1.forEach((num, idx) => {
    let product = num * arr2[idx]
    result.push(product);
  })
  return result;
}



// pass number as argument
// return an array of those numbers

// transform number to string
// transform string into an array
// transform the stings into an array of numbers


function digitList(number) {
  let strArr = String(number).split('');
  return strArr.map(num => Number(num));
}

// count the number of occurences of each element in an array
// transform array into an object
// transform object into a string 
// return the string of the occurences

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];



function countOccurences(vehicles) {
  let carNumbers = {};

  vehicles.forEach(type => {
    carNumbers[type] = carNumbers[type] || 0;
    carNumbers[type] += 1;
  });

  Object.entries(carNumbers).forEach(subArr => {
    console.log(`${subArr[0]} => ${subArr[1]}`)
  });
}

// array average

// calculate the average 
// round down to integer 

function average(arr) {
  let result = arr.reduce((total, num) => total += num);
  let average = result / arr.length;
  return Math.floor(average);
}

// Double char

// transform a string by doubling every char
// return a new string

function repeater(str) {
  return str.split('').map(char => char.repeat(2)).join('');
}


function doubleConsonants(str) {
  let strArr = str.split('');

  return strArr.map(char => {
    if (!char.match(/[aeiou0-9]/gi)) {
      return repeater(char);
    } else {
      return char;
    }
  }).join('')
}


//
function reverseNumber(num) {
  let numArr = String(num).split('').reverse().join('');
  return Number(numArr);
}

// Get The Middle Character

// find middle character(s) of string
// if string length odd, return 1 letter, even return 2 letters

function centerOf(str) {
  let middle = Math.floor(str.length / 2);

  if (str.length % 2 === 1) {
    return str[middle];
  } else if (str.length % 2 === 0) {
    return str[middle-1] + str[middle]
  }
}

//

function negative(num) {
  return num > 0 ? -num : num;
}

// counting up

function sequence(num) {
  let result = [];

  for (let count = 1; count <= num; count++) {
    result.push(count);
  }

  return result;
}

//

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

//

function swapName(name) {
  let newArr = name.split(' ')

  return newArr[newArr.length-1] + ', ' + newArr[0] + ' '
  + newArr.slice(1, newArr.length - 1).join(' ') 
}


// Sequence Count

function sequence(count, start) {
  let result = [];
  let total = 0

  while (count > 0) {
    total += start
    result.push(total);
    count -= 1;
  }

  return result;
}


function sequence(count, start) {
  let result = [];
  for (let i = 1; i <= count; i++) {
    result.push(i * start);
  }
  return result;
}

// reverse it

function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}

//

const multiply = (num1, num2) => num1 * num2;

const power = (n, p) => {
  if (p <= 1) return n;
  return multiply(n, power(n, p - 1));
}

power(2, 3)


//

function findDup(array) {
  let seen = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    if (seen[array[idx]]) {
      console.log(seen);
      return array[idx];
    } else {
      seen[array[idx]] = true;
    }
  }

  return undefined;
}

