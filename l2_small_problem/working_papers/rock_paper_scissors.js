// Rock Paper Scissors

// Game Play
/*
1. User makes a choice
2. Comuter makes a choice
3. Winner is displayed
*/

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if ((choice === computerChoice)) {
    prompt("It's a tie");
  } else if ((choice === 'rock' && computerChoice !== 'paper') ||
      (choice === 'paper' && computerChoice !== 'scissors') ||
      (choice === 'scissors' && computerChoice !== 'rock')) {
    prompt("You win.");
  } else {
    prompt("Computer wins");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES}.join(', ')`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "no".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
