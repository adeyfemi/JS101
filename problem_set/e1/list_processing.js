// q1 - sum of digits
function sum(num) {
  return String(num).split('').reduce((total, num) => total += Number(num), 0);
}

// q2 
const ENGLISH_WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

function alphabeticNumberSort(arr) {
  return arr.map(num => ENGLISH_WORD[num]).
  sort().
  map((char) => ENGLISH_WORD.indexOf(char))
}

// alternative solution
const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                      'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                      'twelve', 'thirteen', 'fourteen', 'fifteen',
                      'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

// q3
function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.map(num => {
    arr2.map(num2 => result.push(num * num2))
  })
  return result.sort((a, b) => a - b);
}

// q4 
function leadingSubstrings(str) {
  let result = [];
  let count = 0
  while (count < str.length) {
    result.push(str.slice(0, count+1));
    count += 1;
  }

  return result;
}

function leadingSubstrings(str) {
  return str.split('').map((char, idx) => str.slice(0, idx+1))
}

// q5
function substrings(str) {
  let result = [];
  for (let idx1 = 0; idx1 < str.length; idx1++) {
    let substring = str.substring(idx1); // calls the entire word or phrase
    console.log(substring)
    result = result.concat(leadingSubstrings(substring));
  }

  return result;
}


// using map

function substrings(str) {
 return str.split('').map((_, idx) => leadingSubstrings(str.slice(idx))).flat();
};


// q6 palindromic strings
function palindromes(str) {
  let allSubstrings = substrings(str);
  return allSubstrings.filter(char => char.length > 1).
  filter(chars => chars === chars.split('').reverse().join(''));
}

// q7 
function sumOfSums(arr) {
  let runningTotal = 0;
  let finalTotal = 0;

  arr.forEach(num => {
    runningTotal += num;
    finalTotal += runningTotal;
  })
  return finalTotal;
}


// 
function sumOfSums(arr) {
  let sumTotal = 0;
  for (let idx = 1; idx <= arr.length; idx++) {
    sumTotal += arr.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}

//
function sumOfSums(numbers) {
  return numbers
    .map((_, idx) =>
      numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)
    )
    .reduce((sum, value) => sum + value);
}

// q9
function buyFruit(fruits) {
  let arr = [];
  fruits.map((subArr, idx) => {
    for (let count = 1; count <= subArr[1]; count++) {
      arr.push(subArr[0])
    }
  });
  return arr;
}


// q10

function transactionsFor(code, arr) {
  return arr.filter(hsh => hsh['id'] === code);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


transactionsFor(101, transactions);


// q11

function isItemAvailable(code, arr) {
  let sum = 0;
  let transactions = transactionsFor(code, arr);
  transactions.forEach(hsh => {
    if (hsh['movement'] === 'in') {
      sum += hsh['quantity'];
    } else {
      sum -= hsh['quantity'];
    }
  });

  return sum > 0 
}