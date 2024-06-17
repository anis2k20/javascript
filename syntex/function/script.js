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