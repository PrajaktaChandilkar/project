const userInput = document.querySelector('#guessfield')
const submit = document.querySelector('#subt')

const startOver = document.querySelector('.result')
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')

const maxCount = 10
let numberOfGuesss = 0
let guessedArray =[]
let randomNumber=parseInt(Math.random()*100+1)
console.log(randomNumber)

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
      console.log(guess);
    validation(guess);
  });
  
function validation(guess){
    guessedArray.push(guess)

    if(numberOfGuesss > maxCount -1){
        displayMsg('Game Over')
        endGame()
        //gameover
    }else{
        displayGuesss(guess)
        checkGuesses(guess)
    }
}

function displayGuesss(guess){
    guessSlot.innerHTML += `${guess} `
    userInput.value=""
    numberOfGuesss++
    let remainingguasses = maxCount - numberOfGuesss
    if(remainingguasses <= 0){
        remainingguasses=0
    } 
    remaining.innerHTML = remainingguasses
}

function checkGuesses(guess){
    if(randomNumber === guess){
        displayMsg('You guessed correct number')
        endGame()
    }else if(guess > randomNumber){
        displayMsg('Too large!! Try smaller Number')
    }else{
        displayMsg('Too small!! Try larger Number' )
    }
}

function displayMsg(message){
    // lowOrHi.innerHTML = `${message}`
    lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

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
