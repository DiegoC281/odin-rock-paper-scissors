function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0) {
        return "rock"
    }
    else if (computerChoice == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        return playRound(playerSelection, getComputerChoice())
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock"
        }
        else {
            return "You Win! Rock beats Scissors"
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock"
        }
        else {
            return "You Lose! Scissors beat Paper"
        }
    }
    else {
        if (computerSelection == "paper") {
            return "You Win! Scissors beat Paper"
        }
        else {
            return "You Lose! Rock beats Scissors"
        }
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Please choose your play")
        let result = playRound(playerChoice, getComputerChoice())
        console.log(result)
        let winStatus = result.slice(4, 7)
        if (winStatus == "Los") {
            computerScore++;
        } else {
            playerScore++
        }
    }
    let winner;
    if (computerScore > playerScore) {
        winner = "Computer"
    } else {
        winner = "Player"
    }
    console.log(`The winner is ${winner}. The score is ${computerScore} - ${playerScore}`)
}
