// q1 - sort in descending numeric value order

let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => Number(b) - Number(a)); // to compare the strings as numbers

// or can simplify using this

arr.sort((a, b) => b - a); // substraction implicitly coerces both strings into a number and returns a number
// better to be explicit in the code 

// q2 - order the array objects based on the year of publication of each book from earliest to latest

// Ex. 2

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});

books.sort((a, b) => {
  let first = a.published;
  let second = b.published;
  return Number(first) - Number(second);
});


// Problem 3

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

arr1[2][1][3];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

arr2[1]['third'][0];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

arr3[2]['third'][0][0];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

obj1['b'][1];

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

Object.keys(obj2['third'])[0];


// Problem 4 - change value of 3 to 4

let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

let obj1 = { first: [1, 2, [3]] };
obj1['first'][2][0] = 4;

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2['a']['a'][2] = 4;


// q4 - compute and display the total age of the male members of the family

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let total = 0;

Object.values(munsters).forEach(subObj => {
  if (subObj['gender'] === 'male') {
    total += subObj['age']
  }
});


let totalAge = 0;
let objNames = Object.values(munsters);
let selectedMales = objNames.filter(obj => obj['gender'] === 'male');

for (count = 0; count < selectedMales.length; count++) {
  totalAge += selectedMales[count]['age'];
};


// other solutions

let totalAge = 0;

for (let member in munsters) {
  if (musters[member]['gender'] === 'male') {
    totalAge += munsters[member].age;
  }
};

console.log(totalAge);


let memberDetails = Object.values(munsters);
let totalAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalAge += member.age;
  }
});

// problem 6 

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (member in munsters) {
  console.log(`${member.toUpperCase()} is a ${munsters[member]['age']}-year-old ${munsters[member]['gender']}.`);
};


// alternative solution

Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});


// problem 7 - final values for a and b

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;


// a = 2;
// b = [3, 8]

// q8 - use forEach, write code to output all vowels from the strings in the arrays

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

Object.values(obj).forEach(arr => {
  let chosenVowels = arr.join().split('').filter(char => VOWELS.includes(char));
  chosenVowels.forEach(char => console.log(char));
});


// alternative solution

let vowels = 'aeiou';

Object.values(obj).forEach(arr => { // outer array
  arr.forEach(word => { // inner array to access the words
    word.split('').forEach(char => { // the word to access character
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});


// q9 - return a new array with same structure but values in each subarray ordered
// alphabetically or numericaaly in ascending order

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(array => {
  array.map(char => {
    if (typeof char === 'string') {
      return array.sort((a, b) => a.length - b.length);
    } else if (typeof char === 'number') {
      array.sort((a, b) => a - b);
    }
  });
});

newArr;
    

// solution 

arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort(); // use slice because sort is destructive operation 
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

// [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]


// q10 - sort in descending order

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

// q11 - use map method to return a new array identifcal in structure to the original but,
// with each number incremented by 1


let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let serializedArr = JSON.stringify(arr);
let newArr = JSON.parse(serializedArr);

newArr.map(obj => {
  Object.keys(obj).map(key => {
    obj[key] = obj[key] + 1;
    return obj[key];
  });
});


// alternative solution

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
  let incrementedObj = {};
  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }
  return incrementedObj;
}); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]
arr; // => [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]


// q12 - combine methods, including filter to return a new array identical in structure to original
// containing numbers that are multiples of 3

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.map(array => {
  let newArr = [];
  array.filter(el => {
    if (el % 3 === 0) {
      newArr.push(el);
    }
  });
  return newArr;
});

// more idiomatic solution 

arr.map(subArr => {
  return subArr.filter(num => num % 3 === 0);
}); // for each subarray, we return a subset of the subarray that contains only multiples of the number 3

// q13 - sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// LS solution

arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
  .reduce((sum, next) => sum += next);

  let oddSumB = b.filter(num => num % 2 === 1)
  .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});

// q14 - size uppercase and colors capitalized

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// solution

let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});

// q15 - return an array which contains only the objects where all the numbers are even

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter(subObj => {
  for (key in subObj) {
    let allEven = subObj[key].every(num => num % 2 === 0);

    if (allEven) {
      return subObj;
    }
  }
});


arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0)
  });
});


// q 16

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj = {};

arr.forEach(subArr => {
  obj[subArr[0]] = subArr[1];
});

// more idiomatic

Object.fromEntries(arr);


// q17 - UUID 

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

generateUUID(); // => '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
generateUUID(); // => '39038ab9-3b95-43d8-6959-5d785ccb9b69'
generateUUID(); // => 'f7d56480-c5b2-8d4d-465f-01a4ea605729'



// What is happening at each level of iteration?
// What does the method do with the return value of the callback?
// What does the method itself return?
// What is the ultimate return value of the initial method call?

