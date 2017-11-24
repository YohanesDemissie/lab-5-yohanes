'use strict';

function sum (a,b) {
  var sum = a + b;
  var array = [sum, 'The sum of ' + a + ' and ' + b + ' is ' + sum + '.'];
  return array;
}
testSum(4,7);

function multiply(c,d){
  var multiply = c * d;
  var array = [multiply,'The product of ' + c + ' and ' + d + ' is ' + multiply + '.'];
  return array;
}
testMultiply(5,9);


function sumAndMultiply(e,f,g){
  var add = sum(sum(e,f)[0],g)[0];
  var multi = multiply(multiply(e,f)[0],g)[0];
  var array = [add, multi, e + ' and ' + f + ' and ' + g + ' sum to ' + add + '.', 'The product of ' + e + ' and ' + f + ' and ' + g + ' is ' + multi + '.'];
  return array;
}

testSumAndMultiply(4,7,5);
