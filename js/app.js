function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    }
    else if (computerChoice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return { result: "tie", playerSelection: playerSelection, computerSelection: computerSelection };
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return { result: "lose", loser: playerSelection, winner: computerSelection };;
        }
        else {
            return { result: "win", winner: playerSelection, loser: computerSelection };;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return { result: "win", winner: playerSelection, loser: computerSelection };;
        }
        else {
            return { result: "lose", loser: playerSelection, winner: computerSelection };;
        }
    }
    else {
        if (computerSelection == "paper") {
            return { result: "win", winner: playerSelection, loser: computerSelection };;
        }
        else {
            return { result: "lose", loser: playerSelection, winner: computerSelection };;
        }
    }
}

const buttons = document.querySelectorAll("button.buttons");
const div = document.querySelector("#result");
const winner = document.querySelector("#winner");
let scoreboard = document.querySelector("#scoreboard");
let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let result = playRound(event.target.id, getComputerChoice())
        if (result.result != "tie") {
            div.textContent = `You ${result.result}, ${result.winner} beats ${result.loser}.`;
            result.result == "win" ? playerScore++ : computerScore++;
            scoreboard.textContent = `Player ${playerScore} - Computer ${computerScore}`;
        } else {
            div.textContent = "It's a tie, try again";
        }
        if (playerScore == 5) {
            winner.textContent = "You won!";
        } else if (computerScore == 5) {
            winner.textContent = "You lost!";
        }
    });

});
