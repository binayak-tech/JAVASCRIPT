// assignment operator =
let k = 10;

// arithmatic operators (+, -, *, /, %, ++, --, **)
let num1 = 10;
let num2 = 5;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num1*num2);
console.log(num1%num2); // reminder of 10 / 5
console.log(num1**num2); // 10 power 5
console.log(++num1);
console.log(num1++);
console.log(num1--);
console.log(--num1);


// comparison operators (==, ===, !=, !==, <, >, >=, <=)

let num3 = "10";
console.log(num1 == num3) // true    num and string are equal for it 
console.log(num1 === num3) // false    strict comparison 


// logical operator (&&, ||, !)

if(num1 > num2 && num2 > 5){   // true AND false = false
    console.log("AND")
}
if(num1 > num2 || num2 > 5){  // true AND false = true
    console.log("OR")
}

const notOP =  false;
if(!notOP){   // not notOp = ture
    console.log("NOT");
}



// bitwise operators (&, |, ~, ^, <<, >>, >>>)
console.log(5&1);  // 0101 and 0001 = 0001
console.log(5|1);  // 0101 or 0001 = 0101
console.log(~3);  // not 5 = -6
console.log(5^1);  // 0101 xor 0001 = 0100 
console.log(5<<1);  // 0101 left shift by 1 = 1010
console.log(5>>1);  // 0101 right shift by 1 = 0010
console.log(5>>>1);  // 0101 strict right shift 1 = 0010 



// Ternary operator ?
// expression ? trueEpxression : falseExpression

let value = (10 > 11) ? 11 : 10;
console.log(value);



// nullish coalescing operator (??)  new
//The nullish coalescing operator returns the second value (value2) if the first value (value2) is null or undefined.
const age = undefined ?? 28;
console.log(age);