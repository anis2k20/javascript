const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

export const totlalPrice = 23;
const totalquantity = 20;
export { totalquantity as qt };
console.log(cart);
