var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var maxGuesses = 10;

var guessesLeft = maxGuesses;
var wins = 0;
var losses = 0;

var computerGuess;
getComputerGuess();

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
});

document.onkeyup = function userKey(event) {
  var userGuess = event.key;
  // back door
  if (userGuess === "\\") {
    console.log("Computer guess:", computerGuess);
  } else {
    document.getElementById("guessesMade").append(" " + userGuess);
    document.getElementById("guessesLeft").innerHTML = --guessesLeft;

    if (userGuess === computerGuess) {
      document.getElementById("wins").innerHTML = ++wins;
      resetGame();
    } else if (guessesLeft === 0) {
      document.getElementById("losses").innerHTML = ++losses;
      resetGame();
    }
  }
};

function getComputerGuess() {
  var number = Math.floor(Math.random() * letters.length);
  computerGuess = letters[number];
  // console.log("Computer guess:", computerGuess);
}

function resetGame() {
  guessesLeft = maxGuesses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("guessesMade").innerHTML = "";

  getComputerGuess();
}
