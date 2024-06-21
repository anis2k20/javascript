const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  orderDelivery: function ({
    time = "20:00",
    starterIndex = 1,
    mainIndex = 1,
    address,
  }) {
    console.log(`
        Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be deliverd to ${address} at ${time}
        `);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const [pizza, pasta, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, pasta, others);

restaurant.orderPizza("mashrom", "onion", "olives", "spinach");
restaurant.orderPizza("Garlic");

// objects
const { fri, ...weekdays } = restaurant.openingHours;
console.log(fri, weekdays);

// function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const odd = [1, 3, 5, 7, 9];
add(...odd);

// logical assignment operator

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner = rest1.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1, rest2);
