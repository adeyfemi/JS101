// q1 - double char

function repeater(str) {
  return str.split('').map(char => char.repeat(2)).join('');
}

// alternative

function repeater(string) {
  let stringArray = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    stringArray.push(string[idx], string[idx]);
  }

  return stringArray.join('');
}


// q2
const VOWELS = 'aeiou';
const CONSONANTS = 'bcdfghjklmnpqrstvwxyz'


function doubleConsonants(str) {
  let stringArray = [];
  
  str.split('').map(char => {
    if (CONSONANTS.includes(char)) {
      stringArray.push(char.repeat(2));
    } else {
      stringArray.push(char);
    }
  });

  return stringArray.join('');
}

// q3

function reverseNumber(num) {
  let numString = String(num).split('');
  let reverseNum = ''

  for (let idx = numString.length - 1; idx > 0; idx -= 1) {
    reverseNum += numString[idx];
  }

  return parseInt(reverseNum.concat(numString[0]), 10);
}

// q4 (REVIEW AGAIN)

function centerOf(str) {
  let middle = Math.ceil(str.length / 2);
  if (str.length % 2 === 0) {
    return str[middle];
  } else {
    return str[middle-1].concat(str[middle])
  }
}

// solution

function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}

 // q5

function negative(num) {
  return num <= 0 ? -num : -1 * num
}

// alternative

function negative(num) {
  return Math.abs(number) * -1;
}


// q6 

function sequence(num) {
  let numArr = [];
  for(let count = 1; count <= num; count++) {
    numArr.push(count);
  }

  return numArr;
}


// q7 

function swapName(name) {
  let reverseName = name.split(' ')
  let [first, second] = reverseName;
  return [second, first].join(' ');
}

// q8

function sequence(count, start) {
  let numArr = [];

  for (let increment = 1; increment <= count; increment++) {
    numArr.push(start * increment)
  };

  return numArr;
}

// q9

function reverseSentence(str) {
  let strArr = str.split(' ');
  let strCollection = [];

  for (let count = strArr.length; count >= 0; count -=1) {
    strCollection.push(strArr[count]);
  }

  return strCollection.join(' ').trim();
}

// 

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ').trim();
}

// q10
function reverseWords(str) {
  let wordArr = str.split(' ');
  console.log(wordArr)
  let collection = [];

  wordArr.forEach(word => {
    if (word.length >= 5) {
      let reverseWord = word.split('').reverse().join('');
      collection.push(reverseWord);
    } else {
      collection.push(word);
    }
  });

  return collection.join(' ');
}

// alternative solution

function reverseWords(string) {
  let words = string.split(' ');
  let reversedWords = [];

  for (let idx = 0; idx < words.length; idx += 1) {
    let currentWord = words[idx];
    if (currentWord.length >= 5) {
      reversedWords.push(reverseWord(currentWord));
    } else {
      reversedWords.push(currentWord);
    }
  }

  return reversedWords.join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

// q11  - reverse the array in place, mutating original
function reverse(list) {
  let leftIndex = 0;
  let rightIndex = list.length - 1;

  while (leftIndex < list.length / 2) {
    [list[leftIndex], list[rightIndex]] =
      [list[rightIndex], list[leftIndex]];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return list;

}

// q12

function isBalanced(str) {
  let strArr = str.split('');
  let leftBracket = '(';
  let rightBracket = ')';
  let sum = 0;

  strArr.forEach(char => {
    if (char === leftBracket) {
      sum += 1;
    } else if (char === rightBracket) {
      sum -= 1;
    }
    if (sum < 0) return false;
  })
  return sum === 0;
}
