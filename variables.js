// Variables are the named containers or memory locations to store data 

// Syntax -- var/let/const variable_name;   variable_name = value;
// A javaScript variable can hold any kind of value.

// USING var (old way)
var a;
a = 10;  
console.log(a);

var name = "Binayak";  // We can assign a variable in the same line
console.log(name);

name = "Ganesh";  // We can always modify the assigned value of the variable 
console.log(name);

var name = "Bk"; // We can redeclare a var variable
console.log(name); 





// USING let (came with ES6)

let c;
c = 20;
console.log(c);

let b = 10;
console.log(b);

b = 20;      // we can assign or modify the value of a let variable
console.log(b);

// let b = 50; --> We cannot redeclare a let variable 





// USING const (came with ES6)
// a const variable is used as a constant variable whose value will never change;

const num = 1123409;  // for a const variable we need to assign the value while declaring.
console.log(num);      // we cannot modify or redeclare a const variable.