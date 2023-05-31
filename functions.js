"use strict";
// There are various ways we can create a function in javaScript

// 1. normal funtion
function funcName(parameters) {
  // function body
  return 1; //return statement
}
let argument = 10;
funcName(argument); // call

//  2. annonymus function
const funName = (function (params) {
  // body
})(10); // direct invocation

// 3. arrow funtion
const fname = (param) => {
  // body
  return 1;
};

// single line arrow funtion with no return
const funtionName = (param) => param + 10;
console.log(funtionName(10));
