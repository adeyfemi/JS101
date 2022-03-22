// how to identify and eliminate bugs when they occur

// => use `inspect` in node to trace through code (node inspect <file name>)
// => commands:  `exec` command allows you to access in-scope vairables
//  can also be used to evaluate expressions or execute functions

// to execute a function with `exec` muist invoke for that function in code and not just the function
// definition

// access the built in REPL, using `repl` command - access variables, evaluate expressions or execute functions
/*
function add(num1, num2) {
  return num1 + num2;
}

let a = 1;
let b = 2;

let sum = add(a, b); 
*/

// Setitng and clearing breakpoints

// adding and removing breakpoints within the debugger itself while running
// => breakpoints can be set using the setBreakpoint() or sb() commands, and 
//removed using the clearBreakinpoint or cb() commands

//useful for debugger program itself, exit debugger then any breakpoints auto clear

/*
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter += 1;
}
*/

// use run command to continue


// STEPPING INTO FUNCTIONS

//use the 's' or 'step' command to step into the callback function
// step out of it using 'o' or 'out' command

function square(num) {
  return num * num;
}

const myArr = [1,2,3,4,5];

let squares = myArr.map(num => square(num));
console.log(squares);


// once you reach the inner function invocation, you can use 's' / 'step' to move into the
// execution of that function, rather than just moving over it to the next expression or function
// call. once inside the function, you can step out of it using 'o' or 'out'

// The actual callback is the anonymous function. num => square(num).

// other notes

// 'help' command lists all the commands available
// list() command can be used to reveal additional lines of code within the debugger UI
  // Normally only five lines are visible (the current line, two above, and two below)
  // an argument can be passed in to the command to specify the number of lines to display above
  // and below the current line

  

