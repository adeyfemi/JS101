// Rock Paper Scissors Spock Lizard

/* Game Rules

1) rock: lizard / scissors
2) paper: rock / spock
3) scissors: lizard / paper
4) spock: rock / scissors
5) lizard: spock / paper
*/

/* Game Play

a) get user choice
b) validate user choice
c) get computer choice
d) validate computer choice
e) compare user choice to computer choice
f) display winner
g) increment winner score by 1
h) check number of games played; if < 5 continue playing
i) reset winner games won and games played to 0
h) ask if to play again
*/

const readline = require('readline-sync');

const WINNER_GAMES = 5;

let TOTAL_GAMES_PLAYED = 0;

const CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard',
  'r', 'p', 's', 'x', 'l'];

const WINNING_MOVES = {rock: ['lizard', 'scissors'], paper: ['rock', 'spock'],
  scissors: ['lizard', 'paper'], spock: ['rock', 'scissors'], lizard: ['spock', 'paper']};

let playerWinTotal = 0;
let computerWinTotal = 0;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getName() {
  prompt('Please enter your name.');
  let name = readline.question();

  while (name.trimStart() === '') {
    prompt('Please enter a valid name.');
    name = readline.question();
  }
  return name;
}

function playerChoice() {
  prompt(`Choose a move: ${CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!CHOICES.includes(choice.toLowerCase())) {
    prompt(`Please choose one: ${CHOICES.join(', ')}`);
    choice = readline.question();
  }

  return choice;
}

function randomChoice() {
  let randomIndex = Math.floor(Math.random() * CHOICES.length);
  return randomIndex;
}

function computerChoice() {
  return CHOICES[randomChoice()];
}

function convertChoice(move) {
  switch (move) {
    case 'r': return 'rock';
    case 'p': return 'paper';
    case 's': return 'scissors';
    case 'x': return 'spock';
    case 'l': return 'lizard';
  }
  return move;
}

function findWinner(playerMove, computerMove) {
  playerMove = convertChoice(playerMove[0]);
  computerMove = convertChoice(computerMove[0]);

  if (WINNING_MOVES[playerMove].includes(computerMove)) {
    return 'player wins';
  } else if (WINNING_MOVES[computerMove].includes(playerMove)) {
    return 'computer wins';
  } else {
    return "It's a tie";
  }
}

function CurrentScore(playerMove, computerMove) {
  if (findWinner(playerMove, computerMove) === 'player wins') {
    playerWinTotal += 1;
    return playerWinTotal;
  } else if (findWinner(playerMove, computerMove) === 'computer wins') {
    computerWinTotal += 1;
    return computerWinTotal;
  }
}

function incrementGamesPlayed() {
  TOTAL_GAMES_PLAYED += 1;
  return TOTAL_GAMES_PLAYED;
}

function tryAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "no".');
    answer = readline.question().toLowerCase();
  }

  return answer;
}


prompt('Welcome to Rock, Paper, Scissors, Spock, Lizard ');
prompt(`Hi ${getName()}!`);

while (true) {

  while (true) {

    let playerMove = playerChoice();
    let computerMove = computerChoice();

    prompt(`Player chose ${playerMove} and Computer chose ${computerMove}`);

    let winningPlayer = findWinner(playerMove, computerMove);
    prompt(winningPlayer);

    CurrentScore(playerMove, computerMove);

    prompt(`The current score is - 
      Player: ${playerWinTotal} Computer: ${computerWinTotal}`);

    let gamesPlayed = incrementGamesPlayed();
    prompt(`The total number of games played is ${gamesPlayed}`);

    if (playerWinTotal === WINNER_GAMES ||
      computerWinTotal === WINNER_GAMES) break;
  }

  if (tryAgain()[0] !== 'y') break;
}