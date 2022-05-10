// Initializing the game
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock"
  } else if (randomNumber === 1) {
    return "paper"
  } else {
    return "scissors"
  }
}

function playRound(playerSelection, computerSelection) {  
  if (playerSelection === "rock" && computerSelection === "paper") 
		return "Computer Wins";

  if (playerSelection === "rock" && computerSelection === "scissors") 
		return "Player wins";

  if (playerSelection === "scissors" && computerSelection === "paper") 
		return "Player Wins";

  if (playerSelection === "paper" && computerSelection === "scissors") 
		return "Computer Wins";

  if (playerSelection === "paper" && computerSelection === "rock") 
		return "Player Wins";

  if (playerSelection === "scissors" && computerSelection === "rock") 
		return "Computer Wins";

  if (playerSelection === computerSelection) 
		return "Tie";
}

window.addEventListener('click', (e) => {
  let playerSelection = e.target.className;
  
  if (playerSelection !== "rock" && playerSelection !== 'paper' && playerSelection !== 'scissors') return;
  
  let computerSelection = computerPlay();

  let result = playRound(playerSelection, computerSelection);

  if (result === "Computer Wins") computerScore++;
  if (result === "Player Wins") playerScore++;

  const div = document.querySelector('.result');
  div.style.textAlign = "center";
  div.style.margin = "auto";

  if (playerScore === 5) result = "You won against the computer!";
  if (computerScore === 5) result = "The computer won against you!";
  div.textContent = result;
});