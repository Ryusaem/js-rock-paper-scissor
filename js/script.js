let round = 0;
let playerScore = 0;
let computerScore = 0;
let playerChoice; // initialize in playRound();
let computerChoice; // initialize in playRound();
let choice = ["fire", "plant", "water"];

let roundCounter = document.querySelector("#roundCounter");
let roundResult = document.querySelector("#roundResult");
let gameState = document.querySelector("#gameState");
let computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
let playerScoreDisplay = document.querySelector("#playerScoreDisplay");
let computerScoreDisplay = document.querySelector("#computerScoreDisplay");

let enemy = document.querySelector("#enemy");
const pokemonButtons = document.querySelectorAll(
  ".choice-container .pokemon-btn"
);

function countRounds() {
  round += 1;
  roundCounter.innerText = `Round: ${round}`;
  return round;
}

function getComputerChoice() {
  let temp = choice[Math.floor(Math.random() * choice.length)];
  computerChoiceDisplay.textContent = temp;
  return temp;
}

function updateScoreAndState(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    playerScore++;

    playerScoreDisplay.textContent = `Player: ${playerScore}`;

    gameState.textContent = "You WIN";
  } else if (winner === "computer") {
    computerScore++;

    computerScoreDisplay.textContent = `Computer: ${computerScore}`;

    gameState.textContent = "You LOSE";
  } else {
    gameState.textContent = "Tie";
  }
  roundResult.textContent = createroundResult(
    winner,
    playerSelection,
    computerSelection
  );
}

function createroundResult(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    return `${playerSelection} beats ${computerSelection}`;
  } else if (winner === "computer") {
    return `${playerSelection} get beaten by ${computerSelection}`;
  } else {
    return `${playerSelection} ties with ${computerSelection}`;
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function playRound(playerSelection, computerSelection) {
  countRounds();

  if (playerSelection === computerSelection) {
    updateScoreAndState("tie", playerSelection, computerSelection);
    return "TIE";
  }

  if (
    (playerSelection === "fire" && computerSelection === "plant") ||
    (playerSelection === "plant" && computerSelection === "water") ||
    (playerSelection === "water" && computerSelection === "fire")
  ) {
    updateScoreAndState("player", playerSelection, computerSelection);
    return "You WIN";
  } else {
    updateScoreAndState("computer", playerSelection, computerSelection);
    return "You LOSE";
  }
}

function showPopup(message) {
  document.getElementById("messageContent").textContent = message;
  document.getElementById("popupMessage").style.display = "block";
}

function closePopup() {
  document.getElementById("popupMessage").style.display = "none";
}

function restartGame() {
  playerScore === 5 ? showPopup("You win!") : showPopup("You lose!");

  playerChoice = "";
  computerChoice = "";

  round = 0;
  playerScore = 0;
  computerScore = 0;

  roundCounter.innerText = `Round: ${round}`;
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  computerChoiceDisplay.textContent = "None";
  gameState.textContent = "Idle";
  roundResult.textContent = "";
}

// ------------------------------
// main logic
pokemonButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playerChoice = e.target.id || e.srcElement.id;
    computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    if (isGameOver()) {
      restartGame();
    }
  });
});
