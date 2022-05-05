function computerPlay() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playerPlay() {
    return prompt("Choose between Rock, Paper or Scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {  
    if (playerSelection === "rock" && computerSelection === "paper") return "Computer Wins";
    if (playerSelection === "rock" && computerSelection === "scissors") return "Player wins";
    if (playerSelection === "scissors" && computerSelection === "paper") return "Player Wins";
    if (playerSelection === "paper" && computerSelection === "scissors") return "Computer Wins";
    if (playerSelection === "paper" && computerSelection === "rock") return "Player Wins";
    if (playerSelection === "scissors" && computerSelection === "rock") return "Computer Wins";
    if (playerSelection === computerSelection) return "Tie";
}


function game() {
    for (let i = 0; i < 5; i++) {
        var computerSelection = computerPlay();
        var playerSelection = playerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();
