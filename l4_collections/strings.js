let str = 'abcdefghi';
str[2] // => 'c'

// Use slice method to reference multiple characters. Identify the starting index and where to end

str.slice(2,5) // => 'cde' // char at idx 5 is not included stops 1 short

let str = 'The grass is green';
str.slice(4,9)

// can also omit the second argument. all chars from start index to end are returned

let str = 'abcdefghi';
str.slice(2); // => 'cdefghi'

// calling slice without any arguments will return a copy of the original string

 

