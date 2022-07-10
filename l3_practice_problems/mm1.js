// write a program that outputs 'The Flintstones Rock!' 10 times, each line indented 1 space

function display(str) {
  for (let count = 0; count < 10; count++) {
    console.log(`${' '.repeat(count)}${str}`);
  }
}

// return new string that swaps cases

function swapCases(str) {
  strArr = str.split('').map(char => {
    if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  })

  return strArr.join('');
};


munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

// 3
while (divisor > 0) {
  if (number % divisor === 0) {
    factors.push(number / divisor);
  }
  divisor -= 1;
}

// concat 

function objectHasProperty(object, property) {
  if (object[property]) {
    return 1;
  } else if (object[property] === false) {
    return 1;
  } else {
    return 2;
  }
}

let obj = {}
obj['something'] = 3;
obj['enabled'] = false;

objectHasProperty(obj, 'something'); // returns 1
objectHasProperty(obj, 'active');    // returns 2