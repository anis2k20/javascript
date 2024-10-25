// import { addToCart, totlalPrice as price, qt } from "./shoppingCart.js";
// import * as shoppingCart from "./shoppingCart.js";
// shoppingCart.addToCart("apple", 5);
// console.log(shoppingCart.qt);
// console.log("data fetching...");

// import { addToCart } from "./shoppingCart";

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

// console.log("after fetch");
// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   //   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const shoppingCart = (function () {
  const cart = [];
  const location = "New York";
  const totalPrice = 23;
  const totalQuantity = 20;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };
  return {
    addToCart,
    location,
  };
})();

shoppingCart.addToCart("apple", 50);
console.log(shoppingCart.location);
console.log(shoppingCart);
console.log(shoppingCart.totalPrice); //undefined
