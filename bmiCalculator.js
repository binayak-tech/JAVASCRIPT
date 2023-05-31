// create a function to generate body mass index BMI of a person

function BMI(weight, height) {
  return weight / height ** 2;
}

// weight in kilogram height in meters
mass = 78;
height = 1.69;

// const bmi = BMI(mass, height);
// console.log(`Your BMI = ${bmi.toFixed(2)}`); // toFixed() method is used to round the number of decimal places

// USING OBJECTS

const Jhon = {
  name: "Jhon Smith",
  mass: 78,
  height: 1.69,
  calcBMI: () => {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const Mark = {
  name: "Mark Smith",
  mass: 92,
  height: 1.95,
  calcBMI: () => {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

Jhon.calcBMI();
Mark.calcBMI();

if (Jhon.bmi > Mark.bmi) {
  console.log("Jhon has higher BMI than Mark");
} else {
  console.log("Mark has higher BMI ");
}
