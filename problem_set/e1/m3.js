// Lettercase Percentage Ratio

// input: string
// output: object

// percentage of characters
// percentage = proportion / total -> needs to be defined

function hashObject(str) {
  let total = str.length;
  let collection = {lowercase: 0, uppercase: 0, neither: 0};

  str.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      collection['lowercase'] += 1; 
    } else if (char >= 'A' && char <= 'Z') {
      collection['uppercase'] += 1;
    } else {
      collection['neither'] += 1;
    }
  })
  return collection;
}

function letterPercentages(str) {
  let total = str.length;
  let collection = hashObject(str)
 
  collection['lowercase'] = `${(collection['lowercase'] / total * 100).toFixed(2)}`
  collection['uppercase'] = `${(collection['uppercase'] / total * 100).toFixed(2)}`
  collection['neither'] = `${(collection['neither'] / total * 100).toFixed(2)}`
  
  return collection;
}

// alternative solution

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

// rotation part 1

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  let newArray = arr.slice(1).concat(arr[0]);
  return newArray;
}


// right most digit

function rotateRightmostDigits(digits, rotation) {
  let strNum = String(digits).split('');
  let rotatedArray;

  for (let count = 0; count < rotation; count ++) {
    let rotatedArray = strNum.slice(0, strNum.length - rotation).
    concat(rotateArray(strNum.slice(strNum.length - rotation)))
    console.log(rotatedArray);
  }
  //return rotatedArray
}




