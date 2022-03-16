let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arr[2]; // => 'c'

// what will be returned

> let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
> arr.slice(2, 5)[0] // 'c'

// Not the same as String.slice(). Array.slice() returns a new array and String.slice() returns a new string

// can omit the second idx and will output the remainder from starting index of array called

arr.slice(2); // => [ 'c', 'd', 'e', 'f', 'g' ]

arr.slice(); // => [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

// use eqality to check if same array as original.

let arr = ['a', 'b', 'c', 'd']
let arrCopy = arr.slice()
arrCopy.push('e')

//arr
[ 'a', 'b', 'c', 'd' ]

// arrCopy
[ 'a', 'b', 'c', 'd', 'e' ]

// this is a shallow copy instead of a deep copy. how to verify? 

// if you mutate objects in a shallow copy, the objects can be mutated 

> let nestedArr = [1, [2, 3], { foo: 4 } ]
> let nestedCopy = nestedArr.slice()

> nestedCopy.push(5)
4
> nestedCopy[1].push(6)
3
> nestedCopy[2].bar = 7;
7

> nestedArr
[ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 } ]
> nestedCopy
[ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 }, 5 ]

// object element reference

