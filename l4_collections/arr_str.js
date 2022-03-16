// Array.Prototype.split and Array.Prototype.join

'this is a string'.split(); // => ['this is a string']
'abcdef'.split(''); // => ['a', 'b', 'c', 'd', 'e', 'f']
'abcdef'.split('')[0]; // 'a'

// split method returns an array so we can access elements from that array using the [] operator

'apple,orange,mango'.split(','); // => ['apple', 'orange', 'mango']

// join method
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.join(); // => 'a,b,c,d,e,f'

arr.join('')

// object to arrays ; can use values and keys methods or enteries

let obj = { sky: 'blue', grass: 'green' };
Object.entries(obj); // => [ [ 'sky', 'blue' ], [ 'grass', 'green' ] ]

// array element assignment

let numbers = [1, 2, 3, 4];
numbers[0] = numbers[0] + 1;  // => 2
numbers;                      // => [ 2, 2, 3, 4 ]

numbers[1] = numbers[1] + 1;
numbers[2] = numbers[2] + 1;
numbers[3] = numbers[3] + 1;
numbers[4] = numbers[4] + 1;
numbers;    // [ 2, 3, 4, 5, NaN ]

// object key assignment

let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
obj['apple'] = 'Fruit'
obj.carrot = 'Vegetable'
obj
{ apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Produce',
  broccoli: 'Produce' }

  // resetting the values

obj.pear = 'Fruit'
obj.broccoli = 'Vegetable'
obj
{ apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable' }

obj['pear'] = 'Fruit'
obj['broccoli'] = 'Vegetable'
obj
{ apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable' }

// str character assignment

let str = 'bob';
str[0] = 'B'; // => 'B'
str; // => 'bob'

// to change value of a string in an idx you have to concatenate and add elements

str = 'B' + str.slice(1);
str; // => 'Bob'



