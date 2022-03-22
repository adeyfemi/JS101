// Game play sequence

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
  [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

const WINNING_GAMES = 5;
const CHOOSE_FIRST_PLAYER = 'Choose';

let readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function firstToMove() {
  prompt('Choose P: Player or C: Computer');

  while (true) {
    let choice = readline.question().toLowerCase();
    if (choice === 'p') {
      return 'Player';
    } else if (choice === 'c') {
      return 'Computer';
    }

    if (choice === 'p' || choice === 'c') break;
    prompt('Please choose P or C');
  }
  return null;
}

function firstMover() {
  if (CHOOSE_FIRST_PLAYER === 'Choose') {
    return firstToMove();
  } else if (CHOOSE_FIRST_PLAYER === 'p') {
    return 'Player';
  } else if (CHOOSE_FIRST_PLAYER === 'c') {
    return 'Computer';
  }
  return null;
}

function alternatePlayer(currentPlayer) {
  return (currentPlayer === 'Player') ? 'Computer' : 'Player';
}

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
}

// Create a new board

function initalizeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

// bonus 1

/*
function joinOr(brd, delimeter = ', ', conj = 'or') {
  let firstNum = '';
  let lastNum = String(brd[brd.length - 1]);
  for (let count = 0; count < brd.length - 1; count++) {
  if (brd.length > 2) {
      firstNum += String(brd[count]).concat(delimeter)
    }
  }

  if (brd.length < 2) {
    return brd.join();
  } else if (brd.length === 2) {
    return String(brd[0]).concat(' ', conj) + ' ' + lastNum;
  } else {
    return firstNum + conj + ' ' + lastNum;
  }
};

*/

function joinOr(brd, delimiter = ', ', connect = 'or') {
  switch (brd.length) {
    case 0 : return '';
    case 1 : return brd.join();
    case 2 : return brd.join(` ${connect} `);
    default : brd[brd.length - 1] = `${connect} ${brd[brd.length - 1]}`;
      return brd.join(delimiter);
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

/*
function computerChoosesSquare(board) {

  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
};
*/

function placePiece(brd, currentPlayer) {
  if (currentPlayer === 'Player') {
    return playerChoosesSquare(brd);
  } else {
    return computerPlacesPiece(brd);
  }
}

function atRiskSquare(line, brd, mark) {
  let markersInLine = line.map(square => brd[square]);

  if (markersInLine.filter(val => val === mark).length === 2) {
    let unusedSquare = line.find(square => brd[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}


/*
function computerAi(brd, mark) {
  let square = '';

  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let line = WINNING_LINES[idx];
    square = atRiskSquare(line, brd, mark);
    if (square) break;
  }

  return square;
};
*/

function computerPlacesPiece(board) {
  let square;

  // defense first
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = atRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }

  // offense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = atRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }

  // just pick a random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

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
}

function displayCurrentWinner(brd) {
  if (someoneWon(brd)) {
    prompt(`${detectWinner(brd)} won!`);
  } else {
    prompt("It's a tie!");
  }
}

function reviseScore(winner, score) {
  if (winner === 'Player') {
    score['Player'] += 1;
  } else if (winner === 'Computer') {
    score['Computer'] += 1;
  }
}

function showScore(score) {
  prompt(`Current Score is --- Player: ${score['Player']}. CPU: ${score['Computer']}.`);
}

function currentGameDone(score) {
  return score['Player'] === WINNING_GAMES || score['Computer'] === WINNING_GAMES;
}

function overallWinner(score) {
  if (score['Player'] === WINNING_GAMES) {
    prompt('Player Wins!');
  } else if (score['Computer'] === WINNING_GAMES) {
    prompt('Computer Wins!');
  }
}

function playAgain() {
  let ans = '';

  while (true) {
    prompt("Do you want to play again?");
    ans = readline.question().toLowerCase();
    if (['y', 'yes', 'no', 'n'].includes(ans)) break;
    prompt("Please enter y or yes to play again.");
  }
  return ans === 'n' || ans === 'no';
}

while (true) {

  let score = {Player: 0, Computer: 0};

  while (true) {
    let board = initalizeBoard();
    let currentPlayer = firstMover();

    while (true) {
      displayBoard(board);
      placePiece(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);
    displayCurrentWinner(board);
    reviseScore(detectWinner(board), score);
    showScore(score);

    if (currentGameDone(score)) break;
  }

  overallWinner(score);
  if (playAgain()) break;
}

prompt('Thanks for playing Tic Tac Toe!');