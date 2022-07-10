// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

// input: array
// output: array

/* rules:
- for each num, find # of items smaller
- only count unique values

data structure: array

examples:
- [5, 6] => [0, 1]
- [3,2,1,4] => [2, 1, 0, 3]
- [2, 2, 3, 5, 7] => [0, 0, 1, 2, 3]

algorithm:
- iterate through the array, select the current num
- iterate through the array, compare current num to next num
- if current num > next num
  - increment by 1
  - push increment into a new array
- on each comparison, check if next num already in a separate array
  - if true, continue

*/


function findUniqueNumbers(arr) {
  let uniq = [];

  arr.forEach(num => {
    if (!(uniq.includes(num))) {
      uniq.push(num);
    }
  })
  return uniq;
}



function smallerNumbersThanCurrent(arr) {
  let uniq = findUniqueNumbers(arr);
  let count = 0;
  let resultArr = [];

  arr.forEach(num1 => {
    uniq.forEach(num2 => {
      if (num1 > num2) {
        count += 1;
      }
    })
    resultArr.push(count)
    count = 0;
  })

  return resultArr;
}
  
    

// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".



/* input: array
output: minimum sum

rules:
- find all subarrays
- select arrays with 5 numbers
- sum the minimum of all the 5 number arrays

algorithm:
- find all subarrays
- select only arrays with 5 numbers
- iterate through the arrays and sum the digits
- push into a result array
- find the minimum sum in the array 
  - iterate through each number, if number less than current, replace the number
  - return the final minimum number


*/

function allSubarrays(arr) {
  let subArrays = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j <= arr.length; j++) {
      subArrays.push(arr.slice(i, j))
    }
  }

  return subArrays;
}

function chooseFiveNumArrays(arr) {
  let subArrays = allSubarrays(arr);
 return subArrays.filter(subArr => subArr.length === 5)
}


function sumAllNumbersInArray(arr) {
  let fiveNumArray = chooseFiveNumArrays(arr);
  let totals = [];

  fiveNumArray.forEach(subArr => {
    let sum = 0;
    subArr.forEach(num => {
      sum += num;
    })
    totals.push(sum);
  })

  return totals;
}


function minimumSum(arr) {
  if (arr.length < 5) return null;

  let allFiveNumArraySum = sumAllNumbersInArray(arr);
  let minSum = allFiveNumArraySum[0];

  allFiveNumArraySum.forEach(num => {
    if (num < minSum) {
      minSum = num;
    }
  })

  return minSum;
}


// q3

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".


/*

input: string
output: string

rules:
- case does not matter
- find the char that occurs least often
- if multiple chars have same number, return the first one

data structure: object 

algorithm:
- convert letters to lowercase
- create a new object and count the times each char occurs
- sort the object from lowest to highest occurences
- return the first key in the sorted object

*/

function findValues(str) {
  let lowChar = str.toLowerCase();
  let charObj = {};

  lowChar.split('').forEach(char => {
    charObj[char] = charObj[char] || 0;
    charObj[char] += 1;
  });

  return charObj;
}

function findLowestValue(str) {
  let ObjChar = findValues(str);
  let minNum = 0;

  let values = Object.values(ObjChar).forEach(num => {
    if (minNum === 0) {
      minNum = num;
    } else if (num < minNum) {
      minNum = num;
    }
  })

  return minNum;
}


function leastCommonChars(str) {
  let obj = findValues(str);
  let lowestNum = findLowestValue(str);
  console.log(lowestNum)
  let result = Object.entries(obj).filter(subObj => subObj[1] === lowestNum);

  return result[0][0];
}


console.log(leastCommonChars("Hello World") === "h");
console.log(leastCommonChars("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChars("Mississippi") === "m");
console.log(leastCommonChars("Happy birthday!") === ' ');
console.log(leastCommonChars("aaaaaAAAA") === 'a');




// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".


/*
input: str
output: str


transformation and selection

rules:
- same sequence of chars returned
- every 4th char in every second word convered to Uppercase
- other chars remain the same


// every second word is an odd index
// every fouth letter is an odd index and it is always the number 3

algorithm:

- convert to an array of strings
- iterate through the words and on each loop
- if the word index is odd, then split the word and loop through each char
- on the third char of each word, uppercase the char
- return the char otherwise

*/



function toWeirdCase(str) {
  let strArr = str.split(' ');

  return strArr.map((word, idx) => {
    if (idx % 2 === 1) {
      return word.split('').map((char, idx2) => {
        if (idx2 % 4 === 3) {
          return char.toUpperCase();
        } else {
          return char;
        }
      }).join('')
    } else {
      return word;
    }
  }).join(' ')
}

// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]


/*
input: array
output: array

data structure = array

algorithm:
- sort the array from largest to smallest
- find the highest difference in the array (maxNum - minNum)
- iterate through the array and for each num compare, subtract from next num
- if difference is greater than 0 and lower than max difference, set the two values as the result
- continue until all numbers have been checked in array

*/


function closestNumbers(arr) {
  let sortedArr = arr.sort((a, b) => b - a);
  let max = sortedArr[0]
  let min = sortedArr[sortedArr.length - 1]

  let difference = max - min;
  let result;

  arr.forEach(num1 => {
    let currentNum = num1
    arr.forEach(num2 => {
      if ((num1 - num2 > 0) && (num1 - num2 <= difference)) {
        difference = num1 - num2
        result = [num1, num2]
      } 
    })
  })

  return result;
}







