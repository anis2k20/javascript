let orderSet = new Set([
  "Anis",
  "Anis",
  "Anis",
  "Shakil",
  "Shakil",
  "Akul",
  "Akul",
]);

console.log(orderSet.size);
orderSet.add("Sibber");
for (const x of orderSet) {
  console.log(x);
}
console.log(orderSet);
orderSet.delete("Akul");
console.log(orderSet);
orderSet.clear();
console.log(orderSet);
