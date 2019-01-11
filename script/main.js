

// Initial variables

let randomNumber = Math.floor(Math.random() * 100 + 1);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let turn = 1;
let maxTurns = selectLevel();
let resetButton;
let homeLink;


// Select the amount of turns according to the level

function selectLevel(){

  const level = document.querySelector('h1').textContent;

  if (level === 'EASY'){
    return 10;
  }

  else if (level === 'MEDIUM'){
    return 7;
  }

  else{
    return 5;
  }

}



let availablesTurns = selectLevel();

let indicator = document.querySelector('.availablesTurns');
indicator.textContent = 'Availables Turns: ' + availablesTurns;
guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {

  let userGuess = Number(guessField.value);

  if (turn == 1) {
    guesses.textContent = 'Previous guesses: ' ;

  }
  availablesTurns -= 1;
  guesses.textContent += userGuess + ' | ';
  indicator.textContent = 'Availables Turns: ' + availablesTurns;



  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You guessed the number';
    lastResult.style.backgroundColor = 'green';
    setGameOver();

  } else if (turn === maxTurns) {
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
  resetButton.style.color = 'black';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame);
  lowOrHigh.textContent = "The number was " + randomNumber;
  lowOrHigh.style.backgroundColor = 'green';
  homeLink = document.createElement('a');
  homeLink.textContent = 'Go to home';
  homeLink.style.color = 'white';
  homeLink.setAttribute('href','index.html');
  document.body.appendChild(homeLink);



}

function resetGame(){
  turn = 1;
  availablesTurns = selectLevel();
  indicator.textContent = 'Available Turns: ' + availablesTurns;
  const resetParas = document.querySelectorAll('.resultParas');
  for (let i = 0; i < resetParas.length; i++){
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  homeLink.parentNode.removeChild(homeLink);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';



  randomNumber = Math.floor(Math.random()*100 +1);



}
