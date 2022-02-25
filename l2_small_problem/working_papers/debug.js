// debug.js

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger;
  counter += 1;
}

// access the values of variables in scope at point of execution by using "exec"
// followed by the name of the variable, 
// use "next" to go to the next line
// use "c" to continue through program until you hit an error

// include debugger line after output and kickstart with "c" then check output using exec

//Addressing errors

try {
  // do something that might fail here and throw an exception
} catch (error) {
  // this code only runs if something in the try clause throws an exception.
  // "error" contains the exception object
} finally {
  // this code always runs even if the above code throws an exception
}


function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data);  // Throws an exception if "data" is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an exception
    // "e" contains an Error object that we can inspect and use.
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);    // Logs "There was a SyntaxError parsing JSON data:
                    //       Unexpected token i in JSON at position 0"
                    // Logs "Finished parsing data."
                    // Returns null