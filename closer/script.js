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
