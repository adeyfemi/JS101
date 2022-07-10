// q1
// input: integer
// output: boolean

// rules:
/* 
a. argument in fn = pos, neg or zero
b. no floating numbers and assume valid interger value
*/

// return true if number absolute value is odd

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
};

console.log(isOdd(2)); 
console.log(isOdd(5)); 
console.log(isOdd(-17));
console.log(isOdd(-8)); 
console.log(isOdd(0)); 
console.log(isOdd(7)); 


//q2
// rules:
/*
a. log ODD numbers 1-99, inclusive
b. each number on separate line
*/

for (let count = 1; count <= 99; count +=2) {
  console.log(count);
}

// +q2

let count = 1;

while (count < 100) {
  console.log(count);
  count += 2;
}


// q3

for (let count = 2; count < 99; count += 2) {
  console.log(count);
}

// q4

//input: strings
//output: strings

//rules:
/*
a. two strings as arguments
b. determine the length of 2 strings
c. return short + long + short
d. strings will be different lengths
*/

// algorithm:
/*
a. determine the length of the 2 strings
b. concatenate the 2 strings RETURN VALUE
*/

function shortLongShort(str1, str2) {
  let greaterLength = str1.length > str2.length;
  return (greaterLength ? str2.concat(str1,str2) : str1.concat(str2,str1))
}

shortLongShort('abc', 'defgh'); 
shortLongShort('abcde', 'fgh');  
shortLongShort('', 'xyz'); 


// q5

//input: integers
//output: boolean


// leap yr: 
/*
- occurs every 4 years, BUT NOT when divisible by 100
- divisible by 100 WHEN divisible by 400
- divisble by 4
*/

//rules: year must be > 0
// return true or false

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
}

function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

console.log(isLeapYear(2016));      
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));      
console.log(isLeapYear(2400));      
console.log(isLeapYear(240000));    
console.log(isLeapYear(240001));    
console.log(isLeapYear(2000));      
console.log(isLeapYear(1900));      
console.log(isLeapYear(1752));      
console.log(isLeapYear(1700));      
console.log(isLeapYear(1));         
console.log(isLeapYear(100));       
console.log(isLeapYear(400));

function isLeapYear(year) {
  if (year < 1972 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0
  }
}

isLeapYear(2016);    
isLeapYear(2015);    
isLeapYear(2100);    
isLeapYear(2400);    
isLeapYear(240000);  
isLeapYear(240001);  
isLeapYear(2000);    
isLeapYear(1900);    
isLeapYear(1752);    
isLeapYear(1700);     
isLeapYear(1);       
isLeapYear(100);     
isLeapYear(400);     

function multisum(limit) {
  let sumTotal = 0;

  for (let count = 1; count <= limit; count++) {
    if (count % 3 === 0 || count % 5 === 0) {
      sumTotal += count;
    }
  }
  return sumTotal;
}

multisum(3);
multisum(5);
multisum(10);
multisum(1000);

// q6

function utf16Value(str) {
  let sumTotal = 0;

  for (let count = 0; count < strArray.length; count++) {
    sumTotal += str.charCodeAt(count);
  }
  return sumTotal;
}


utf16Value('Four score');     
utf16Value('Launch School');      
utf16Value('a');                  
utf16Value('');                   

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             
utf16Value(OMEGA);                  
utf16Value(OMEGA + OMEGA + OMEGA);  

// q7

/*
- 2 arguments: array and object
- write a function that returns a greeting
- full name, and mentions title
*/

function greetings(name, job) {
  let strName = name.join(' ');
  let strJob = `${job['title']} ${job['occupation']}`;

  return `Hello, ${strName}! Nice to have a ${strJob} around.`;
}

// q8

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(5, 3) === 15); 

const multiply = (num1, num2) => num1 * num2;


// q9

const square = (n) => n * n;

console.log(square(5) === 25); 
console.log(square(-8) === 64);

// q10

function power(num, exponent) {
  if (num === 1) {
    return num;
  } else {
    return multiply(num, multiply(num, exponent - 1));
  }
}

// q11

// return the net to last word in the String

function penultimate(str) {
  let size = str.split(' ').length;
  return str.split(' ')[size - 2];
}

function allPenultimate(str) {
  let middle = Math.ceil(str.split(' ').length / 2);
  return str.split(' ')[middle];
}

allPenultimate('Femi is very cool indeed')

// q12

function xor(num1, num2) {
  return (num1 && !num2) || (num2 && !num1)
}


// q13

function oddities(array) {
  return array.filter((num, idx) => idx % 2 === 0);
}


// q14

function multiplier(str) {
  let strArr = str.split('');
  let multiplier = 1;

  let count = 0;

  while (count < str.length - 1) {
    multiplier = multiplier * 10
    count += 1;
  }

  return multiplier
}

function stringToInteger(str) {
  let strArr = str.split('');
  let multiply = multiplier(str);
  let total = 0;

  strArr.forEach(num => {
    total += num * multiply;
    multiply = multiply / 10;
  })

  return total
}


// 

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}



// q15

function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', 
  '6', '7', '8', '9']

  let numArr = [];
  let divisor = 10

  while (num > 0) {
    let remainder = num % 10;
    numArr.unshift(remainder);
    num = Math.floor(num / divisor);
  }

  let strArr = numArr.map(char => DIGITS[char]).join('');

  if (strArr === '') {
    return '0'
  } else {
    return strArr;
  }

}



