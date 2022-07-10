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

// rules: each number, find out how many numbers are smaller than it
// only count unique values ==> if number count > 1 times, only count once

// loop through array 
// slice array and loop through the remainder 
// if number less than current, push value into a result array
// count the length of each and map to new array

function smallestNumbersThanCurrent(arr) {
  let numbersLessThanCurrent = [];
  let numbersCounted = [];
  let sumTotal = 0;

  for (let count = 0; count < arr.length; count ++) {
    let currentNumber = arr[count];

    arr.forEach(num => {
      if (currentNumber > num && !numbersCounted.includes(num)) {
        sumTotal += 1;
        numbersCounted.push(num);
      }
    });
    numbersLessThanCurrent.push(sumTotal);
    sumTotal = 0;
    numbersCounted = [];
  }
  console.log(numbersLessThanCurrent);
}


// q2

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


// input: array
// output: null or integer

// rules: argument is array of numbers
// return a minimum sum of 5 consecutive numbers in the array
// if function contains less than five elements in array, return null

function allNumbersArray(arr) {
  let nestedArrayOfNumbers = [];
  if (arr.length < 5) return null;

  for (let count1 = 0; count1 < arr.length; count1 ++) {
    for (let count2 = count1; count2 < arr.length; count2 ++) {
      nestedArrayOfNumbers.push(arr.slice(count1, count2 + 1));
    }
  }

  return nestedArrayOfNumbers.filter(arr => arr.length === 5);
}

function sortedArray(arr) {
  let filteredArray = allNumbersArray(arr);

  let newArr = filteredArray.map(subArr => {
    return subArr.sort((a, b) => a - b);
  });

  return newArr;
}

function minimumSum(arr) {
  if (arr.length < 5) return null;

  let arraySorted = sortedArray(arr);
  let smallestSumTotal = 0;

  for (let count = 0; count < arraySorted.length; count ++) {
    let currentArray = arraySorted[count];
    let currentTotal = currentArray.reduce((total, sum) => total += sum)

    if (currentTotal > smallestSumTotal && smallestSumTotal === 0) {
      smallestSumTotal = currentTotal;
    } else if (smallestSumTotal > currentTotal) {
      smallestSumTotal = currentTotal;
    }
  }

  return smallestSumTotal;
}


console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);



// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

// input: array
// output: array filtered

// rules: return the two numbers closest together in value
// 25 - 5 = 20
// 15 - 5 = 11
// 11 - 5 = 6

// sort the array from lowest to highest
// find the highest difference in the array
// iterate through the array, select current number
// for each number find the difference, compare to highest difference
// if lower than highest difference push the two numbers in the array
// return if true, otherwise reset the result array

function closestNumbers(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  let lowestNumber = sortedArray[0];
  let highestNumber = sortedArray[sortedArray.length - 1]

  let maxDifference = highestNumber - lowestNumber;
  let firstNumber = 0;
  let secondNumber = 0;
  let result = [];
 

  for (let num1 = 0; num1 < arr.length; num1 ++) {
    firstNumber = sortedArray[num1];
    for (let num2 = 0; num2 < arr.length; num2 ++) {
      secondNumber = sortedArray[num2];
      if ((secondNumber - firstNumber) < maxDifference && 
        (secondNumber - firstNumber) > 0) {
        result.push([secondNumber, firstNumber])
        maxDifference = secondNumber - firstNumber;
      }
    }
  }

  return result.filter(arr => arr[0] - arr[1] === maxDifference)[0];
}


// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

console.log(toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') === 'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".


// rules: convert every 4TH CHARACTER IN EVERY SECOND STRING TO UPPERCASE
// other characters unchanged

function toWeirdCase(str) {
  let strArray = str.split(' ');
  let selectedStrings = [];
  let fourthWord = '';

  // find every second string

  for (let count = 0; count < strArray.length; count += 1) {
    if (count % 2 === 0) {
      selectedStrings.push(strArray[count])
    } else if (count % 2 === 1) {
     strArray[count].split('').map((char, idx) => {
        if ((idx + 1) % 4 === 0) {
          fourthWord += char.toUpperCase();
        } else {
          fourthWord += char
        }
      })   
    }
    selectedStrings.push (fourthWord);
    fourthWord = '';
  }

  selectedStrings = selectedStrings.join(' ').replace(/\s+/g, ' ');
  return selectedStrings;
}


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


// input: string
// output: string

// rules: return character that occurs least
// return the lower case of the string
// if multiple strings occur the least, return the first occurence

function leastCommonChar(str) {
  let hashObject = {};
  let strArray = str.split(' ');

  strArray.map(word => {
    word.toLowerCase().split('').map(char => {
      hashObject[char] = hashObject[char] + 1 || 1;
    })
  })

  console.log(hashObject)

  let minimumValue = 0;

  Object.values(hashObject).forEach(value => {
    if (minimumValue === 0 || minimumValue < value) {
      minimumValue = 0;
    } else if (minimumValue > value) {
      minimumValue = value;
    }
  })

 return Object.keys(hashObject).filter(key => hashObject[key] === minimumValue)[0]
}


