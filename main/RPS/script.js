const winSpan = document.getElementById('win-count');
const lossSpan = document.getElementById('loss-count');
const tieSpan = document.getElementById('tie-count');
const actionText = document.getElementById('action-text');
const resetBtn = document.getElementById('reset-btn');

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

document.querySelectorAll('.choice').forEach(img => {
  img.addEventListener('click', () => {
    const userChoice = img.id;
    const random = Math.random();

    let computerChoice = '';
    if (random < 1 / 3) computerChoice = 'rock';
    else if (random < 2 / 3) computerChoice = 'paper';
    else computerChoice = 'scissors';

    playGame(userChoice, computerChoice);
  });
});

function playGame(user, computer) {
  let result = '';

  if (user === computer) {
    result = "It's a Tie!";
    tieCount++;
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    result = "You Win!";
    winCount++;
  } else {
    result = "You Lose!";
    lossCount++;
  }

  actionText.textContent = `You chose ${user}, Computer chose ${computer}. ${result}`;
  updateScore();
}

function updateScore() {
  winSpan.textContent = winCount;
  lossSpan.textContent = lossCount;
  tieSpan.textContent = tieCount;
}

resetBtn.addEventListener('click', () => {
  winCount = 0;
  lossCount = 0;
  tieCount = 0;
  updateScore();
  actionText.textContent = "Make your move!";
});
