// import { addToCart, totlalPrice as price, qt } from "./shoppingCart.js";
import * as shoppingCart from "./shoppingCart.js";
// shoppingCart.addToCart("apple", 5);
// console.log(shoppingCart.qt);
// console.log("data fetching...");

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

// console.log("after fetch");
const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  //   console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

// const lastPost = getLastPost();
// console.log(lastPost);

const lastPost2 = await getLastPost();
console.log(lastPost2);
