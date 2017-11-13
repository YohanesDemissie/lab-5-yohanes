'use strict';

function sum (a,b) {
  var sum = a + b;
  var array = [sum, 'the sum of' +a+' and '+b+' is '+sum];
  return array;
}

testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The product of 5 and 9 is 45."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here

function multiply (c,d) { //eslint-disable-line
  var multiply = c * d;
  var array = [multiply, 'the product of' +c+' and '+d+' is ' + multiply];
  return array;
}

testMultiply(5, 9);


// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."
IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) {
  var add = sum (sum (a, b) [0], c) [0];
  var multi = multiply (multiply (a, b) [0], c) [0];
  var array = [add, multi, a+' and '+b+' and '+c +' sum to '+add+'.', 'The product of '+a+' and '+b+' and '+c+' is '+multi+'.'];
  return array;
}

testSumAndMultiply (4, 7, 5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
