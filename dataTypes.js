// The Data Type of a value describes what kind of value it is.
// In javaScript we have various type of values 
// JavaScript uses the number type to represent both integer and floating-point numbers.
// typeof operator is used to tell what kind of value it is

// 1. Numbers (numerical values)
let num1 = 1432;
let num2 = 553.32;
let num3 = 1_00_000;
console.log(typeof num1 +" " +num1);
console.log(typeof num2 + " " +num2);
console.log(typeof num3 + " " +num3);

// Number object
maxValue = Number.MAX_VALUE;  // Maximum value that a number variable can hold
minValue = Number.MIN_VALUE;  // Minimum value that a number variable can hold

console.log(maxValue);
console.log(minValue);
window.console.log(maxValue + maxValue); // infinity
window.console.log( -maxValue - maxValue); // -infinity



// 2. String (characters)
// In JavaScript, a string is a sequence of zero or more characters. A string is written inside 
// single quotes 'this is a string'  or double quotes "This is also a string"

let fName = 'Binayak';
let lNmae = "Purohit";
console.log(typeof fName)

console.log(fName[0]); // we can access indisual character using index value 
fName[0] = "G";  // in javaScript strings are immuatable. That means we cannot change the values of a variable 
// but we can create a copy of that variable to change the value
 

let newString = "My name is " +fName + " " +lNmae+".";  // Strings can be added together using + operator
console.log(newString);




// 3. Boolean (true/false)

let isOkay = true;
console.log(isOkay)

isOkay = false;
console.log(typeof isOkay);

console.log(10>20); // every comparasion operation return a boolean value

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false





// 4. null
let nothing = null;
console.log(nothing);
console.log(typeof nothing); // type of null returns object which is a known bug in js




// 5. undefined (if a variable is not assigned any value then by default it is of undefined type)
let newVal;
console.log(typeof newVal);



// 6.  symbol 
// JavaScript added a primitive type in ES6: the symbol. Different from other primitive types, the symbol type does not have a literal form
let s1 = Symbol();
console.log(Symbol() == Symbol()); // false

let ssn = Symbol.for('ssn');
let citizenID = Symbol.for('ssn');
console.log(ssn === citizenID); // true



// 7. bigint (came in 2020)
// it can store a large number, we need to append 'n' at the end of the number

let n = 87923479889723487923148234;
console.log(n)
console.log(typeof n)




// 8. object type
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(person);
console.log(typeof person);