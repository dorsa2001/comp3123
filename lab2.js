//exercise 1
const greeter = (myArray, counter) => {
  const greetText = "Hello ";

  for (const item of myArray) {
    console.log(`${greetText}${item}`);
  }
};

greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);

//exercise 2
const capitalize = ([part1, ...part2]) => {
  return part1.toUpperCase() + part2.join("").toLowerCase();
};

console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

//exercise 3
const colors = ["red", "green", "blue"];
const capitalizedColors = colors.map((color) => capitalize(color));
console.log(capitalizedColors); // Output: ['Red', 'Green', 'Blue', 'Yellow']

//exercise4
const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = (value) => {
  return value < 20;
};
const result = values.filter(filterLessThan20);
console.log(result);

//exercise 5
const array = [1, 2, 3, 4];
const calculateSum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
const calculateProduct = array.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);

console.log(`Sum: ${calculateSum}`);
console.log(`Product: ${calculateProduct}`);

//exercise 6

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `Model :${this.model} Engine ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  getBalance() {
    return `${this.details()} has a balance of $${this.balance}.`;
  }
}

const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());

const sedan = new Sedan("Volvo SD", 2018, 30000.0);
console.log(sedan.getBalance());
