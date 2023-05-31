// given an array of tempratures of a day find out the temprature amplitude of that day
// temp amplitude is the difference between minimum and maximum element of the array
"use strict";

function removeError(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      arr.splice(i, 1); // splice method removes 1 element from ith position -- that means the current element
    }
  }
}

function calcTempAmplitude(arr) {
  removeError(arr);
  console.log(arr);
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

const tempList = [22, 34, 23, "error", 53, 55, 33, 22];
const amplitude = calcTempAmplitude(tempList);
console.log(amplitude);
