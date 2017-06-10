'use strict';

// Problem 1
function sum(a,b){ //eslint-disable-line
  var sum = a + b;
  return [
    sum, 'The sum of ' + a + ' and ' + b + ' is ' + sum + '.'
  ];
}
testSum(4, 7);

//Problem 2
function multiply(a,b){ //eslint-disable-line
  var multiply = a * b;
  return [
    multiply,
    'The product of ' + a + ' and ' + b + ' is ' + multiply + '.'
  ];
}
testMultiply(5,9);

//Probem 3
function sumAndMultiply(a,b,c){ //eslint-disable-line
  var q3sum = sum(a,b)[0];
  q3sum = sum(q3sum, c)[0];
  var q3multi = multiply(a, b)[0];
  q3multi = multiply(q3multi,c)[0];
  return [
    q3sum,
    q3multi,
    a + ' and ' + b + ' and ' + c + ' sum to ' + q3sum + '.', 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + q3multi
    + '.'
  ];
}
testSumAndMultiply(4,7,5);

// Problem 4
var testArray = [2,3,4]; //eslint-disable-line
function sumArray(testArray){ //eslint-disable-line
  var q4sum = sum(2,3)[0];
  q4sum = sum(q4sum, 4)[0];
  return [
    q4sum,
    testArray + ' was passed in as an array of numbers, and ' + q4sum + ' is their sum.'
  ];
}
testSumArray(testArray);

//question five
function multiplyArray(testArray){ //eslint-disable-line
  var q5multi = multiply(2,3)[0];
  q5multi = multiply(q5multi,4)[0];
  return [
    q5multi,
    'The numbers ' + testArray + ' have a product of ' + q5multi + '.'
  ];
}

testMultiplyArray(2,3,4);
