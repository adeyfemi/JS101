// q1 - which one returns 'o'

let cat = 'Butterscotch';
cat[8]
cat[-4]
cat[cat.indexOf('o')]
cat.slice(-4, -3) // how does negative figures work?
cat[cat.length - 4]

// q2 - which will log Fido

let dog = 'fido';

dog = dog[0].toUpperCase() + dog.substring(1);
console.log(dog);

// q3 - which will throw an exception

let str = 'This is a string';
let arr = ['This', 'is', 'a', 'string'];
let obj = { 'This is': 'a string' };

// q4 - Check if a property exists

//q5 - which expresson returns an array of words froms string by given text

// q6 - str contains 10 char string, what is str.substring(2, 5)?

// q8 - function that takes one argument, positive integer and returns an array that contains
// all positive integers less than that number 

//q10

let arr = [1,2,3];
arr + [2];
arr.concat(2) 


//q15

let arr = [1,2,3,4];

arr.forEach(num => {
  if (num === 3) {
    return num;
  }
});
