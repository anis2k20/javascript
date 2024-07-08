const rest = new Map();

rest.set("name", "Classico Italiano");
rest.set("location", "Via Angelo Tavanti 23, Firenze, Italy");
rest.set(1, "Firenze");

console.log(rest);

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("Open", 11)
  .set("Close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

const time = 8;
console.log(rest.get(time > rest.get("Open") && time < rest.get("Close")));

console.log(rest.has("name"));
console.log(rest.size);
console.log(rest.delete(2));
console.log(rest);

const m = new Map();
m.set("key", "value").set("key2", "value2");
const arr = [1, 2];
m.set(arr, "test");
console.log(m.get(arr));

const questions = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

console.log(questions.get("question"));

for (const [key, value] of questions) {
  if (typeof key === "number") {
    console.log(`${key}: ${value}`);
  }
}
const answer = Number(prompt("Your answer"));

// if (questions.get(answer === questions.get("correct"))) {
//   console.log(questions.get(true));
// } else {
//   console.log(questions.get(false));
// }

console.log(...questions);
console.log(questions.entries());
console.log(questions.keys());
console.log(questions.values());
