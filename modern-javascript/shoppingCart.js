const cart = [];
console.log("fetching usre...");

await fetch("https://jsonplaceholder.typicode.com/users");

console.log("user fetched...");

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

export const totlalPrice = 23;
const totalquantity = 20;
export { totalquantity as qt };
console.log(cart);
