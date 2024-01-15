let round = 0;
let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

let rounds = document.querySelector("#rounds");
let choice = ["fire", "plant", "water"];
let sentence = document.querySelector("#sentence");
let state = document.querySelector("#state");

let enemy = document.querySelector("#enemy");
const pokemonButtons = document.querySelectorAll(".pokemon");
const computer_choice = document.querySelector("#computer_choice");

function countRounds() {
  round += 1;
  rounds.innerText = `Round: ${round}`;
  return round;
}

function getComputerChoice() {
  let temp = choice[Math.floor(Math.random() * choice.length)];
  computer_choice.textContent = temp;
  return temp;
}

function updateScoreAndState(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    playerScore++;

    document.querySelector(
      "#playerScore"
    ).textContent = `Player: ${playerScore}`;

    state.textContent = "You WIN";
  } else if (winner === "computer") {
    computerScore++;

    document.querySelector(
      "#computerScore"
    ).textContent = `Computer: ${computerScore}`;

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

function restartGame() {
  playerChoice = "";
  computerChoice = "";

  round = 0;
  playerScore = 0;
  computerScore = 0;

  rounds.innerText = `Round: ${round}`;
  document.querySelector("#playerScore").textContent = `Player: ${playerScore}`;
  document.querySelector(
    "#computerScore"
  ).textContent = `Computer: ${computerScore}`;
  computer_choice.textContent = "";
  state.textContent = "";
  sentence.textContent = "";

  alert("The game is going to restart.");
}

pokemonButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (isGameOver()) {
      restartGame();
    }

    playerChoice = e.target.id || e.srcElement.id;
    computerChoice = getComputerChoice();

    console.log(`playerChoice: ${playerChoice}`);
    console.log(`computerChoice: ${computerChoice}`);

    playRound(playerChoice, computerChoice);

    if (isGameOver()) {
      restartGame();
    }
  });
});
