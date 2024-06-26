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

restaurant.orderDelivery({
  time: "22:30",
  starterIndex: 2,
  mainIndex: 2,
  address: "Via del Sole, 21",
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 0,
});

const arr = [2, 3, 4];

const [a, b] = arr;

let [first, second] = restaurant.categories;
[first, second] = [second, first];

console.log(first, second);

const [s, m] = restaurant.order(3, 2);
console.log(s, m);

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;
console.log(i, j, k);

const ex = [1, 2];
const [x = 1, y = 1, z = 0] = ex;
console.log(x, y, z);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let p = 111;
let q = 999;
const obj = { p: 22, q: 33 };
({ p, q } = obj);
console.log(p, q);

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

// spread operator----------
const arr2 = [1, 2, 3];
const arr3 = [4, 5, 6, ...arr2];
console.log(...arr2, ...arr3);
const newMenu = [...restaurant.mainMenu, "richeese"];
console.log(...newMenu);

const menus = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menus);

const str = "Anis";
const letters = [...str];
console.log(letters);

const ingridients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];
restaurant.orderPasta(...ingridients);
// object
const newResturant = { foundedIn: 2012, ...restaurant, founder: "Anis" };
console.log(newResturant);
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
restaurantCopy.name = "Takeout";
console.log(restaurant.name);
console.log(restaurantCopy.name);

console.log("-----Loop-----");

const foodMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const [index, item] of foodMenu.entries()) {
  console.log(`${index + 1}: ${item}`);
}
