

let randomNumber = Math.floor(Math.random() * 100 + 1);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let turn = 1;
let resetButton;

function checkGuess() {

  let userGuess = Number(guessField.value);

  if (turn == 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' - ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You guessed the number';
    lastResult.style.backgroundColor = 'green';

  } else if (turn === 10) {
    lastResult.textContent = 'GAME OVER!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong';
    lastResult.style.backgroundColor = 'red';

    if (userGuess < randomNumber) {
      lowOrHigh.textContent = 'Last guess was too low!';

    } else if (userGuess > randomNumber) {

      lowOrHigh.textContent = 'Last guess was too high!';
    }
  }

  turn += 1;
  guessField.value = '';
  guessField.focus();

}

function setGameOver(){
  guessField.disabled = 'true';
  guessSubmit.disabled = 'true';
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start a new Game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame);
  lowOrHigh.textContent = "The number was " + randomNumber;
}

function resetGame(){
  turn = 1;
  const resetParas = document.querySelectorAll('.resultParas');
  for (let i = 0; i < resetParas.length; i++){
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random()*100 +1);
}

guessSubmit.addEventListener('click', checkGuess);
