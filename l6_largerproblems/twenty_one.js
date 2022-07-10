// Game Steps

// initialize deck
// deal cards to player and dealer
// player turn: hit or stay - repeat until bust or stay
// if player bust, dealer wins
// dealer turn: hit or stay - repeat until total >= 17
// if dealer busts, player wins
// compare cards and declare winner

const readline = require('readline-sync');

const SUITS = ['H', 'D', 'C', 'S'];
const VALUES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const MAX_POINTS = 21;
const MIN_DEALER_POINTS = 17;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

// Initialize Deck - Nested Array Card Deck

function initializeDeck() {
  let cardDeck = [];

  for (let idx = 0; idx < SUITS.length; idx++) {
    let currentSuit = SUITS[idx];
    for (let count = 0; count < VALUES.length; count++) {
      let value = VALUES[count];
      cardDeck.push([currentSuit, value]);
    }
  }

  return shuffle(cardDeck);
}

// Shuffle cards
function shuffle(cardDeck) {
  for (let index = cardDeck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [cardDeck[index], cardDeck[otherIndex]] = [cardDeck[otherIndex], cardDeck[index]]; // swap elements
  }
  return cardDeck;
}

// calculating player points

function playerTotal(playerHands) {
  let totalPlayerPoints = 0;

  playerHands.forEach(subArr => {
    if (subArr[1] === 'A') {
      totalPlayerPoints += 11;
    } else if (['J', 'Q', 'K'].includes(subArr[1])) {
      totalPlayerPoints += 10;
    } else {
      totalPlayerPoints += Number(subArr[1]);
    }
  });

  for (let count = 0; count < findAce(playerHands).length; count++) {
    if ((totalPlayerPoints) > MAX_POINTS) {
      totalPlayerPoints -= 10;
    }
  }

  return totalPlayerPoints;
}

function dealerTotal(dealerHands) {
  let totalDealerPoints = 0;

  dealerHands.forEach(subArr => {
    if (subArr[1] === 'A') {
      totalDealerPoints += 11;
    } else if (['J', 'Q', 'K'].includes(subArr[1])) {
      totalDealerPoints += 10;
    } else {
      totalDealerPoints += Number(subArr[1]);
    }
  });

  for (let count = 0; count < findAce(dealerHands).length; count++) {
    if ((totalDealerPoints) > MAX_POINTS) {
      totalDealerPoints -= 10;
    }
  }

  return totalDealerPoints;
}


// Initial deal

function firstTwoCards(dealHand, card) {
  let twoCards = dealHand;
  for (let count = 0; count < 2; count++) {
    twoCards.push(card.pop());
  }
  return twoCards;
}

/*
// Object Card Deck

let cardDeck = {};

for (let idx = 0; idx < SUITS.length; idx++) {
  let currentSuit = SUITS[idx];
  cardDeck[currentSuit] = [];
  for (let counter = 0; counter < VALUES.length; counter++) {
    cardDeck[currentSuit].push(VALUES[counter]);
  }
}

*/

/* converting Letters

function convertLetter(num) {
  switch (num) {
    case 'J' : return 10;
    case 'Q' : return 10;
    case 'K' : return 10;
    case 'A' : return 11;
  }
}
*/

/*
function verifyNumber(num) {
  if (Number(num)) {
    return Number(num);
  } else {
    return convertLetter(num);
  }
}
*/

// Calculating Aces

// determine which suits of cards have been dealt
// if selected cards includes 1 ace - then make it 11
// if ace + other cards > 21, change ace to 1
// if there are multiple aces. the first is 11 and all others are 1
// if ace = 11 results in > 21, change all aces to 1

// player turn

function busted(points) {
  return points > MAX_POINTS;
}

function hitOrStay() {
  let ans;

  while (true) {
    prompt("Would you like to hit or stay? (h/s)");
    ans = readline.question().toLowerCase();
    if (['h', 's'].includes(ans)) break;
    prompt("Sorry, must enter 'h' or 's'");
  }
  return ans;
};

function dealPlayer(playerHands, card, points) {
  let currentHand = Array.from(playerHands);
  let ans;
  
  while (true) {
    ans = hitOrStay();

    if (ans === 'h') {
      currentHand.push(card.pop());
      prompt('You chose to hit!')
      prompt(`You have: ${showPlayerHand(currentHand)}`)
      let total = playerTotal(currentHand, points)
      prompt(`Your total is now: ${total}`);
    } else if (ans === 's') {
      prompt('You chose to stay.')
      break;
    }
  }

  return currentHand;
}

function findAce(playerHands) {
 let allAces = playerHands.filter(subArr => subArr[0] === 'A');
 return allAces;
}

function dealerTwoCards(dealHands, card) {
  let twoCards = firstTwoCards(dealHands, card);
  return twoCards;
}

