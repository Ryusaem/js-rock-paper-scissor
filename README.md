# rock_paper_scissor_odin_project
Rock paper scissor | Odin Project

WireFrame → https://wireframe.cc/PPRkyP

Live Demo → https://ryusaem.github.io/rock_paper_scissor_odin_project/

PseudoCode →

Initialize Game Variables:
- Create an array to store choices: Fire, Plant, Water.
- Set initial scores for player and computer to 0.

Function to Get Computer's Choice
- Randomly select between Rock, Paper, Scissors.
- Return the computer's choice.

Function to Play a Single Round
- Input: player's choice, computer's choice.
- Compare choices:
    If choices are the same, it's a tie.
      Implement rules:
        Fire beats Plant.
        Plant beats Water.
        Water beats Fire.
- Return the result of the round (win, lose, tie) and the choices.

Event Listener on click to player Choice
- Ensure player's input is either Fire, Plant, or Water.
- Case insensitive check.


Main Game Function
- Play the game for a set number of rounds (e.g., best of 5).
- In each round:
    Get player's choice (validate input).
    Get computer's choice.
    Play the round and show the result.
- Update scores based on the round result.
- After all rounds, declare the winner based on the score.
User Interface

Use console.log or alert for outputs.
Run the Game

Call the main game function to start the game.
