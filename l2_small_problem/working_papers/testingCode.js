let a = 2;
let b = Math.floor(Math.random() * 2);
a *= b;

if (a = 2) {
  console.log('The value of `a` is two.');
} else {
  console.log('The value of `a` is NOT two.');
}


function longestWord4(sentence) {
  let words = sentence.split(' ');
  let savedWord = words[0];

  words.forEach(word => {
    if (savedWord.length <= word.length) {
      savedWord = word;
    }
  });

  return savedWord;
}


//2

function longestWord1(sentence) {
  let words = sentence.split(' ');
  let savedWord = words[0];

  words.forEach(word => {
    if (word.length >= savedWord.length) {
      savedWord = word;
    }
  });

  return savedWord;
}

let words = 'This is a coool world'



let arr = [1,2,3,4];

function checkArr(array) {
  array = arr.push(5);
  return array;
}

checkArr(arr);