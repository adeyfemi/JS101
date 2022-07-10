// q1

function isUpperCase(str) {
  let testStr = str.replace(/[a-z]/g, '');
  return str.length === testStr.length;
}

function isUpperCase(str) {
  return str.toUpperCase === str;
}

// q2

function removeVowels(strArr) {
  let str = strArr.join(' ');
  let newWord = str.replace(/[aeiouAEIOU]/g, '');
  return newWord.split(' ');
}

// q2

function removeVowels(str) {
  str.map(word => word.replace(/[aeiou]/gi,''));
}

// q3

// transformation:
// convert string to array
// iterate through array
// for each word, capitalize first char of word
// convert back to a string and return words

function wordCap(words) {
  return strArr
  .split(' ')
  .map(char => char[0].toUpperCase() + char.slice(1).toLowerCase())
  .join(' ');
}

// q4

function swapCase(string) {
  return string
  .split("")
  .map(char => {
    if ((char >= 'a') && (char <= 'z')) {
      return char.toUpperCase();
    } else if ((char >= 'A') && (char <= 'Z')) {
      return char.toLowerCase();
    } else {
      return char;
    }
  })
}

// q5

function staggeredCase(word) {
  let wordArr = word.split('');
  return wordArr.map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else if (idx % 2 === 1) {
      return char.toLowerCase();
    }
  }).join('')
}


// q6

function staggeredCase(word) {
  let wordArr = word.split('');
  let alphabetWord = true;

  wordArr.map(char => {
    char = char.toLowerCase();
    if ((char >= 'a') && (char <= 'z')) {
      if (alphabetWord) {
        alphabetWord = false;
        return char.toUpperCase();
      } else {
        alphabetWord = true;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

// q7

function wordLengths(str = []) {
  if (str.length === 0) {
    return [];
  } else {
    let strArr = str.split(' ');
    return strArr.map(char => {
      return `${char} ${char.length}`
    });
  }
}

// question 8

function searchWord(word, text) {
  const regex = new RegExp(word, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}


// question 9

function searchWord(word, text) {
  let regex = new RegExp(`\\b${word}\\b`, 'gi');
  return text.replace(regex, `**${word.toUpperCase()}**`);
}


