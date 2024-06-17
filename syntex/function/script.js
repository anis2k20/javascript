function logger() {
    console.log('My name is Jonas');
}

logger();

function fruiteProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruiteProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruiteProcessor(2, 4);
console.log(appleOrangeJuice)

// function declaration
function ageCal(birthYear) {
    return 2024 - birthYear;
}

// function expression
const ageCal2 = function (birthYear) {
    return 2024 - birthYear
}

const ageAnis = ageCal(2000);

console.log(ageAnis)
console.log(ageCal2(2000))

// arrow function
const ageCal3 = (birthYear) => 2024 - birthYear;

console.log(ageCal3(2000))

const retirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(retirement(2000, 'Anis'))

// calling a function from another function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3))