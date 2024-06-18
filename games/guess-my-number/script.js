// DOM selectors
let againBtn = document.querySelector(".again");
let checkBtn = document.querySelector(".check");
let guess = document.querySelector(".guess");
let secretNumber = document.querySelector(".number");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let body = document.querySelector("body");

// secret number generator
let numberToGuess = Math.floor(Math.random() * 20) + 1;

// variables
let scoreValue = 20;
let highscoreValue = 0;
let guessValue = 0;
let win = false;
let lose = false;

// event listeners
checkBtn.addEventListener("click", function () {
  guessValue = Number(guess.value); // convert string to number

  if (guessValue === numberToGuess) {
    win = true;
    body.style.backgroundColor = "#60b347";
    message.textContent = "Correct Number!";
    secretNumber.textContent = numberToGuess;
    checkBtn.disabled = true;
    guess.disabled = true;

    if (scoreValue > highscoreValue) {
      highscoreValue = scoreValue;
      highscore.textContent = highscoreValue;
    }
  } else if (guessValue < numberToGuess) {
    message.textContent = "Too low!";
    scoreValue--;
    score.textContent = scoreValue;
  } else if (guessValue > numberToGuess) {
    message.textContent = "Too high!";
    scoreValue--;
    score.textContent = scoreValue;
  }
});

againBtn.addEventListener("click", function () {
  win = false;
  lose = false;
  guessValue = 0;
  scoreValue = 20;
  body.style.backgroundColor = "#222";
  message.textContent = "Start guessing...";
  secretNumber.textContent = "?";
  checkBtn.disabled = false;
  guess.disabled = false;
  guess.value = "";
  score.textContent = scoreValue;
  numberToGuess = Math.floor(Math.random() * 20) + 1;
  console.log(numberToGuess);
});
