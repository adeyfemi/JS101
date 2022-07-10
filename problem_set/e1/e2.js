// q1 - welcome stranger

function greetings(arr, hsh) {
  return `Hello, ${arr[0]} ${arr[1]} ${arr[2]}! Nice to have a ${hsh['title']} ${hsh['occupation']} around.`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
  );

// solution

function greetings(name, status) {
  return `Hello ${name.join(' ')}! Nice to have a ${status['title']} 
    ${status['occupation']
  } around.`;
}

// q2 - greeting user

let readline = require('readline-sync');

let name = readline.question('What is your name?');
if (name[name.length - 1] === '!') {
  name = name.slice(0, -1)
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`)
} else {
  console.log (`Hello ${name}.`);
}

// q3 - multiplying two numbers
/*
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(5, 3) === 15);

// alternative arrow method

const multiply = (num1, num2) => num1 * num2; // return value provided implicitly

// q4 - square an argument

function square(num) {
  return multiply(num, num);
}

let square = (num) => multiply(num, num);

// power to the n

function power(num, exponent) {
  let powerN = 0;
  for (let count = 0; count < exponent + 1; count++) {
    powerN = multiply(num, multiply(count, num))
  }
  return powerN;
}

*/
// q5 - artithmetic integer

let firstNum = Number(readline.question('==> Enter the first number:'));
let secondNum = Number(readline.question('==> Enter the second number:'));

console.log(`==> ${(firstNum)} + ${(secondNum)} = ${(firstNum) + (secondNum)}`);
console.log(`==> ${(firstNum)} - ${(secondNum)} = ${(firstNum) - (secondNum)}`);
console.log(`==> ${(firstNum)} * ${(secondNum)} = ${(firstNum) * (secondNum)}`);
console.log(`==> ${(firstNum)} / ${(secondNum)} = ${Math.round(firstNum / secondNum)}`);
console.log(`==> ${(firstNum)} % ${(secondNum)} = ${(firstNum) % (secondNum)}`);
console.log(`==> ${(firstNum)} ** ${(secondNum)} = ${(firstNum) ** (secondNum)}`);

// q6 - the end is near but not here

function penultimate(str) {
  let strArr = str.split(' ');
  return strArr[strArr.length - 2];
}

console.log(penultimate("Launch School is great!") === "is");


// q7 - exclusive or

function xor(value1, value2) {
  if (value1 && value2) {
    return false
  } else if (value1 && !value2) {
    return true
  } else if (value2 && !value1) {
    return true
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

// or

function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

// odd lists

function oddities(arr) {
  let subArr = [];

  for (let count = 0; count < arr.length; count += 2) {
    subArr.push(arr[count]);
  }
  return subArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([]));

function oditties(arr) {
  return arr.filter((el, idx) => idx % 2 === 0);
}


// convert string to a number

// 4000 + 300 + 20 + 1

function strToInt(str) {
  let number = 0;
  let strArray = str.split('');
  let count = str.length 

  strArray.forEach(num => {
    number += (Math.pow(10, count - 1) * num)
    count -= 1;
  });
  return number;
};

console.log(strToInt("4321") === 4321);


// alternative solution

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

// q8 - str to signed number

function strToSignedInteger(str) {
  let numWithNoSign = str.slice(1);
  if (str.includes('-')) {
    return -strToInt(numWithNoSign);
  } else if (str.includes('+')) {
    return strToInt(numWithNoSign);
  } else {
    return strToInt(str);
  }
}  

// alternative

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

// convert number to string

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function intToStr(num) {
  let result = '';

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);

    result = DIGITS[remainder] + result;
  } while (num > 0);

  return result;
}


// convert to signed string

function signedIntToStr(num) {
  if (num === 0) return intToStr(num);
  return num > 0 ? `+${intToStr(num)}` : `-${intToStr(num)}`
}

// alternative

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}


// 
function repeater(string) {
  return string.split("").map(char => char.repeat(2)).join("");
}

//
function doubleConsonants(str) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  let stringArr = [];

  for (let idx = 0; idx < str.length; idx++) {
    strArr.push(str[idx]);
    if (CONSONANTS.indexOf(str[idx].toLowerCase()) >= 0) {
      strArr.push(str[idx])
    }
  }

  return strArr.join("")
}


//
function reverseNumber(number) {
  let numberStrArr = String(number).split('');
  let reversedStrNum = numberStrArr.reverse().join('');
  return parseInt(reversedStrNum, 10);
}

//
function centerOf(str) {
  if (str.length % 2 === 1) {
    let centerIdx = (str.length - 1) / 2;
    return str[centerIdx];
  } else {
    let leftIdx = str.length / 2 - 1;
    return str.substring(leftIdx, leftIdx + 2);
  }
}


//

let reverse = arr => {
  let spliced = arr.splice(0, arr.length);
  spliced.forEach(el => arr.unshift(el));

  return arr;
};



