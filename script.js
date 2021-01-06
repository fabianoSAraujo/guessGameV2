'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Restart the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayScore(score);
  // document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
// Start the game
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   When there is no input
  if (!guess) {
    displayMessage('No number!');
    // document.querySelector('.message').textContent = 'No number!';
    // When play Wins
  } else if (secretNumber === guess) {
    displayMessage('Correct Number!');
    // document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // When guess is diferent than right
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High!' : 'Too Low!';
      score--;
      displayScore(score);
      // document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You loose!');
      // document.querySelector('.message').textContent = 'You loose!';
      displayScore(0);
      // document.querySelector('.score').textContent = 0;
    }
    // When guess is too high
    // } else if (secretNumber < guess) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You loose!';
    //     ocument.querySelector('.score').textContent = 0;
    //   }
    //   // When guess is too low
    // } else if (secretNumber > guess) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You loose!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});
