//1. function that returns the sum of two numbers.

// casual form

/*

initialize a function with two parameters
initialize a variable for the first number
initialize a variable to hold the second number
initialize a variable called sum set to the first number plus the second number
return the sum variable

*/


// formal form

/*
start with a function that holds two parameters
set the first variable to hold the first number
set the second variable to hold the second number
set a new variable called sum to hold varibable 1 and variable 2
add the two numbers together
return the sum variable from the function

*/


// function that takes an array of strings, and returns a string that all those
// strings are concatenated together

/* casual form

Given a collection of strings in an array
initialize a function that takes an array as a parameter
initialize a variable that is set to an empty string
iterate through the collection of strings
for each string add it to the empty array 
move to the next stirng and do the same action
once the iteration is complete, return the string collection

*/

/* formal form

start - given a collection fo strings called arrayStrings
set iterator = 0
set stringVariable = ""

while iterator <= arrStrings.length
  set stringVariable += arrayStrings[iterator]

  return stringVariable

end

*/

// casual form

/*
given a collection of numbers in an array
iterate through the array
initialize a new collection array
for each number in the collection, check the index position
if the index is even add to the new collection array
return the new collection array
*/


// formal form

/*
start with a collection of numbers in an array
set iterator = 0
while iterator <= arr.length
  set newArr.push(arr[iterator])
   iterator += 2

  return the newArr

end 
*/

// casual form

/*
start with a given string collection
convert the strings into individual characters 
place these string characters into an array
iterate through the array of character strings
set a new variable to count the occurence of the string
set a new variable for the index position
for the string being checked, for each time it occurs add 1 to the count variable
on the 3rd occurence, add the index position to the index position variable
return the index position variable or null if nothing shows up in the variable
*/


// formal form

/*
start with a given collection of strings
set countVar = 0
set indVar = 0
set iterator = 0

set arrStrings = str.split('')

for (i = 0; i < arr.Strings.length; i += 1) 
while iterator <= arrStrings.length
  countVar += 1
  and indVar = i

  if countVar === 3 then return indVar

*/



//4. function that takes 2 arrays of numbers and returns the result of merging the arrays
// the elements of the first array should become the lements at even indexes/
// the elements of 2nd arrays should become the elements at the odd indexes


// casual form
/*
given 2 collections of arrays
initialize a new variable to an empty array
iterate through the array (full size)
on each iteration add the array number at the index

*/

/* formal form

start with a collection of 2 arrays
set iterator = 0
set newArr = []

while iterator <= arr1.length + arr2.length / 2
  newArr.push(arr1[iterator])
  newArr.push(arr2[iterator])
  iterator += 1

*/





