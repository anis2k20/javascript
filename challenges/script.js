let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

let markHigherBMI = markBMI > johnBMI;

// challenge 2

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI is (${johnBMI}) is higher than Mark's (${markBMI})`);
}
// end challenge 2
console.log(markBMI, johnBMI, markHigherBMI);

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg,and height in meter).
// GOOD LUCK
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;
const dolphinsScore2 = (97 + 112 + 101) / 3;
const koalasScore2 = (109 + 95 + 123) / 3;
const dolphinsScore3 = (97 + 112 + 101) / 3;
const koalasScore3 = (109 + 95 + 106) / 3;
console.log(
  dolphinsScore,
  koalasScore,
  dolphinsScore2,
  koalasScore2,
  dolphinsScore3,
  koalasScore3
);

const dolphinsAverage = (dolphinsScore + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore + koalasScore2 + koalasScore3) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins win the trophy");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Koalas win the trophy");
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("match draw");
} else {
  console.log("No team wins the trophy");
}

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);

// ------------function----------------
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins === avgKoalas) {
    console.log(`match draw (${avgDolphins} vs. ${avgKoalas})`);
  }
}

const calcAverage = (average) => {
  return (average[0] + average[1] + average[2]) / 3;
};

const dAverage = calcAverage([44, 23, 71]);
const kAverage = calcAverage([65, 54, 49]);

console.log("average", dAverage, kAverage);
console.log(checkWinner(dAverage, kAverage));

// ----------------object----------------

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall

const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  bmi: function calcBMI() {
    return this.mass / (this.height * this.height);
  },
};

const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  bmi: function calcBMI() {
    return this.mass / (this.height * this.height);
  },
};
if (markMiller.bmi() > johnSmith.bmi()) {
  console.log(
    `${markMiller.fullName}'s BMI (${markMiller.bmi()}) is higher than ${
      johnSmith.fullName
    }'s (${johnSmith.bmi()})`
  );
} else if (johnSmith.bmi() > markMiller.bmi()) {
  console.log(
    `${johnSmith.fullName}'s BMI (${johnSmith.bmi()}) is higher than ${
      markMiller.fullName
    }'s (${markMiller.bmi()})`
  );
} else {
  console.log(
    `${johnSmith.fullName}'s BMI (${johnSmith.bmi()}) is equal to ${
      markMiller.fullName
    }'s (${markMiller.bmi()})`
  );
}

// // Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  console.log(bills, tips, totals);
};

console.log("-------array challenge 2 -------");
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

function calcAverageHumanAge(ages) {
  const humanAge = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const adultDogs = humanAge.filter((age) => age >= 18);
  console.log(adultDogs);
  const avgHumnaAgeOfAdultDogs = adultDogs.reduce((acc, age) => {
    return acc + age;
  }, 0);
  console.log((avgHumnaAgeOfAdultDogs / adultDogs.length).toFixed(2));
}

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
const calcAverageHumanAges = (ages) => {
  ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age) => {
      return acc + age;
    }, 0);
};

const avg = calcAverageHumanAges([5, 2, 4, 1, 15, 8, 3]);

console.log(avg);

// chanlleng 4 on array
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1. Loop over the array containing dog objects, and for each dog, calculate
// the recommended food portion. Save the result to a variable
// (let portion = ...).
dogs.forEach((dog) => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);
const sarahDog = dogs.findIndex((dog) => dog.owners.includes("Sarah"));
dogs.map((dog) => {
  if (dog.owners.includes("Sarah") && dog.curFood > dog.recFood) {
    console.log(`Sarah's dog is eating too much`);
  }
});

const ownerEatTooMuch = dogs.filter((dog) => {
  if (dog.curFood > dog.recFood) {
    return dog.owners;
    flatMap((dog) => dog.owners);
  }
});

console.log(ownerEatTooMuch);
