[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}); // => [ 1, 2, 4, 9, 11, 21, 107 ]

// sort method iterates over the array and supplies the callback function with two elements each time
// It arranges the relative positions of the two elements using the following rules:

// if callback returns a number less than 0, place a before b
// if callback returns a number greater than 0, place b before a
// if callback returns 0, leave the relative positions of a and b unchanged

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b);

// sorting an array in descending order

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}); // => [ 107, 21, 11, 9, 4, 2, 1 ]

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => b - a);

// can write additional code in the block, as long as the block returns a number

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  console.log(`a is ${a} and b is ${b}`);
  return a - b;
});

// a is 11 and b is 9
// a is 2 and b is 9
// a is 11 and b is 4

// => [ 1, 2, 4, 9, 11, 21, 107 ]


// sort by length

let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a, b) => a.length - b.length);

// looping method

words.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    return 0;
  }
}); // => [ 'go', 'and', 'jump', 'ahead' ]

// sort the arrays in descending orders

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);

  return totalAScore - totalBScore;
});


// use only a and b for comparison callbacks //






