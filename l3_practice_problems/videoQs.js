// question 1

function toArray(number) {
  return String(number).split('');
}

function compareDigits(num1, num2) {
  let arr1 = toArray(num1).sort();
  let arr2 = toArray(num2).sort();

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function nextBiggerNum(number) {
  let digits = toArray(number).length;
  let num2 = number;

  while (toArray(num2).length <= digits) {
    num2 ++
    if (compareDigits(number, num2)) {
      return num2;
    }
  }

  return -1;
}

// test cases

console.log(nextBiggerNum(9) === -1);
console.log(nextBiggerNum(12) === 21);
console.log(nextBiggerNum(513) === 531);
console.log(nextBiggerNum(2017) === 2071);
console.log(nextBiggerNum(111) === -1);
console.log(nextBiggerNum(531) === -1);
console.log(nextBiggerNum(123456789) === 123456798);


// question 2


function scramble(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');

  if (arr1.length < arr2.length) {
    return false;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      return false
    }
    arr1.splice(arr1.indexOf(arr2[i]), 1);
  }

  return true;
}


// question 3
const repeatedSubstringPattern = (string) => {
  let substring = '';
  let maxIdx = Math.floor(string.length / 2);

  for (let i = 0; i < maxIdx; i++) {
    substring = string.slice(0, i + 1);
    
    while (substring.length < string.length) {
      substring += substring;
    }

    if (substring === string) {
      return true;
    }
  }

  return false;
}

// question 3 attempt

function substrings(string) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    result.push(string.slice(0, i+1))
  }
  return result;
};

function repeatedSubstringPattern(string) {
  let allSubstrings = substrings(string);
  let repeatedString = '';

  for (let i = 0; i < string.length / 2; i++) {
    repeatedString = allSubstrings[i];

    while (repeatedString.length < string.length) {
      repeatedString += allSubstrings[i];
    }

    if (repeatedString === string) {
      return true;
    }
  }

  return false;
}


// question 4
function allSubstrings(str) {
  let substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      substrings.push(str.toLowerCase().slice(i, j));
    }
  }

  return substrings.filter(char => char.length > 1);
};

function substringTest(str1, str2) {
  let subs1 = allSubstrings(str1);
  let subs2 = allSubstrings(str2);
  let result = [];

  subs2.forEach(char2 => {
    if (subs1.includes(char2)) {
      result.push(char2)
    }   
  })
  return result.length > 0;
}


// question 5
// write a function to find the longest common prefix string amongst an array of strings
// if no common prefix, return an empty string ""

function allSubstrings(arr) {
  let substrings = [];
  let count = 0;

  while (count < arr.length) {
    let currentWord = arr[count]

    for (let i = 0; i < currentWord.length; i++) {
      for (let j = i; j < currentWord.length; j++) {
        substrings.push(currentWord.toLowerCase().slice(i, j))
      }
    }
    count += 1;
  } 
  uniqueArray = substrings.filter(function(item, pos) {
    return substrings.indexOf(item) === pos;
  })
  return substrings
}


function commonPrefix(arr) {
  let substrings = allSubstrings(arr);

  let result = [];

  for (let count = 0; count < substrings.length; count++) {
    let char = substrings[count];
    
    if (arr.every(word => word.includes(char))) {
      result.push(char)
    }
  }

  if (result.length === 0) return '';

  let longString = result.sort(
    function (a, b) {
      return b.length - a.length;
    }
  )[0];
  return longString;
}

commonPrefix(['flower', 'flow', 'flight']);
commonPrefix(['dog', 'racecar', 'car'])
commonPrefix(['peace', 'peaceful', 'peity']);


function allSubstrings(arr) {
  let numArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      numArr.push(arr.slice(i, j+1))
    }
  }
  return numArr;
}

allSubstrings([1,2,3,4,3,2,1])


// better solution

function commonPrefix(arr) {
  let sortedArr = arr.sort(
    function (a, b) {
      return a.length - b.length;
    });

  let shortestString = sortedArr[0];
  
  for (let count = 0; count < shortestString.length; count++) {
    if (arr.every(word => word.startsWith(shortestString))) {
      return shortestString;
    } 
    else {
      shortestString.slice(0, shortestString.length - 1)
    }
  }
  return shortestString;
}

// question 6
let findEvenIndex = (arr) => {
  for (let count = 0; count < arr.length; count++) {
    let leftSide = arr.slice(0, count);
    let rightSide = arr.slice(count + 1);

    let leftTotal = leftSide.reduce((total, sum) => total += sum, 0);
    let rightTotal = rightSide.reduce((total, sum) => total += sum, 0);

   if (leftTotal === rightTotal) {
      return count;
   }

  return -1;
}



