// question 1

function sum(number) {
  return String(number)
  .split("")
  .reduce((accum, digit) => accum + Number(digit), 0);
}

// q2

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

functin alphabeticNumberSort(arr) {
  return [...arr].sort(wordSort)
}

// question 2

function multiplyAllPairs(ar1, arr2) {
  const result = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      result.push(num1 * num2);
    });
  });

  return result.sort((a, b) => a - b);
}

//
function leadingSubstrings(str) {
  let result = [];

  for (let idx = 0; idx < str.length; idx++) {
    let currentChar = str.slice(0, idx+1)
    result.push(currentChar)
  }

  return result;
}

//
function leadingSubstrings(str) {
  let charArr = str.split('');
  return charArr.reduce((acc,_,idx,arr) => {
    return acc.concat(arr.slice(0, idx + 1).join(''), [])
  }
}

//
function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.substring(0, idx + 1));
}

//

function substrings(str) {
  let substrings = [];
  for (let idx = 0; idx < str.length; idx++) {
    let currentValue = str.slice(idx, str.length); // returns a string
    substrings = substrings.concat(leadingSubstrings(currentValue));
  }

  return substrings;
}

// 

function substrings(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let e = i + 1; e <= str.length; e++) {
      result.push(str.slice(i, e));
    }
  }

  return result;
}

function palindromes(str) {
  let result = [];
  let substr = substrings(str);
  console.log(substr);
  substr.forEach(char => {
    if (char.length > 1 && char === char.split('').reverse().join('')) {
      result.push(char);
    } 
  });

  return result;
}

function sumOfSums(arr) {
  let currentNum = 0;
  let sumOfSums = 0;

  arr.forEach(num => {
    currentNum += num;
    sumOfSums += currentNum
  })

  return sumOfSums;
}

//

function sumOfSums(numbers) {
  let sumTotal = 0;
  for (let idx = 1; idx <= numbers.length; idx++) {
    sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}


// 

// transformation
// take nested array and convert to one array
// take the type of fruit and show it a number of times specified


// selection


// iterate through the array the number of desired times
// on each iteration, add the fruit to a new array
// return the new array


function buyFruit(fruits) {
  let fruitArr = [];

  fruits.map(subArr => {
    while (subArr[1] > 0) {
      fruitArr.push(subArr[0])
      subArr[1] -= 1;
    }
  })

  return fruitArr;
}



// transformation

// selection:
// take object and return an array 
// array contains only transactions specified inventory item

function transactionsFor(num, arr) {
  let newArr = [];

  arr.forEach(subObj => {
    if (subObj['id'] === num) {
      newArr.push(subObj);
    }
  });

  return newArr;
}


function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(inventory => inventory.id === inventoryItem);
}


function isItemAvailable(inventoryItem, transactions) {
  let sum = 0;
  let selectedInventory = transactionsFor(inventoryItem, transactions);

  selectedInventory.forEach(subObj => { 
    if (subObj.movement === 'in') {
      sum += subObj.quantity;
    } else if (subObj.movement === 'out') {
      sum -= subObj.quantity
    }
  })
  return sum > 0;
}