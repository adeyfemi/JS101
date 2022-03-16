// Functions as First-Class Objects and Higher Order Functions

// first-class value or first-class object is used to describe values that meet the following conditions

// They can be assigned to a variable or an element of a data structure (such as an array or object)
// They can be passed as an argument to a function
// They can be returned as the return value of a function

// imperative approach - telling interpreter what to do each step of the day

// for loop transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}


transformedNumbers; // => [ 1, 4, 9, 16, 25 ]

// Declare and initialize an empty `transformedNumbers` array
// Declare a counter
// Increment a counter
// Assignt he element at the `index`th index to currentNum
// Compute the square of currentNum and assign it to squaredNum
// Append the squared number to the end of the `transformedNumbers` array


// declarative approach - declaring what we need to do with the `numbers` array by saying
// `we want to map each element of the array to the return value of passing that element to the given callback function`

// Functions that take other functions as arguments are called Higher Order Functions
// => as are other functions that return other functions

// In JS, functions that we pass to other functions are often called callback functions or callbacks

// Ex. 1

[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined, this is the callback's return valkue 

// Specific information to track

// what type of action is being performed? Method call? Callback? Conditional? Something else
// On what value is that action performed?
// what is the side-effect of that action (e.g. output or destructive action?)
// what is the return value of that action
// is the return value used by whatever instigated the action?

// Ex. 2

[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]


// Ex. 3

[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});


// focus on the following to breakdown the code:

// the return value of the callback
// the return value of the method
// any side-effects

// explicitly returning the first element of each subarray with return. The callback's return is
// then used by `map` to perform the transformation, replacing the inner array with a number. 
// Finally, map return a new array with two numbers in it

// without the explicit return value

[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  arr[0];
});

// 1
// 3
// => [undefined, undefined]


// Ex. 4

let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});


// result

//18
//7
//12
// => undefined



// notes on example 4:

// variable declration always evaluates to undefined
// pay attention to 4 return values: forEach, map, return value of both callbacks

// forEach ignores callback's return value, and will be undefined

// Ex. 5

[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

// return 

[ [ 2, 4 ], [ 6, 8 ] ]

// Ex. 6

[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]


// Ex. 7


[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]


// Ex. 8

[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]


// Ex. 9

[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

// => [ [ [ 2, 3 ], [ 4, 5 ] ], [ 6, 7 ] ]


// DONT MUTATE THE COLLECTION THAT YOU ARE ITERATING THROUGH

let arr = [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]];

arr.map(subArr => subArr.pop()); // [ [ 4 ], [ 'c' ] ]

arr; // [ [ [ 1 ], [ 2 ], [ 3 ] ], [ [ 'a' ], [ 'b' ] ] ]





