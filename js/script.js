let round = document.querySelector("#round");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let choice = ["fire", "plant", "water"];
let sentence = document.querySelector("#sentence");
let state = document.querySelector("#state");

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    round.textContent++;
    state.textContent = "Tie";
    sentence.textContent = `${playerSelection} ties with ${computerSelection}`;
    return "Tie";
  }

  if (
    (playerSelection === "fire" && computerSelection === "plant") ||
    (playerSelection === "plant" && computerSelection === "water") ||
    (playerSelection === "water" && computerSelection === "fire")
  ) {
    playerScore.textContent++;
    round.textContent++;
    state.textContent = "You WIN";
    sentence.textContent = `${playerSelection} beats ${computerSelection}`;
    return "You WIN";
  } else {
    computerScore.textContent++;
    round.textContent++;
    state.textContent = "You LOSE";
    sentence.textContent = `${playerSelection} get beaten by ${playerSelection}`;
    return "You LOSE";
  }
}

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

let playerChoice = "";
let computerChoice = getComputerChoice();

let fire = document.querySelector("#fire");
let plant = document.querySelector("#plant");
let water = document.querySelector("#water");
let enemy = document.querySelector("#enemy");

fire.addEventListener("click", (e) => {
  playerChoice = e.target.id;
  console.log(`playerChoice: ${playerChoice}`);
  console.log(`computerChoice: ${computerChoice}`);
  console.log(playRound(playerChoice, computerChoice));
});

plant.addEventListener("click", (e) => {
  playerChoice = e.target.id;
  console.log(`playerChoice: ${playerChoice}`);
  console.log(`computerChoice: ${computerChoice}`);
  console.log(playRound(playerChoice, computerChoice));
});

water.addEventListener("click", (e) => {
  playerChoice = e.target.id;
  console.log(`playerChoice: ${playerChoice}`);
  console.log(`computerChoice: ${computerChoice}`);
  console.log(playRound(playerChoice, computerChoice));
});

enemy.addEventListener("click", () => console.log("enemy"));
