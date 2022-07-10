// complete the solution so that the function will break up camel casing, using a space 

function spaceCamelCase(str) {
  let smallCase = '';
  let bigCase = '';
  let strArray = str.split('');
  let count = 0;


  while (count < strArray.length) {
    if (strArray[count] === strArray[count].toLowerCase()) {
      smallCase += strArray[count];
    } else if (strArray[count] === strArray[count].toUpperCase()) {
      break;
    }
    count += 1;
  }

  return (`${smallCase} ${strArray.slice(smallCase.length).join('')}`);

}

function removeVowels(arr) {
  return arr.map(word => { 
    return word.replace(/[aeiouAEIOU]/g, '');
  });
};

function letterCaseCount(str) {
  let hsh = {'lowercase': 0, 'uppercase': 0, 'neither': 0};
  let strArray = str.split('');

  strArray.forEach(char => {
    if (char === char.toLowerCase()) {
      hsh['lowercase'] += 1
    }
  })

  return hsh;
}

let name = 'Femi'

let lowercaseChars = name.match(/[^F]/g) // returns
console.log(lowercaseChars)


for (let i = 0; i < 10; i += 2) { // first loop
  for (let j = 0; j < 10; j += 1) { // second loop, runs 10 times
    console.log('femi') // logs this on each run
  }
}

for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
  if (i === 1) {
    console.log('Launch!')
  }
}

console.log('Launch!')


let greeting = 'aloha!';

for (let count = 0; count < 3; count ++) {
  console.log(greeting);
}


function sum(number) {
  let numArr = String(number).split('');
  let result = 0;

  numArr.forEach(num => {
    result += Number(num);
  })

  return result;
}


const ALPHABETS = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six',
  7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
  13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
  18: 'eighteen', 19: 'nineteen' 
}

function alphabeticNumbers(arr) {
  let newArr = [];

  arr.forEach(num => {
    newArr.push(ALPHABETS[num]);
  })

  let sortedArr = newArr.sort();
  return sortedArr.map((char, idx) => char = Object.values(ALPHABETS).indexOf(char))
}



function multiplyAllPairs(arr1, arr2) {
  let resultArr = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      resultArr.push(num1 * num2);
    })
  })
  return resultArr.sort((a, b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    }
  });
}


function sumOfSums(arr) {
  let newNumber = 0;
  let runningTotal = 0;

  arr.forEach(num => {
    newNumber += num;
    runningTotal += newNumber;
  })

  return runningTotal;
}


function buyFruit(arr) {
  let result = [];

  arr.forEach(subArr => {
    if (subArr[1] > 0) {
      console.log(subArr[1])
      let count = subArr[1];
      while (count > 0) {
        result.push(subArr[0]);
        count -= 1;
      }
    }
  })

  return result;
}



function threeNumbers(str) {
  let numbers = {'1': 0};

  str.forEach(char => {
    numbers[char] +=  1;
  })
  return numbers;
}