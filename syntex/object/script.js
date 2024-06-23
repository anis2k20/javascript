const obj = {
  name: "Anis",
  age: 23,
  friends: ["Ahmed", "Mohamed", "Sayed"],
  square: function (x) {
    this.age = this.age * x;
    return this.age;
  },
  ageCal: function (birthYear) {
    this.age = 2024 - birthYear;
    return this.age;
  },
};

console.log(`Anis is a ${obj.ageCal(2000)} years old`);

// object literals-------
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant.order(2, 0));

console.log(restaurant);
