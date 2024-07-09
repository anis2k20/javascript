function createBooking(passenger = 1, flightNum, price = passenger * 199) {
  const bookings = [];
  const booking = {
    passenger,
    flightNum,
    price,
  };

  bookings.push(booking);
  console.log(bookings);
}

createBooking("anis", "LH123", 200);
createBooking(2, "B10");
createBooking(undefined, "B10", 200);

console.log("-------------Passing arguments-------------");

const flight = "LH234";
const anis = {
  name: "Anis",
  passport: 123456789,
};

// function checkIn(flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 123456789) {
//     alert("Checked in");
//   } else {
//     alert("Wrong passport");
//   }
// }

// checkIn(flight, anis);
// console.log(flight);
// console.log(anis);

// const createNewpassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// createNewpassport(anis);
// checkIn(flight, anis);

// function retruning a function

// function greet(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// }

// const greeter = greet("Hey");
// greeter("Anis");
// greeter("Ahmed");

// greet("hello")("world");

// convert it arrow functions
const greetings = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeter = greetings("hello");
greeter("world");

greetings("hello")("Anis");

// call and apply

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
    });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// lufthansa.book(239, "Anis");
// console.log(lufthansa);

const book = lufthansa.book;
book.call(eurowings, 23, "Anis");
console.log(eurowings);
const flightData = [23, "Anis"];

book.call(eurowings, ...flightData);
console.log(eurowings);
// immediate invoked a function
(function hello() {
  console.log(`hello world`);
})();

(() => console.log(`hello world 2`))();

let f;
function g() {
  const a = 20;
  f = function () {
    console.log(a * 2);
  };
}

g();
f();

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", () => {
    header.style.color = "blue";
  });
})();
