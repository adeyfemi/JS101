// Lettercase Percentage Ratio

function letterPercentages(str) {
  let total = str.length;

  let letterPercentages = {};

  let lowercaseLetter = str.match(/[a-z]/g) || [];
  let uppercaseLetter = str.match(/[A-Z]/g) || [];
  let neither = str.match(/[^A-Za-z]/g) || [];
  
  letterPercentages.lowercase = (lowercaseLetter.length / total * 100).toFixed(2);
  letterPercentages.uppercase = (uppercaseLetter.length / total * 100).toFixed(2);
  letterPercentages.neither = (neither.length / total * 100).toFixed(2);

  console.log(letterPercentages);

}

// valid Triangle

function validTriangle(n1, n2, n3) {
  let triArr = [n1, n2, n3].sort((a, b) => a-b);
  return (triArr[0] > 0 && (triArr[0] + triArr[1] > triArr[2]))
}

function triangle(n1, n2, n3) {
  let valid = validTriangle(n1, n2, n3);

  if ((valid) && ((n1 + n2) / 2 === n3)) {
    return 'equilateral';
  } else if ((valid) && (n1 === n2 || n1 === n3 || n2 === n3)) {
    return 'isosceles';
  } else if ((valid) && (n1 != n2 && n1 != n3 && n2 != n3)) {
    return 'scalene';
  } else {
    return 'invalid';
  }
}

// angle triangle

function validTriangle(a1, a2, a3) {
  let triArr = [a1, a2, a3];
  return (triArr[0] > 0 && (triArr[0] + triArr[1] + triArr[2] === 180))
}

function triangle(a1, a2, a3) {
  let valid = validTriangle(a1, a2, a3);
  let angles = [a1, a2, a3].sort((a, b) => a-b)

  let short = angles[0]
  let mid = angles[1]
  let long = angles[2]

  if ((valid) && (long === 90)) {
    return 'right';
  } else if ((valid) && (long > 90)) {
    return 'obtuse';
  } else if ((valid) && (short && mid && long < 90)) {
    return 'acute';
  } else {
    return 'invalid';
  }
}


// Unlucky Days

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.reduce((count, day) =< {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
}


// next Number

/* rules
featured number: 
- MUST be odd & multiple of 7
- all digits show up once

input: integer
output: integer

return: next featured number

algorithm:
- start counting from 0
- increment by 7
- on each increment check if number greater than input
- if yes, check if number is odd
- if number is odd, return
- if not increment by 7 again, then return 


*/

function featured(num) {
  let MAX_NUMBER = 98776543201;

  if (num === MAX_NUMBER) {
    return 'There is no possible number that fulfills those requirements.'
  }

  let result = 0;

  while (true) {
    while (true) {
      result += 7;

      if ((result > num) && (result % 2 === 1)) {
        break;
      }
    }

    let count = '';

    String(result).split('').forEach(strNum => {
      if (!count.includes(strNum)) {
        count += strNum;
      }
    });

    if (count.length === String(result).length) {
      break;
    }
  }
  return result;
}

// sum sqaure - square sum

function sumSquare(num) {
  let number = 0;
  for (let count = 1; count <= num; count++) {
    number += count
  }
  return number ** 2;
}


function squareSum(num) {
  let number = 0;

  for (let count = 1; count <= num; count++) {
    number += count ** 2;
  } 
  return number;
}

function sumSquareDifference(num) {
  return sumSquare(num) - squareSum(num);
}

// Bubble sort

/* rules
- input: array
- output: array

rules:
- return a sorted array by comparing item before to item following
- if before lower, keep the same
- if greater, swap

*/

function bubbleSort(arr) {
  while (true) {
    let swap = false;

    for (let i = 1; i <= arr.length; i++) {
      if (arr[i-1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swap = true;
      }
    }

    if (!swap) break;
  }

  return arr;
}


// longest sentence

function longestSentence(text) {
  let sentences = text.match(/\w.*?[.!?]/g);

  let longest = sentences.reduce(
    function(longest, sentence) {
      let length = sentence.split(/\s/).length;
      if (length > longest.length) {
        return { text: sentence, length: length};
      } else {
        return longest
      }
    },
    {text: "", length: 0}
    );

  console.log(longest.text + "\n");
  console.log("The longest sentence has " + longest.length);
}