/* Calculate tip when amount is in between 50 and 300 then its 15% else its 20% */

function calculateTip(amount) {
  const tip = amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.2;
  return tip;
}

const billAmount = 430;
const tip = calculateTip(billAmount);

console.log(`The tip = ${tip} and 
The total bill = ${billAmount + tip}`);
