// question 1 - output a sentence 10 times and each word indented 1 space more than previous

let sentence = "The Flintstones Rock!";

for (count = 1; count < 11; count+=1) {
  console.log(' '.padStart(count, ' ') + sentence);
};

// Launch school

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}


The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...

// question 2 - return a new string swaps the case of all the letters

let munstersDescription = "The Munsters are creepy and spooky.";

munstersDescription.split('').map(char => char === char.toLowerCase() ? 
  char.toUpperCase() : char.toLowerCase()).join(''); // transformed

// LS Version

munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");


// question 5

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}


function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor); // replace with just divisor and it reverses the order of factors
    }
    divisor -= 1;
  }
  return factors;
}


// question 5 - what is the difference between the two implementations?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// both methods return the same value, but first way mutates the argument 
// means the caller will see that the array is different when the function returns 
// rollingBuffer2 implementation doesn't mutate the argument specified by the value of the buffer


// question 5 - what will the two lines of code output

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

// floating point numbers are not precise and can yield unexpected results

// question 6

let nanArray = [NaN];

console.log(nanArray[0] === NaN); //false, JS doesn't let you use == or === to determine whether a value is NaN

// use the method Number.isNan(<NUMBER>)

// question 7

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // answer is 34: 42 remains unchanged

// question 8 - munster family and object referencing

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}


// question 9 - code output

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")); // paper


// question 10 - function invocation return

function foo(param = "no") {
  return "yes"; // always returns a yes
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no"; // returns a yes
}

bar(foo()); // returns a no

