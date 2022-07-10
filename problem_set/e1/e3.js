// q1 - daily double

function crunch(str) {
  let strArr = [];

  for (let count = 0; count < str.length; count++) {
    if (str[count] === (str[count -1])) continue;
    else {
      strArr.push(str[count]);
    }
  }

  return strArr.join('');
};

crunch('ddaaiillyy ddoouubbllee');
crunch('4444abcabccba');       
crunch('ggggggggggggggg');     
crunch('a');                     
crunch('');                        

// bannerizer

function logInBox(str) {
  let plus = '+';
  let dash = '|';

  console.log(plus + '-'.repeat(str.length+2) + plus);
  console.log(dash + ' '.repeat(str.length+2) + dash);
  console.log(dash + ' ' + `${str}` + ' ' + dash);
  console.log(dash + ' '.repeat(str.length+2) + dash);
  console.log(plus + '-'.repeat(str.length+2) + plus);
};

// more abstracted

function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
};

// q3 stringy strings

function stringy(num) {
  let count = 1;
  let str = '';

  while (count < num + 1) {
    count % 2 === 1 ? str += 1 : str += 0
    count += 1;
  }
  return str;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"


// Fibonacci Number Location by Length

function findFibonacciIndexByLength(num) {
  let fibonacci = 0n;
  let count = 2n;
  let firstNum = 1n;
  let secondNum = 1n;

  while (String(fibonacci).length < num) {
    fibonacci = firstNum + secondNum;
    firstNum = secondNum
    secondNum = fibonacci;
    count += 1n;
  }

  return count;
}

// q5 right triangles

function triangle(num) {
  let space = ' ';
  let star = '*'
  for (let count = 0; count < num+1; count++) {
    console.log(space.repeat(num-count) + star.repeat(count))
  }
}

// q6 - madlibs

let readlineSync = require("readline-sync");

console.log("Enter a noun:");
let noun = readlineSync.prompt();

console.log("Enter a verb:");
let verb = readlineSync.prompt();

console.log("Enter an adjective:");
let adjective = readlineSync.prompt();

console.log("Enter an adverb:");
let adverb = readlineSync.prompt();

let sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
let sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);


// q7 - double double

function twice(num) {
  let numStr = String(num);
  let middle = numStr.length / 2;

  if (numStr.slice(0, middle) === numStr.slice(middle)) {
    return num;
  } else {
    return num * 2;
  } 
}

// alternative solution

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

// q8 - grade book

function getGrade(score1, score2, score3) {
  let quantityOfScores = [score1, score2, score3]
  let average = (score1 + score2 + score3) / quantityOfScores.length;

  if (average >= 90 && average <= 100) return 'A';
  if (average < 90 && average >= 80) return 'B';
  if (average < 80 && average >= 70) return 'C';
  if (average < 70 && average >= 60) return 'D'
  if (average < 60 && average >= 0) return 'F';
};

// alternative

function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;

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


// q9 clean up the words

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function cleanUp(str) {
  return str.replace(/[^a-zA-Z]/g, ' ').replace(/\s+/gi, " ");; // the 'i' makes it case insensitive, 'g' makes it possible to replace all chars
}

// q10 - what century

function century(num) {
  let cent = Math.ceil(num / 100);
  let century = String(cent)

  if ([11, 12, 13].includes(cent % 100)) {
    return `${century}th`;
  } else {
    switch (century[century.length - 1]) {
      case '1' : return `${century}st`;
      case '2' : return `${century}nd`;
      case '3' : return `${century}rd`;
      default : 
        return `${century}th`;
    } 
  }
};

