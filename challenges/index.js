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
