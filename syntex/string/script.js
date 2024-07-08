const airline = "TAP Air Portugal";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = "aNis";
const passengerLower = passenger.toLowerCase();
const passengerRight =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

const loginEmail = "  8wJpY@example.com \n";
const normalize = loginEmail.trim().toLowerCase();
console.log(normalize);

const announce = "All passengers come to boarding door 23. Boarding door 23";
// console.log(announce.replaceAll("door", "gate"));
console.log(announce.replace(/door/g, "gate"));

const plane = "Airbus A320neo";
console.log(plane.includes("Air"));
console.log(plane.includes("air"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Air") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("yuou are not allowed on board");
  } else {
    console.log("you are allowed on board");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

console.log("a+vertical+b".split("+"));
console.log("MD Anis Mia".split(" "));

const [firstName, lastName] = "Anis Mia".split(" ");

const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalize = function (name) {
  const names = name.toLowerCase().split(" ");
  const nameUpper = [];
  for (n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameUpper.join(" "));
};
capitalize("anis mia");
capitalize("mohameD anis");

const message = "go to gate 23";
console.log(message.padStart(25, "-").padEnd(40, "-"));
console.log("anis".padStart(25, "-").padEnd(40, "-"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "X");
};

console.log(maskCreditCard(123456789));
console.log(maskCreditCard("1234567891234567"));

const message2 = "hello world";
console.log(message2.repeat(5));
