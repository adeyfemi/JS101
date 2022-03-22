// Game play sequence

// display the initial empty 3x3 board
// ask the user to mark a square
// computer marks a square
// display the updated board state
// if it's a winning board, display the winner
// if the board is full, display tie
// if neither player won and board is not full, go to # 2
// play again?
// if yes, go to # 1
// goodbye

// two main loops
// inner loop between steps #2 to #7 that repeats as long as there is no winner and the board isn't full
// an outer loop between steps #1 and #9 that repeats as long as the player wants to keep playing


// Step 1 - Display an empty board

// => abstracting the board into a function

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(msg);
};

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(` ${board['1']}   |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(` ${board['4']}   |   ${board['5']} |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(` ${board['7']}   |   ${board['8']} |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
};

// Create a new board

function initalizeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
};



/*
let board = {
  1: 'X',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: 'O',
  8: ' ',
  9: ' ',
};

displayBoard(board);
*/

// Display board for an in progress game
// => we'd like to replace the center space in the chosen by one of the players
// => `displayBoard` function needs an argument and should display current grid based on argument

// => key question, how do we represent a board with a JS data structure?

// step 2 - player chooses square

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
};

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
};

function computerChoosesSquare(board) {

  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
};

function boardFull(board) {
  return emptySquares(board).length === 0;
};

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];;

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
      ) {
        return 'Computer';
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
};

let readline = require('readline-sync')

// Refactoring emptySquares because it is being used inside two separate functions

while (true) {
  let board = initalizeBoard();
  displayBoard(board);

  while (true) {
    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    displayBoard(board);
  }

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
};

prompt('Thanks for playing Tic Tac Toe!');



