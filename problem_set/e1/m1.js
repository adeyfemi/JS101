// q1

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  let newArray = arr.slice(1).concat(arr[0]);
  return newArray;
}

// q2

function rotateRightmostDigits(numbers, count) {
  let numArr = String(numbers).split('');
  let firstSlice = numArr.slice(0, numArr.length - count);
  let secondSlice = rotateArray(numArr.slice(numArr.length - count))
  return Number(firstSlice.concat(secondSlice).join(''));
}

// q3

function maxRotation(numbers) {
  let numbersLength = String(numbers).length;
  let count = numbersLength;
  while (count > 1) {
    let rotatedNumber = rotateRightmostDigits(numbers, count)
    numbers = rotatedNumber
    count -= 1;
  }

  return numbers;
}

// q4 

// q5

const DIGITS = {
  'one' : 1,
  'two' : 2,
  'three' : 3,
  'four' : 4,
  'five' : 5,
  'six' : 6,
  'seven' : 7,
  'eight' : 8,
  'nine' : 9
}

function wordToDigit(string) {
  let resultArr = [];
  string.split(' ').map(char => {
    if (Object.keys(DIGITS).includes(char)) {
      resultArr.push(DIGITS[char])
    } else if (Object.keys(DIGITS).includes(char.slice(0, char.length - 1))) {
      resultArr.push(DIGITS[char.slice(0, char.length - 1)] + (char[char.length - 1]))
    } else {
      resultArr.push(char);
    }
  })

  return resultArr.join(' ');

}

// solution

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
    console.log(regex)
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

// q6

function fibonacci(n) {
  let fibonacci = 0;
  let firstNumber = 1;
  let secondNumber = 1;
  if (n === 1 || n === 2) return 1;

  while (n > 2) {
    fibonacci = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = fibonacci
    n -= 1;
  }

  return fibonacci
}

// 

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}


// q7


function fibonacci(n) {
  let fibonacci = 0;
  let firstNumber = 1;
  let secondNumber = 1;
  if (n === 1 || n === 2) return 1;

  while (n > 2) {
    fibonacci = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = fibonacci
    n -= 1;
  }

  return fibonacci
}

// 

function fibonacci(n) {
  let previousTwo = [1, 1];

  for (let count = 3; count <= n; count ++) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}


// q8 fibonacci memorization

const results = {};

function fibonacci(n) {
  if (n <= 2) return 1;

  if (n in results) {
    return results[n];
  } else {
    results[n] = fibonacci(n - 2) + fibonacci(n - 1)
  }

  return results[n]
}

