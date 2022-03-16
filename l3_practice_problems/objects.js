let obj = { fruit: 'apple', vegetable: 'carrot' };
obj.fruit; // => 'apple'
obj.fruit[3]; // => 'l'
obj['vegetable']; // => 'carrot'
obj['vegetable'][0]; // => 'c'

// reference using dot notation or bracket notation

// two keys the same - first one is overwritten by the third 

let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }

// values can have duplicates

// access just keys or the values

let capitals = { uk: 'London', france: 'Paris', germany: 'Berlin' };
Object.keys(capitals);      // => ['uk', 'france', 'germany']
Object.values(capitals);    // => ['London', 'Paris', 'Berlin']
Object.values(capitals)[0]; // => 'London'

// watch out for the following:

// out of bounds indices
string[5]; // => undefined
array[5];  // => undefined

// reference an index < 0
string[-1]; // => undefined
array[-1];  // => undefined

// invalid object keys
let obj = {a: 'foo', b: 'bar'};
obj['c']; // => undefined

// sometimes an object contains properties with undefined values on purpose
// use Object.prototype.hasOwnProperty method that returns a boolean indicating whether given a string
// exists as a property in the object.

let obj = { a: 'foo', b: 'bar', c: undefined};
obj.hasOwnProperty('c'); // => true
obj.hasOwnProperty('d'); // => false

Object.keys(obj).includes('c'); // => true
Object.keys(obj).includes('d'); // => false

// Arrays are objects

// it uses non negative integers as its primary keys and adding elements to the array increases
// the value of its length property, and changing the value of the length property causes the number
// of elements to change

let arr = ['foo', 'bar', 'qux'];
arr['boo'] = 'hoo';
arr[-1] = 374;
arr;               // => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
arr.length;        // => 3 (not 5!)
arr.forEach(element => console.log(element)); // prints: foo, bar, qux
Object.keys(arr);  // => [ '0', '1', '2', 'boo', '-1' ]


//checking if an array
let arr = ['foo', 'bar', 'qux'];
let obj = { a: 1, b: 2 };
typeof arr;            // => 'object'
typeof obj;            // => 'object'
Array.isArray(arr);    // => true
Array.isArray(obj);    // => false

