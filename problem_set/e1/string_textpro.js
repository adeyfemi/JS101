// q1 

function isUppercase(str) {
  return str === str.toUpperCase();
}

// q2

function removeVowels(strArr) {
  return strArr.map((char, idx) => char.replace(/[aeiou]/gi, ''));
}

// q3

let ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
'u', 'v', 'w', 'x', 'y', 'z'
]

function letterCaseCount(string) {
  let hsh = {'lowercase': 0, 'uppercase': 0, 'neither': 0};

  string.split('').forEach(char => {
    if (char.toLowerCase() === char && ALPHABET.includes(char.toLowerCase())) {
      hsh['lowercase'] += 1;
    } else if (char.toUpperCase() === char && ALPHABET.includes(char.toLowerCase())) {
      hsh['uppercase'] += 1;
    } else if (!ALPHABET.includes(char)) {
      hsh['neither'] += 1
    }
  })
  return hsh;
}

// alternative solutions

function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

// q4

function wordCap(string) {
  return string.split(' ').
  map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).
  join(' ');
}

// q5 

function swapCase(string) {
  let arr = [];

  string.split('').map(char => {
    if (char === char.toUpperCase()) {
      arr.push(char.toLowerCase());
    } else if (char === char.toLowerCase()) {
      arr.push(char.toUpperCase());
    }
  })
  return arr.join('')
}

// alternative

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
    .join("");
}

// q6

function staggeredCase(string) {
  return string.split('').map((char,idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  })
  .join('');
}

// q7

let ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
'u', 'v', 'w', 'x', 'y', 'z'
]

function staggeredCase(string) {
  return string.split('').map((char,idx) => {
    if (ALPHABET.includes(char)) {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    }
  })
  .join('');
}

// REVIEW AGAIN
function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map(char => {
      char = char.toLowerCase();
      if (char >= 'a' && char <= 'z') {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join("");
}


// q9 // REVIEW AGAIN
function wordLengths(str) {
  if (arguments.length === 0 || str.length === 0) {
    return [];
  }

  return str.split(' ').map(function(char) {
    return char + ' ' + String(char.length);
  });
}

// q10
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);     

function searchWord(word, text) {
  let arr = [];

  text.split(' ').forEach(char => {
    if (char.toLowerCase() === word) {
      arr.push(word);
    }
  });

  return arr.length;
}


// REVIEW AGAIN

function searchWord(word, text) {
  const regex = new RegExp(word, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}


// q10

function searchWord(word, text) {
  let arr = [];

  text.split(' ').forEach(char => {
    if (char.toLowerCase() === word) {
      arr.push(`**${char.toUpperCase()}**`);
    } else {
      arr.push(char);
    }
  });

  return arr.join(' ');
}

// alternative

function searchWord(word, text) {
  let regex = new RegExp(`\\b${word}\\b`, "gi");
  return text.replace(regex, `**${word.toUpperCase()}**`);
}
