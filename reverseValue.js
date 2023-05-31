// reverse the given array/number/string

function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseArray(arr) {
  return arr.reverse();
}

function reverseNumber(num) {
  let newNum = 0;
  let reminder = 0;
  while (num > 0) {
    reminder = num % 10;
    newNum = newNum * 10 + reminder;
    num = Math.floor(num / 10);
  }
  return newNum;
}

function valueType(val) {
  let result;
  if (typeof val === "string") {
    result = reverseString(val);
  } else if (Array.isArray(val)) {
    result = reverseArray(val);
  } else if (Number.isInteger(val)) {
    result = reverseNumber(val);
  } else return `cannot reverse ${typeof val}`;
  return result;
}

// const reveresedValue = valueType([1, 3, 5, 6]);
const reveresedValue = valueType(12345678);
// const reveresedValue = valueType("hello world");
console.log(reveresedValue);
