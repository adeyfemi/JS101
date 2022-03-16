let str1 = 'Hello';
let str2 = 'World';

str1.concat(' ', str2);

'abcdefg'.includes('b', 2) // => false

'   abcdef   '.trim()
'   abcdef   '.trimStart()
'   abcdef   '.trimEnd()

// converting first character to upper case and use slice for remaining characters

str.toLowerCase()
str.toUpperCase()

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

capitalize('pete'); // => 'Pete'

let sentence = "It's a walk in the park.";
sentence.charAt(5);

