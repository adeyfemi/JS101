// question 1

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined
  } else if (arr.length === 0) {
    return [];
  }
  return arr.slice(1).concat([arr[0]]);
}

// q2

// input: numbers, two arguments
// output: numbers

// rules
// rotate digits the number of times specified in 2nd argument of func
// shift remaining digits to the left

// convert numbers to array of strings
// select nums in array up to length minus rotation number
// pass nums after selection 

function rotateRightmostDigits(nums, count) {
  if (count === 1) return nums;

  let numsArr = String(nums).split('');
  let rotatedNums = rotateArray(numsArr.slice(numsArr.length-count))
  let result = numsArr.slice(0,numsArr.length-count).concat(rotatedNums)
  return Number(result.join(''));
}

// q3

function maxRotation(num) {
  let numSize = String(num).length;
  for (let count = numSize; count >=2; count-=1) {
    num = rotateRightmostDigits(num, count);  
  }

 return num;
}

//
const DIGITS = ['zero', 'one', 'two', 'three', 'four', 
                'five', 'six', 'seven', 'eight', 'nine'];


function wordToDigit(words) {
  let wordArr = words.split(' ');

  let newWordToDigit = [];

  wordArr.forEach(word => {
    if (DIGITS.includes(word)) {
      newWordToDigit.push(DIGITS.indexOf(word));
    } else if (DIGITS.includes(word.replace(/[^a-z]/g, ''))) {
      let currentWord = word.replace(/[^a-z]/g, '');
      newWordToDigit.push(DIGITS.indexOf(currentWord) + `${word[word.length-1]}`);
    } else {
      newWordToDigit.push(word)
    }
  });

  return newWordToDigit.join(' ');
}


// Regex method

const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

// q6

function fibonacci(num) {
  let first = 1
  let second = 1

  if (num === 1 || num === 2) return 1;

  let fibonacciResult = fibonacci(num - 1) + fibonacci(num - 2);
  return fibonacciResult;
}


// abcS

const BLOCKS = [
['B','O'], ['X','H'], ['C','P'], ['N', 'A'],
['G','T'], ['R','E'], ['F','S'], ['J', 'W'], ['H', 'U'],
['V','I'], ['L','Y'], ['Z','M']
]

function isBlockWord(words) {
  let word = words.toUpperCase();
  let result = [];

  BLOCKS.forEach(subBlock => {
    if (word.includes(subBlock[0]) && word.includes(subBlock[1])) {
      result.push(subBlock);
    }
  })

  return result.length === 0;
}


// fib 2

function fibonacci(num) {
  if (num <= 2) return 1;  

  let first = 1
  let second = 1

  let fibonacci = 0

  while (num > 2) {
    fibonacci = second + first
    first = second
    second = fibonacci
    num -= 1;
  }

  return fibonacci;
}


//

function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}


// memoization

let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}


