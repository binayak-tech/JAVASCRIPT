// create a function to generate body mass index BMI of a person

function BMI(weight, height) {
  return weight / height ** 2;
}

// weight in kilogram height in meters
mass = 78;
height = 1.69;

const bmi = BMI(mass, height);
console.log(`Your BMI = ${bmi.toFixed(2)}`); // toFixed() method is used to round the number of decimal places
