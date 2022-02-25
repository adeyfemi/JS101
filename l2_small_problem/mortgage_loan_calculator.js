// Morgage Loan Calculator

const NUM_MTHS_IN_YR = 12;
const HUNDRED_PCT = 100;

const readline = require("readline-sync");

const valueFormat = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 2 });

const MESSAGES = require('./mrt_loan_calc_messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getName() {
  let name = readline.question();
  while (name.trimStart() === '') {
    prompt(MESSAGES['validName']);
    name = readline.question();
  }
  return name;
}

function verifyAnswer(answer) {
  while (answer !== 'yes') {
    prompt(MESSAGES['verifyAnswer']);
    answer = readline.question();
  }
}

function invalidNumber(loanAmount) {
  return loanAmount.trimStart() === '' || Number.isNaN(Number(loanAmount));
}

function getValidNumber(loanAmount) {
  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES['validNumber']);
    loanAmount = readline.question();
  }
}

function invalidResponse(response) {
  return response === '1' || response === '2' || response === '3';
}

function verifyResponse(response) {
  while (!invalidResponse(response)) {
    prompt(MESSAGES['verifyResponse']);
    response = readline.question();
  }
}

while (true) {
  prompt(MESSAGES['welcome']);

  prompt(MESSAGES['enterName']);
  let yourName = getName();
  prompt(`Hi ${yourName}!, you are now ready to get started!`);

  prompt(MESSAGES['infoRequest']);
  let answer = readline.question();
  verifyAnswer(answer);

  prompt(MESSAGES['loanAmount']);
  let loanAmount = readline.question();
  getValidNumber(loanAmount);

  prompt(MESSAGES['interestRate']);
  let annualInterestRate = readline.question();
  getValidNumber(annualInterestRate);

  prompt(MESSAGES['loanDuration']);
  let loanDuration = readline.question();
  getValidNumber(loanDuration);

  prompt(MESSAGES['operation']);
  let response = readline.question();
  verifyResponse(response);

  let monthlyInt = Number(annualInterestRate) / HUNDRED_PCT / NUM_MTHS_IN_YR;
  let monthlyLoanDuration = Number(loanDuration) * NUM_MTHS_IN_YR;
  let monthlyPayment = Number(loanAmount) * (monthlyInt / (1 - Math.pow
    ((1 + monthlyInt), (-monthlyLoanDuration))));

  switch (response) {
    case '1': prompt(`The Monthly Payment is: ${valueFormat.format(monthlyPayment)}`);
      break;
    case '2': prompt(`The Loan Duration is: ${monthlyLoanDuration} months.`);
      break;
    case '3': prompt(`The Monthly Interest Rate is: ${monthlyInt}%`);
      break;
  }

  prompt(MESSAGES['tryAgain']);
  let tryAgain = readline.question();
  if (tryAgain !== 'yes') break;
}

prompt(MESSAGES['goodbye']);
