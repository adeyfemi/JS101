// q1

function letterCount(str) {
  let strObj = {};

  str.split('').forEach(char => {
    strObj[char] = strObj[char] || 0;
    strObj[char] += 1;
  })

  return strObj;
}

// q2

function letterCount(arr) {
  let arrObj = {};

  arr.forEach(char => {
    arrObj[char] = arrObj[char] || 0;
    arrObj[char] += 1;
  })

  return arrObj;
}

function duplicates(arr) {
  let arrObj = letterCount(arr);
  let selectedArr = Object.entries(arrObj).filter(subArr => subArr[1] >= 2);
  console.log(arrObj)

  let count = 0;
  selectedArr.forEach(subArr => {
    if (subArr[1] === 2) {
      count += 1;
    } else if (subArr[1] > 2) {
      count += Math.floor(subArr[1] / 2)
    }
  })

  return count;
}


// q3

function findSubstrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      result.push(str.slice(i, j+1));
    }
  }

  return result;
}

function searchText(str, text) {
  let strArr = findSubstrings(str);
  let count = 0;

  strArr.forEach(char => {
    if (char === text) {
      count += 1;
    }
  })

  return count;
}

//q4 

const VOWEL = 'aeiou'

function findSubstrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      result.push(str.slice(i, j+1));
    }
  }

  return result;
}

function findVowelSubstrings(str) {
  let allSubstr = findSubstrings(str);

  let vowels = [];

  allSubstr.forEach(char1 => {
     if (char1.split('').every(char2 => VOWEL.includes(char2))) {
      vowels.push(char1)
     }
   });

  return vowels;
}


function findLongestVowel(str) {
  let vowelSubstr = findVowelSubstrings(str);

  let max = 0;

  vowelSubstr.forEach(char => {
    if (char.length > max) {
      max = char.length;
    }
  });

  return max;
}



// q5

function findSubstrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      result.push(str.slice(i, j+1));
    }
  }

  return result;
}


function countEvenNumberSubstring(str) {
  let substrings = findSubstrings(str);

  let count = 0;

  substrings.forEach(str => {
    if (Number(str) % 2 === 1) {
      count += 1;
    } 
  })

  return count;
}


// q6 

function findSubstrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      result.push(str.slice(i, j+1));
    }
  }

  return result;
}


function findString(str) {
  let substr = findSubstrings(str);
  let result = {};

  for (let i = 0; i < substr.length; i++) {
    let currentValue = substr[i];
    for (let j = 0; j < str.length; j ++) {
      if (currentValue.repeat(j) === str) {
        result[ currentValue] = j;
        break;
      }
    }
  }
  return result;
}


function minMax(str) {
  let substrObj = findString(str);
  let min = ''
  let max = 0;
  let result = [];

  Object.keys(substrObj).forEach(char => {
    if (min.length === 0) {
      min = char;
    } else if (char.length < min) {
      min = char;
    }
  });

  Object.values(substrObj).forEach(num => {
    if (max === 0) {
      max = num;
    } else if (max < num) {
      max = num;
    }
  });

  result.push(min, max);
  return result;
}

// q8

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function isPanagram(str) {
  let cleanStr = str.replace(/[^a-z]/g, '')
  let strArr = cleanStr.split('');
  let count = ''

  strArr.forEach(char => {
    if ((ALPHABET.includes(char)) && !(count.includes(char))) {
      count += char;  
    }
  });

  console.log(count);
  return count.length === ALPHABET.length;
}

// q9
function countObj(str) {
  let strArr = str.split('');
  let resultObj = {};
  strArr.forEach(char => {
    resultObj[char] = resultObj[char] || 0;
    resultObj[char] += 1;
  });

  return resultObj;
}

function scramble(s1, s2) {
  let str1 = countObj(s1);
  let str2 = countObj(s2);

  let strValues1 = Object.keys(str1)
  let strValues2 = Object.keys(str2)

  let result = [];

  strValues2.forEach(k => {
    if (str2[k] <= str1[k]) {
      result.push(true);
    } else {
      result.push(false);
    }
  });

  return result.every(char => char === true);
}

// q10

