'use strict';

// Write your code here
function sum (a,b) {
  var sum = a + b;
  var array = [sum, 'The sum of ' + a + ' and ' + b + ' is ' + sum + '.'];
  return array;
}

// Write your code here
function multiply(c,d){ //eslint-disable-line
  var multiply = c * d;
  var array = [multiply,'The product of ' + c + ' and ' + d + ' is ' + multiply + '.'];
  return array;
}

testMultiply(5,9);
