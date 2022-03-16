// question 1 - what do the functions return

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// functions do not return the same thing. Function first() returns the object and second()
// returns undefined
// reason for odd behavior is that semicolons in JS are optional, however, when you omit them, the JS
// engine inserts them where it thinks you need them. In second, it inserts a semicolon right
// after the word return, so the function returns undefined

// question 2 - what does the last line in the code output

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// since numArray is a reference to the original array [1], numArray.push() modifies the array
// the original object referenced by object is changed. if, instead of modifying the original array
// we modify numArray but not object we have two options

// use slice to get a copy of original

let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);

// use concat to return a new array

let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);


// question 3 - what will code output?

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);


function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);


function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);


// functions have same name as global variables, which are shadowed by the local variable
// so global variables are not accessible inside of the function
// the local and global variable have the same name but they are not the same variable

// question 4 // need to review again

function validNumber(str) {
  return str.length !=== 4 
};

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  if (validNumber(inputString)) {
    break;
  } else {
    let dotSeparatedWords = inputString.split(".");
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        break;
      }
    }
  }
  return true;
};

// answer 

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

