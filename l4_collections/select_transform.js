let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(choice) {
  let choiceKeys = Object.keys(choice);
  let chosenFruits = {};

  for (let count = 0; count < choiceArr.length; count++) {
    let currentKey = choiceKeys[count];
    let currentValue = choice[currentKey]
    if (currentValue === 'Fruit') {
      chosenFruits[choiceKeys[count]] = currentValue;
    }
  }
  return chosenFruits
}


// Transformation

function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}

// Mutate original array

function doubleNumbers(numbers) {
  let count = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] = currentNum * 2; // reassignment into the argument array
    
    counter += 1;
  }
  return numbers;
}

// Transform based on position: double numbers that have odd indices

function doubleOddNumbers(numbers) {
  let doubledNumbers = [];

  for (let counter = 0; counter < numbers.length; counter ++) {
    let currentNumber = numbers[counter];

    if (numbers.indexOf(currentNumber) % 2 === 1) {
      doubledNumbers.push(currentNumber * 2);
    } else {
      doubledNumbers.push(currentNumber);
    }
  }
  return doubledNumbers;
}

// doubled numbers with a multiplication criteria

let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]

function multiply(myNumbers, multiplier) {
  let multiplyByThree = [];

  for (let counter = 0; counter < myNumbers.length; counter++) {
    let currentNumber = myNumbers[counter];
    multiplyByThree.push(currentNumber * multiplier);
  }
  return multiplyByThree;
}