function findMultiples(num) {
  if (num < 0) return 0;

  let result = [];
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result.push(i)
    }
  }
  return result;
}

function solution(num) {
  let numArr = findMultiples(num);

  let result = 0;

  numArr.forEach(num => {
    result += num;
  });

  return result;
};


//q11 - find greatest product of five consecutive numbers

/* rules:
- find all five numbers
- order numbers in consecutive order
- find sum of each and return the max number 
*/

function findSubstrings(numStr) {
  let result = [];

  for (let i = 0; i < numStr.length; i++) {
    for (let j = i; j < numStr.length; j++) {
      result.push(numStr.slice(i, j+1));
    }
  }

  return result;
}


function findFiveLengthNums(num) {
  let substr = findSubstrings(num);
  return substr.filter(char => char.length === 5);
}


function sortFiveLengthNums(num) {
  let substr = findFiveLengthNums(num);
  return substr.map(str => {
    return str.split('').sort((a, b) => a - b)
  });
}

function minMax(num) {
  let total = 1;
  let resultArr = [];
  let max = 0;
  let orderedArr = sortFiveLengthNums(num);

  orderedArr.forEach(subArr => {
    subArr.forEach(num => {
      total *= Number(num);
    });
    resultArr.push(total);
    console.log(resultArr);
    total = 1;
  });

  resultArr.forEach(num => {
    if (max === 0) {
      max = num;
    } else if (max < num) {
      max = num;
    }
  });

  return max;
}


// q12

function findCount(str) {
  let strObj = {};
  let nonCaseStr = str.toLowerCase();

  nonCaseStr.split('').forEach(char => {
    strObj[char] = strObj[char] || 0;
    strObj[char] += 1;
  });

  return strObj;
}

function duplicateCount(str) {
  let strObj = findCount(str);

  let result = Object.values(strObj).filter(num => num > 1);
  return result.length;
}

//q13

function minimumNumber(arr) {
  let currentTotal = 0;
  arr.forEach(num => currentTotal += num);
  let nextPrime = currentTotal;

  let count = 1;
  let result = [];

  while (count < currentTotal) {
    for (let i = 1; i < nextPrime; i++) {
      if (nextPrime % i === 0 && nextPrime % 1 === 0) {
        result.push(true)
      }
    }

    console.log(result);
    
    if (result.length > 1) {
      nextPrime += 1;
      result = [];
    } else if (result.length === 1) {
      break;
    } 
    count += 1;
  }

  return nextPrime - currentTotal;
}


// q14

/* 
You are going to be given an array of integers. 
Your job is to take that array and find an index N 
where the sum of the integers to the left of N is equal to the 
sum of the integers to the right of N. If there is no index that would 
make this happen, return -1.
*/

// q15

function findCount(num) {
  let numObj = {};

  num.forEach(char => {
    numObj[char] = numObj[char] || 0;
    numObj[char] += 1;
  });

  return numObj;
}

function findOddNumberValue(num) {
  let numObj = findCount(num);
  let result = Object.entries(numObj).filter(subObj => subObj[1] % 2 === 1);
  return Number(result[0][0]);
}


// q16

function findCount(num) {
  let numObj = {};

  num.forEach(char => {
    numObj[char] = numObj[char] || 0;
    numObj[char] += 1;
  });

  return numObj;
}

function findUniq(num) {
  let numObj = findCount(num);
  return Number(Object.keys(numObj).filter(k => numObj[k] === 1)[0]);
}

// multiplicities

function compare(arr1, arr2) {
  let result = [];
  arr1.forEach(num => result.push(num**2));

  let sum1 = 0;
  let sum2 = 0;

  result.forEach(num => sum1 += num);
  arr2.forEach(num => sum2 += num);

  return sum1 === sum2;
}

// q17

function sumPairs(arr1, num) {
  let sum = [];
  let firstValue = 0;
  let secondValue = 0;

  arr1.forEach(num1 => {
    let firstValue = num1;
    for (let idx = count + 1; idx < arr1.length; idx +=1) {
      let secondValue = arr1[idx];
      if (firstValue + secondValue === num) {
        sum.push(firstValue, secondValue);
      }
    }
  });

  return sum;
}

// grouping and counting
// wierd string case
//equal sides of an array


