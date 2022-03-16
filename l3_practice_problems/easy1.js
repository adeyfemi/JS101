// Methods 
// endsWith()
// charAt()
// toLowerCase() / toUpperCase()
// substring()

// different ways to add to an array.


// question 1 - will code below raise an error

let numbers = [1, 2, 3];
numbers[6] = 5; // no error, JS treats array slot 3 through 5 as empty slots

// bonus
numbers[4]; // output undefined, but the slot is empty -- no value, not even undefined
// This distinction is important: if you use map(), the new array will have empty slots
// in the corresponding positions. But, slots with a value of undefined will be remapped based
// on the return value of the callback;

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]

// question 2 - how can you determine whether a given string ends with ('!')

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith('!');
str2.endsWith('!');

// question 3 - determine if object has entry for 'Spot'

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

ages.hasOwnProperty('Spot');
Object.hasOwn(ages, 'Spot');

// question 4 - a) create a new string b) that contains all lowercase letters except first
// character, should be capitalized

let munstersDescription = "the Munsters are CREEPY and Spooky.";
let newWord = munstersDescription.toLowerCase();
newWord.charAt(0).toUpperCase() + newWord.slice(1);

// alternative solution

munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase()

// 5 - what will the following code output?

console.log(false == '0'); // true: coerces the values to the same type before comparing them
console.log(false === '0'); // false


// 6 - add new entries to Munster family

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges); // better approach if object has many enteries

ages.Marilyn = additionalAges['Marilyn'];
ages.Spot = additionalAges['Spot'];

ages.Marilyn = additionalAges.Marilyn;
ages.Spot = additionalAges.Spot;

// question 7 - determine whether Dino appears in the strings, check each separately

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.slice(0,-1).split(' ').includes('Dino');
str2.slice(0,-1).split(' ').includes('Dino');

str1.includes('Dino'); // false
str2.includes('Dino'); // true

str1.match('Dino') !== null;
str2.match('Dino') !== null; 

str1.indexOf('Dino') > -1;
str2.indexOf('Dino') > -1;

// question 8 - add family pet to array 'Dino'

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino'); // returns index number not the new array or old array mutated

flintstones = flintstones.concat('Dino');
flintstones;

flintstones[flintstones.length] = 'Dino';
flintstones;


// 9 add multiple items to an array

flintstones.push('Dino', 'Dog', 'Lizard');

// 10 - return a new version of this sentence that ends before the word house

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

advice.replace("house training your pet dinosaur.", "")
advice.slice(0, advice.indexOf('house'))
