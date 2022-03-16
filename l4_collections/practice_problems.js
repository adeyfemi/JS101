// q1 - what is the return value of the filter method

[1, 2, 3].filter(num => 'hi');

// callback function checks for truthiness, since 'hi' will be truthy all el in a new arr returned

// q2 - return value of map method

[1, 2, 3].map(num => {
  num * num;
});

// there's no explicit return inside of curly braces
// will place undefined in a new array

// q3 - return value of map 

[1, 2, 3].map(num => num * num); // [1,4,9]

// q4 - return value

['ant', 'bear', 'caterpillar'].pop().length; // length of caterpillar

//pop destructively removes the last element from the calling array and returns it

// q5 - callback return value and return value of every in code

[1, 2, 3].every(num => {
  return num = num * 2;
}); // return value of the call back woill be 2, 4, 6. since all nums are truthy, every returns true

// q6 - Array.prototype.fill - is it destructive and how to find out

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

// fill 1 from 1 through 5

// [1,1,1,1,1] and it is destructive

// q7 - return value of map

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// return the two elements in a new array [undefined, bear]
// return value of map is an array, when a function doesn't explicitly return something, 
// it implicitly returns undefined

//q8 - write a program to turn arr to hsh- where names are the keys and values are positions in arr

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let hshFlintstones = {};

for (counter = 0; counter < flintstones.length; counter++) {
  let currentName = flintstones[counter]
  hshFlintstones[currentName] = flintstones.indexOf(currentName);
};

// alternative

let hshFlintstones = {}
flintstones.forEach((name, idx) => {
  hshFlintstones[name] = idx;
});

hshFlintstones;

// q9 - add up all ages from the munster family

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let totalAges = Object.values(ages);

totalAges.reduce((sum, count) => sum + count, 0);


// alternative

let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
totalAges;


// q10 - pick out the minimum age from munster family

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let values = Object.values(ages);
let count = 0;
let lowestAge = values[count];

while (count < values.length) {
  if (values[count] < lowestAge) {
    lowestAge = values[count];
  }
  count += 1;
};

//alternative

for (let count = 0; count < values.length; count++) {
  if (values[count] < lowestAge) {
    lowestAge = values[count];
  }
}

// spread syntax

let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10

// q11 - create an object for frequency of ech letter occurence

const ALPHABET = ['A','B','C','D','E','F','G','H',
'I','J','K','L','M','N','O','P','Q','R','S',
'T','U','V','W','X','Y','Z'];

let statement = "The Flintstones Rock";
let letterArr = statement.split('');

let hshArr = {};

letterArr.forEach(letter => {
  if (ALPHABET.includes(letter.toUpperCase())) {
    hshArr[letter] = hshArr[letter] || 0;
    hshArr[letter] += 1;
  } 
});

// LS Solution

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);