function dealerTurn(dealerHands, card, points) {
  let currentTotal = dealerTotal(dealerHands);
  while (currentTotal < MIN_DEALER_POINTS) {
    currentDealerCards = dealPlayer(dealerHands, card, points);
    currentTotal = dealerTotal(currentDealerCards);
    if (currentTotal >= MIN_DEALER_POINTS) {
      break;
    } else {
      currentDealerCards = dealPlayer(dealerHands, card, points);
      currentTotal = dealerTotal(currentDealerCards);
    }
  }

  return currentTotal;
}

function findSuits(hand) {
  switch(hand) {
    case 'H' : return 'Hearts';
    case 'D' : return 'Diamonds';
    case 'C' : return 'Clubs';
    case 'S' : return 'Spades';
  }
}

function showPlayerHand(hand) {
  return hand.map(subArr => `${subArr[1]} of ${findSuits(subArr[0])}`).join(' and ');
};

function showDealerHand(hand) {
  prompt("Dealer has the following card on hand:");
  prompt(`${hand[0][1]} of ${findSuits(hand[0][0])}`);
}

function displayResult(playerScore, dealerScore) {
  prompt(`Player: ${playerScore}. Dealer: ${dealerScore}`);
  let winner = winnerGame(playerScore, dealerScore);

  switch (winner) {
    case 'PLAYER_BUSTED':
    prompt('YOU BUSTED! DEALER WINS!')
    break;
    case 'DEALER BUSTED':
    prompt('DEALER BUSTED, YOU WIN!')
    break;
    case 'PLAYER':
    prompt('PLAYER WINS!')
    break;
    case 'DEALER':
    prompt('DEALER WINS!')
    break;
  }
}

function winnerGame(playerScore, dealerScore) {
  if (playerScore > MAX_POINTS) {
    return 'PLAYER BUSTED';
  } else if (dealerScore > MAX_POINTS) {
    return 'DEALER BUSTED';
  } else if (playerScore > dealerScore) {
    return 'PLAYER';
  } else if (playerScore < dealerScore) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function playAgain() {
  console.log('----------');
  prompt('Do you want to play again? (y or n)');
  let answer = readline.question();
  return answer.toLowerCase()[0] === 'y';
};

// initialize total player and dealer points
let totalPlayerPoints = 0;
let totalDealerPoints = 0;

//while (true) {
prompt('Welcome to Twenty-One!');

// initalize deck
let cardDeck = initializeDeck();
let playerHands = [];
let dealerHands = [];

// first two cards for player and dealer
let player = firstTwoCards(playerHands,  cardDeck); // first two player cards
let dealer = firstTwoCards(dealerHands, cardDeck); // first two dealer cards

prompt(`You have: ${player[0]} and ${player[1]}`)
prompt(`Dealer has ${dealer[0]} and ?`);

prompt('----------Player Turn----------');
playerPoints = playerTotal(player);
prompt(`You have a total of ${playerPoints} points.`);
currentPlayerCards = dealPlayer(player, cardDeck, playerPoints);
prompt(`The current Player Total is: ${playerTotal(currentPlayerCards)}`);

prompt('----------Dealer Turn----------');
dealerPoints = dealerTotal(dealer);
prompt(`Dealer has a total of ${dealerPoints} points.`);
currentDealerCards = dealerTurn(dealer, cardDeck, dealerPoints);
prompt(`The current Dealer Total is: ${dealerTotal(currentDealerCards)}`);


//displayResult(playerPoints, dealerPoints);

//  false;
//};








/*

  if (busted(totalPlayerPoints)) {
    prompt(`You have exceeded the ${MAX_POINTS}`);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${playerTotal(playerHands, totalPlayerPoints)}`);
  }


};

/*
  // player and dealer points from first two cards
  totalPlayerPoints = playerTotal(player, totalPlayerPoints);
  totalDealerPoints = dealerTurn(dealer, cardDeck, totalDealerPoints); 

  // player turn
  while (true) {
    showPlayerHand(player); // show player hands

  // get new current player hand
  let currentPlayerHand = dealPlayer(player, cardDeck, totalPlayerPoints); // update player hand if wanted
  }

/*
  while (true) {
  showDealerHand(dealer); // show dealer hands
  let currentDealerHand = dealPlayer(dealer, cardDeck, totalDealerPoints); // update dealer hand if wanted
  dealerTurn(dealer, cardDeck); // check dealer points

  }
  */

/*
  totalPlayerPoints = playerTotal(player, totalPlayerPoints);
  prompt(totalPlayerPoints);

  playerTotal(player); // check player points

  displayResult(totalPlayerPoints, totaldealerPoints); // display result
  winnerGame(totalPlayerPoints, totalDealerPoints); // check for winner

  if (winnerGame(totalPlayerPoints, totaldealerPoints) === 'Player Wins' ||
    winnerGame(totalPlayerPoints, totalDealerPoints) === 'Dealer Wins') {
      break;
    }

}
*/

