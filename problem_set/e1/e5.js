// q1


const DEGREES = '\xB0';
const MINUTES_IN_DEGREES = 60;
const SECONDS_IN_MINUTES = 60 * MINUTES_IN_DEGREES;


// degrees, minutes, seconds

function n(num, len = 2) {
  return `${num}`.padStart(len, '0');
}

function dms(num) {
  let degrees = Math.floor(num);
  let minutes = Math.floor(num % degrees * MINUTES_IN_DEGREES);
  let seconds = Math.floor(num % degrees * MINUTES_IN_DEGREES % minutes * MINUTES_IN_DEGREES);
  console.log(seconds);

  console.log(`${degrees}${DEGREES}${n(minutes)}'${seconds}"`);

}


// LS solution

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                       padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}


// q2
function union(arr1, arr2) {
  let newArr = [];

  for (let count = 0; count < arr1.length; count++) {
    newArr.push(arr1[count])
  }

  for (let idx = 0; idx < arr2.length; idx++) {
    if (newArr.includes(arr2[idx])) {
      continue
    } else {
      newArr.push(arr2[idx]);
    }
  }

  return newArr;

}

function union(arr1, arr2) {
  let newArr = [];
  let comboArr = arr1.concat(arr2);

  comboArr.forEach(num => {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  });

  return newArr;
}


// q3 - halvsies

function halvsies(arr) {
  let middle = Math.ceil(arr.length / 2);
  let firstHalf = arr.slice(0, middle);
  let secondHalf = arr.slice(middle);
  return [firstHalf, secondHalf];
}


// q4 - find duplicate

function findDup(arr) {
  let hshArr = {};

  arr.forEach(num => {
    if (!hshArr[num]) {
      hshArr[num] = 0
    }
    hshArr[num] += 1;
  })

  return Number(Object.keys(hshArr).filter(key => hshArr[key] === 2).join(''));
}


// q5 combine two lists

function interleave(arr1, arr2) {
  let comboList = [];
  for (let count = 0; count < arr1.length; count ++) {
    comboList.push(arr1[count], arr2[count]);
  }

  return comboList;
}


function interleave(arr1, arr2) {
  let result = [];
  return arr1.map((num, idx) => result.push(num, arr2[idx]));
  return result;
}

// alternate

return arr1.reduce ((arr, value, index) => {
  arr.push (value, arr2[index]);
  return arr;
}, []);


// multiplicative avergae

function multiplicativeAverage(arr) {
  let numItems = arr.length;
  let product = 1;

  arr.forEach(num => product *= num);

  return (product / numItems).toFixed(3);
}

// multiply lists

function multiplyList(arr1, arr2) {
  let comboArr = [];
  for (let count = 0; count < arr1.length; count ++) {
    comboArr.push(arr1[count] * arr2[count])
  }

  return comboArr;
}


function multiplyList(arr1, arr2) {
  return arr1.reduce((arr, value, idx) => {
    arr.push(arr1[idx] * arr2[idx])
    return arr;
  }, []);
}


// function list of digits

function digitList(num) {
  let numString = String(num).split('');
  return numString.map(digit => Number(digit));
}

// q9 - how many

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];


function countOccurences(vehicles) {
  let vehicleHsh = {};

  vehicles.forEach(ride => {
    if (!vehicleHsh[ride]) {
      vehicleHsh[ride] = 0;
    }
    vehicleHsh[ride] += 1; 
  });

  console.log(vehicleHsh);

 return Object.entries(vehicleHsh).forEach((type) => console.log(`${type[0]} => ${type[1]}`));
}

// alternative solution

function countOccurrences(elements) {
  let occurrences = {};

  for (let idx = 0; idx < elements.length; idx += 1) {
    occurrences[elements[idx]] = occurrences[elements[idx]] || 0;
    occurrences[elements[idx]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${occurrences[item]}`);
  }
}

// q10 - array average 

function average(arr) {
 return Math.floor(arr.reduce((total, sum) => total += sum) / arr.length);
}

// after midnight
const MINS_IN_HOUR = 60; 
const HOURS_PER_DAY = 24
const MINS_IN_DAY = HOURS_PER_DAY * MINS_IN_HOUR; // 1440 number of mins in a day

function leadingZero(num) {
  return num < 10 ? `0${num}` : String(num);
}


function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINS_IN_DAY) + MINS_IN_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINS_IN_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINS_IN_HOUR);
  let minutes = deltaMinutes % MINS_IN_HOUR;

  return formatTime(hours, mins)
}

// after midnight pt 2

function afterMidnight(dateStr) {
  let timeMins = dateStr.split(':')
  let hours = timeMins[0];
  let mins = timeMins[1];

  let total = (hours * MINS_IN_HOUR) + Number(mins)

  if (total < MINS_IN_DAY) {
    return total;
  } else if (total === MINS_IN_DAY) {
    return 0
  }
}


function beforeMidnight(dateStr) {
  let afterTwelve = afterMidnight(dateStr);

  if (afterTwelve === 0) {
    return 0;
  } else {
    return MINS_IN_DAY - afterTwelve;
  }
}
