// Morgage Loan Calculator

const NUM_MTHS_IN_YR = 12;
const PCT = 100;

const readline = require("readline-sync");

const MESSAGES = require('./mrt_loan_calc_messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getName() {
  prompt(MESSAGES['enterName']);
  let name = readline.question();

  while (name.trimStart() === '') {
    prompt(MESSAGES['validName']);
    name = readline.question();
  }
  return name;
}

function invalidLoanAmount(loanAmt) {
  return loanAmt.trimStart() === '' ||
  Number(loanAmt) <= 0 || 
  Number.isNaN(Number(loanAmt));
}

function getValidLoanAmount() {
  prompt(MESSAGES['loanAmount']);
  let loanAmt = readline.question();

  while (invalidLoanAmount(loanAmt)) {
    prompt(MESSAGES['validNumber']);
    loanAmt = readline.question();
  }
  return loanAmt;
}

function invalidDuration(loanDur) {
  return loanDur.trimStart() === '' || 
  Number(loanDur) <= 0 ||
  Number.isNaN(Number(loanDur));
}

function getValidDuration() {
  prompt(MESSAGES['loanDuration']);
  let loanDur = readline.question();

  while (invalidDuration(loanDur)) {
    prompt(MESSAGES['validNumber']);
    loanDur = readline.question();
  }
  return loanDur;
}

function invalidRate(intRate) {
  return intRate.trimStart() === '' || 
  Number(intRate) <= 0 ||
  Number.isNaN(Number(intRate));
}

function getValidRate() {
  prompt(MESSAGES['interestRate']);
  let intRate = readline.question();

  while (invalidRate(intRate)) {
    prompt(MESSAGES['validRate']);
    intRate = readline.question();
  }
  return intRate;
}

function calcMonthlyPmt(loanAmount, loanDuration, annualInterestRate) {
  let monthlyIntRate = Number(annualInterestRate) / NUM_MTHS_IN_YR / PCT;
  let loanTenor = Number(loanDuration) * NUM_MTHS_IN_YR;

  if (monthlyIntRate === 0) {
    return Number(loanAmount) / loanTenor;
  } else {
    return Number(loanAmount) *
    (monthlyIntRate /
    (1 - Math.pow((1 + monthlyIntRate), (-loanTenor))));
  }
}

function tryAgain() {
  prompt(MESSAGES['tryAgain']);
  let ans = readline.question();

  while (!['y',"yes","no","n"].includes(ans.toLoweerCase())) {
    prompt("Please enter yes or no");
    ans = readline.question();
  }

  return ans;
}

prompt(MESSAGES['welcome']);

let yourName = getName();
prompt(`Hi ${yourName}!, you are now ready to get started!`);

while (true) {
  let loanAmount = getValidLoanAmount();
  let annualInterestRate = getValidRate();
  let loanDuration = getValidDuration();

  prompt("Calculating Monthly Payment...");

  let monthlyPmt = calcMonthlyPmt(loanAmount, loanDuration, annualInterestRate);
  prompt(`The Monthly Payment is: $${monthlyPmt.toFixed(2)}`);

  let restart = tryAgain();
  if (restart.toLowerCase() === 'no' || restart.toLowerCase() === 'n') break;
}

prompt(MESSAGES['goodbye']);
