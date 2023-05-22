// if, if else, if if (nested if), else if 

let age = 25;

// if else
if (age > 21){
    console.log("You are allowed");
}
else{
    console.log("You are not allowed");
}

let money = 1000;

// nested if
if(age > 21){
    if(money > 500){
        console.log("Place your order");
    }
}


// else if else
age = 19;

if(age > 21){
    console.log("You are allowed to the bar");
}
else if(age > 18){
    console.log("You are allowed to the pub");
}





// switch - case, break
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;  // break is used to exit from the block
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:  // when none of the case matches then default is execuated
    dayName = 'Invalid day';
}

console.log(dayName); // Tuesday





// // LOOPS

// 1. while loop
/*
 while (expression) {
    // statement
}
*/
console.log("while loop");
let val = 1;
while (val < 10) {
    console.log(val);
    val +=2;
}



// 2. do while loop 

/*
 do{
    // statement
}while (expression) 
*/
console.log("do-while loop");
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);


// for loop  , continue
/* 
for (initializer; condition; iterator) {
    // statements
}
*/

console.log("for loop");

for(let i = 1; i<=5; i++){
    if(i === 3){
        continue;  // skips the iteration when i = 3
    }
    console.log(5 * i)
}


// comma , operator

console.log('comma operator')
let x = 10;
let y = (x++, x + 1);

console.log(x, y);
// A comma operator takes two expressions and evaluates them from left to right, and returns the value of the right expression