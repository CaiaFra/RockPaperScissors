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

console.log(computerPlay());

function playerSelection() {
    var selection = prompt("Choose between Rock, Paper or Scissors").toLowerCase();
    console.log(selection);
    return selection;
}

playerSelection();
