// updating collection elements

let arr = [[1,3], [2]];
arr[1] = 'hi there';
arr;

let arr = [[1,3], [2]];
arr[0][1] = 5;

// inserting an additional element into an inner array

let arr = [[1], [2]];

arr[0].push(3); // two-part chain: first part arr[0] is element reference and returns [1] and
// second part can be thought of as [1].push(3), which destructively appends 3 into the inner array
arr;

// adding another array

let arr = [[1], [2]];

arr[0].push([3]);
arr; // => [ [ 1, [ 3 ] ], [ 2 ] ]

// nesting objects

let arr = [{ a: 'ant' }, { b: 'bear' }];

arr[0]['c'] = 'cat';
arr[0].d = 'dog';
arr; // => [{ a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' }]

// variable reference for nested collections

let a = [1, 3];
let b = [2];
let arr = [a, b]; // this has added references to the array
arr // => [ [ 1, 3 ], [ 2 ] ]


// Shallow copy

let arr = ['a', 'b', 'c'];
let copyOfArr = arr.slice();
copyOfArr; // => [ 'a', 'b', 'c' ];


let arr = ['a', 'b', 'c'];
let copyOfArr = [...arr];
copyOfArr; // => [ 'a', 'b', 'c' ];


// when array contains other objects, like a nested array, then those objects are shared not copied

let arr = [['a'], ['b'], ['c']];
let copyOfArr = arr.slice();

copyOfArr[1].push('d');

arr;       // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
copyOfArr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]


let arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
let copyOfArr = [...arr];

copyOfArr[1].d = 'qux';

arr;       // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]
copyOfArr; // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]


// always think about the level you are working at, the outer array or object or level of an object within that

// Shallow copy objects

let obj1 = { a: 'foo' };
let obj2 = { b: 'bar' };

Object.assign(obj1, obj2); // => { a: 'foo', b: 'bar' }
obj1;                      // => { a: 'foo', b: 'bar' }


let obj = { a: 'foo', b: 'bar' };
let copyOfObj = Object.assign({}, obj);

copyOfObj; // => { a: 'foo', b: 'bar' }


copyOfObj['c'] = 'baz';
copyOfObj; // => { a: 'foo', b: 'bar', c: 'baz' }
obj;       // => { a: 'foo', b: 'bar' }


// Object.assign creates a shallow copy but changes to nested objects will be reflected

let obj = { a: { b: 'foo' }, c: ['bar'] };
let copyOfObj = Object.assign({}, obj);

obj['a']['d'] = 'baz';
copyOfObj; // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
obj;       // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }


// Deep copy

let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr); // method performs the conversion from string back to object

// to show deep copy

deepCopiedArr[1].push('baz');
deepCopiedArr; // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
arr;           // => [ { b: 'foo' }, [ 'bar' ] ]


// Freezing objects

let obj = Object.freeze({ a: 'foo' });
let arr = Object.freeze(['a', 'b', 'c']);

obj['b'] = 'bar';
obj; // => { a: 'foo' }

obj.c = 'ccc';
obj; // => { a: 'foo' }

arr[3] = 'x';
arr; // => [ 'a', 'b', 'c' ]

arr.push('d'); // => TypeError: Cannot add property 3, object is not extensible

// only freezes object that is passed to it. If the object contains other objects, those will not freeze

let arr = Object.freeze([[1], [2], [3]]);
arr[2].push(4);
arr; // =>  [ [ 1 ], [ 2 ], [ 3, 4 ] ]





