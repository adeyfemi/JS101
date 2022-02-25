// Calculator Requirements

/*
1) ask user for two numbers
2) ask user for the type of operation to perform, add, subtract, multiply or divide
3) perform the calculation and display the result
*/

/* steps to build calculator
a) ask user for the first number
b) ask user for the second number
c) ask user for an operation to perform
d) perform the operation on the two numbers
e) print the result to the terminal
*/

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log(number1);

console.log("What's the second number?");
let number2 = readline.question();

console.log(`${number1} ${number2}`);

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation ==== '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);

