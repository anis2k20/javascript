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

function checkIn(flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 123456789) {
    alert("Checked in");
  } else {
    alert("Wrong passport");
  }
}

checkIn(flight, anis);
console.log(flight);
console.log(anis);

const createNewpassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

createNewpassport(anis);
checkIn(flight, anis);
