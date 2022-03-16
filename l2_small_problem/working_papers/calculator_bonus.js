// Calculator Requirements

/*
1) ask user for two numbers
2) ask user for the type of operation to perform, add,
subtract, multiply or divide
3) perform the calculation and display the result
*/


/* steps to build calculator
a) ask user for the first number
b) ask user for the second number
c) ask user for an operation to perform
d) perform the operation on the two numbers
e) print the result to the terminal
*/

const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

while (true) {

  prompt('firstNumber');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  console.log(number1);

  prompt('secondNumber');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  console.log(`${number1} ${number2}`);

  console.log('operation');
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt('terminateCalculator');
  calculateAgain = readline.question();
  if (calculateAgain[0].toLowerCase() !== 'y') break;
}



/*

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

*/


// top of calculator.js

const LANGUAGE = 'en';

prompt(messages('welcome', LANGUAGE));

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

// now you can just do:
prompt('welcome')

