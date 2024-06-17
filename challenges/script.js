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
console.log(dolphinsScore, koalasScore, dolphinsScore2, koalasScore2, dolphinsScore3, koalasScore3);

const dolphinsAverage = (dolphinsScore + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore + koalasScore2 + koalasScore3) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log('Dolphins win the trophy');
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log('Koalas win the trophy');
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log('match draw');
} else {
    console.log('No team wins the trophy');
}