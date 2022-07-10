// q1

function letterPercentages(str) {
  let hsh = {'lowercase': 0, 'uppercase': 0, 'neither': 0};

  str.split('').forEach(letter => {
    if (letter >= 'a' && letter <= 'z') {
      hsh['lowercase'] += 1
    } else if (letter >= 'A' && letter <= 'Z') {
      hsh['uppercase'] += 1
    } else {
      hsh['neither'] += 1;
    }
  });

  let total = str.length;
  let resultHsh = {}
  Object.entries(hsh).map(subArr => resultHsh[subArr[0]] = String((subArr[1] / total * 100).
    toFixed(2)));

  return resultHsh;
}

// alternative solutions

function letterPercentages(string) {
  let count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(
      2
    )
  };
}

//

function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}

// q2

// triangle: sum of length of 2 sides > longest side
// sort numbers in order
// max is last number in array
// check if all three numbers are the same
// check if 2 of numbers are the same 

function triangle(num1, num2, num3) {
  let arr = [num1, num2, num3].sort()
  if (arr.includes(0) || (arr[0] + arr[1]) < arr[2]) return 'invalid';
  if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === arr[2]) {
    return 'equilateral';
  } else if (arr[0] !== arr[1] && arr[1] !== arr[2] && arr[0] !== arr[2]) {
    return 'scalene';
  } else {
    return 'isoceles';
  }
}

// solution
function triangle(side1, side2, side3) {
  let perimeter = side1 + side2 + side3;
  let longest = Math.max(side1, side2, side3);
  let shortest = Math.min(side1, side2, side3);
  let middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(side1, side2, side3);
  } else {
    return "invalid";
  }
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && shortest + middle > longest;
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

// q3

function fridayThe13ths(year) {
  let d = new Date();
  let count = 0;
  let month;

  for (month = 0; month < 12; month++) {
    d.setFullYear(year, month, 13);
    if (d.getDay() === 5) {
      count += 1;
    }
  }

  return count;
}


// q4

function triangle(a1, a2, a3) {
  let degree = a1 + a2 + a3;
  let lowest = Math.min(a1, a2, a3)

  if (lowest <= 0 || degree !== 180) return 'invalid';

  if (a1 === 90 || a2 === 90 || a3 === 90) {
    return 'right';
  } else if (a1 < 90 && a2 < 90 && a3 < 90) {
    return 'acute'
  } else {
    return 'obtuse'
  }
}

// solution

function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return "invalid";
  }
}

function isValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle);

  const allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return "right";
  } else if (angles.every(testAcuteTriangle)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}

// q5

// number is odd
// number is higher than argument
// number is divisible by 7

// let num = 21
// num !== Number(String(num).split('').reverse());

function featured(num) {
  let result = 0

  while (true) {
    while (true) {
      result += 7
      if (result > num && result % 2 === 1 && 
        result !== Number(String(result).split('').reverse())) {
        break;
      }
    }
    if (checkDuplicates(result)) break;
  }

  return result;
}

function checkDuplicates(num) {
  let strNum = String(num).split('')
  let result = '';
  strNum.forEach(num => {
    if (!result.includes(num)) {
      result += num;
    }
  })
  return result.length === String(num).length;
}
    

// alternative

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}


// q6

function sumSquareDifference(number) {
  let sum = 0
  let squared = 0;

  for (count = 1; count <= number; count++) {
    sum += count;
    squared += count**2
  }

  return (sum ** 2) - squared;

}

// q7 

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let a = arr[i]
      let b = arr[i + 1]
      arr[i] = b
      arr[i + 1] = a;
    }
  }
  return arr.sort((a, b) => a - b);
}

// alternative

function bubbleSort(arr) {
  while (true) {
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}


// q8

// split sentences ending in synmbols or space
// place sentence into a nested array
// iterate through array and store the longest length array
// return the longest sentence and sentence word count

function longestSentence(text)