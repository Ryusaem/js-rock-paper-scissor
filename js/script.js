let round = 0;
let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let choice = ["fire", "plant", "water"];

let rounds = document.querySelector("#rounds");
let sentence = document.querySelector("#sentence");
let state = document.querySelector("#state");
let computer_score = document.querySelector("#computerScore");
let player_score = document.querySelector("#playerScore");

let enemy = document.querySelector("#enemy");
const pokemonButtons = document.querySelectorAll(".pokemon");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");

function countRounds() {
  round += 1;
  rounds.innerText = `Round: ${round}`;
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

    player_score.textContent = `Player: ${playerScore}`;

    state.textContent = "You WIN";
  } else if (winner === "computer") {
    computerScore++;

    computer_score.textContent = `Computer: ${computerScore}`;

    state.textContent = "You LOSE";
  } else {
    state.textContent = "Tie";
  }
  sentence.textContent = createSentence(
    winner,
    playerSelection,
    computerSelection
  );
}

function createSentence(winner, playerSelection, computerSelection) {
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

  rounds.innerText = `Round: ${round}`;
  player_score.textContent = `Player: ${playerScore}`;
  computer_score.textContent = `Computer: ${computerScore}`;
  computerChoiceDisplay.textContent = "None";
  state.textContent = "Idle";
  sentence.textContent = "";
}

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
