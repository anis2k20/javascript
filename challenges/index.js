const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = game.players[0];

const allPlayers = [...game.players[0], ...game.players[1]];

const players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];

const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

team1 > team2 && console.log("Team 1 is more likely to win");
team1 < team2 && console.log("Team 2 is more likely to win");

// challenge 2
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}
let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
let avg = sum / Object.values(game.odds).length;
console.log(avg);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory of ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
console.log("-----------challenge 3-------------");
//  challenge 3
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
const removeUnfair = gameEvents.delete(64);
console.log(removeUnfair);
console.log(gameEvents);
// console.log(events);
const time = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half}] ${min}: ${event}`);
}

// challenge 4
document.body.append(document.createElement("textarea"));
btn = document.createElement("button");
btn.innerText = "Convert";
document.body.append(btn);

btn.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const r of rows) {
    const [first, second] = r.toLocaleLowerCase().trim().split("_");
    console.log(first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
  }
});
