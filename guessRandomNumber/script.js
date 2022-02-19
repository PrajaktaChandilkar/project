// console.log("h");
const userInput = document.querySelector("#guessfield");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");

// const userInput = document.querySelector('#')

//to restart the game we call awhole div
const startOver = document.querySelector(".result");
const lowOrHi = document.querySelector(".lowOrHi ");

let previousGuessArray = [];
let guessCount = 0;
let maxCount = 10;

let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const guess = parseInt(userInput.value);
  //   console.log(guess);
  validation(guess);
});

function validation(guess) {
  previousGuessArray.push(guess);
  // console.log('count', guessCount)
  if (guessCount > maxCount - 1) {
    //game over
    // guessCount=0
    displayGuesss(guess);
    displayMsg(`Game Over!! Number was ${randomNumber}`);
    endGame();
  } else {
    displayGuesss(guess);
    checkGuesses(guess);
  }
}

function displayGuesss(guess) {
  guessSlot.innerHTML += `${guess} `;
  //clear each time guess block
  userInput.value = "";
  guessCount++;
  let remainingguasses = maxCount - guessCount;
  if (remainingguasses <= 0) {
    remainingguasses = 0;
  }
  remaining.innerHTML = remainingguasses;
}

function checkGuesses(guess) {
  if (guess === randomNumber) {
    displayMsg("You guessed correctly");
    endGame();
  } else if (guess < randomNumber) {
    displayMsg("Too low! Try a higher number");
  } else {
    displayMsg("Too High! Try smaller Number");
  }
}

function displayMsg(message) {
  lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

//append button for new game option
const pEl = document.createElement("p");
function endGame() {
  userInput.value = "";
  pEl.classList.add("button");
  pEl.style.cursor = "pointer";
  pEl.innerHTML = `<h1 onclick="newGame()" id="newGame">Start New Game</h1>`;

  startOver.append(pEl);

  userInput.disabled = true;
  submit.disabled = true;
}

function newGame() {
  location.reload();
}
