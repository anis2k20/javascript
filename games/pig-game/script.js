let playerOneScore = document.getElementById("score--0");
let playerTwoScore = document.getElementById("score--1");
let playerOneCurrent = document.getElementById("current--0");
let playerTwoCurrent = document.getElementById("current--1");
let playerOneBtn = document.querySelector(".btn--roll");
let playerTwoBtn = document.querySelector(".btn--hold");
let playerOneCurrentDice = document.querySelector("#current--0");
let playerTwoCurrentDice = document.querySelector("#current--1");
let playerOneDice = document.querySelector(".dice");
let playerTwoDice = document.querySelector(".dice");

playerOneBtn.addEventListener("click", function () {
  let randNumber = Math.trunc(Math.random() * 6) + 1;
  playerOneDice.src = `dice-${randNumber}.png`;
  let playerOneCurrentScore = 0;
  if (randNumber !== 1) {
    playerOneCurrentDice.textContent = randNumber;
  } else {
    playerOneCurrentDice.textContent = 0;
    playerOneCurrent.textContent = 0;
    playerOneBtn.disabled = true;
  }
});
