function getRandomComputerSelection(){
    var choices=["rock","paper","scissors"];
    var randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    var winningCombinations = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };
    if(playerSelection === computerSelection){
        return"tie";
    }
    if(winningCombinations[playerSelection] === computerSelection){
        return"player";
    }
    return"computer";
}

var playerScore = 0;
var computerScore = 0;
var scoreDisplay = document.querySelector("#score");
var resultsDisplay = document.querySelector("#results");

function updateScore() {
  scoreDisplay.textContent = "Player: " + playerScore + " | Computer: " + computerScore;
}

function updateResults(message) {
  resultsDisplay.textContent = message;
}

function endGame() {
  if (playerScore > computerScore) {
    updateResults("You win the game!");
  } else if (playerScore < computerScore) {
    updateResults("You lose the game!");
  } else {
    updateResults("It's a tie game!");
  }
  
  // Disable buttons after the game ends
  document.querySelector("#rock").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissors").disabled = true;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  resultsDisplay.textContent = "";
  
  // Enable buttons for a new game
  document.querySelector("#rock").disabled = false;
  document.querySelector("#paper").disabled = false;
  document.querySelector("#scissors").disabled = false;
}

function handleClick(playerSelection) {
  var computerSelection = getRandomComputerSelection();
  var result = playRound(playerSelection, computerSelection);

  if (result === "player") {
    playerScore++;
    updateResults("You win! " + playerSelection + " beats " + computerSelection);
  } else if (result === "computer") {
    computerScore++;
    updateResults("You lose! " + computerSelection + " beats " + playerSelection);
  } else {
    updateResults("It's a tie!");
  }

  updateScore();

  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}

// Add event listeners to buttons
document.querySelector("#rock").addEventListener("click", function() {
  handleClick("rock");
});

document.querySelector("#paper").addEventListener("click", function() {
  handleClick("paper");
});

document.querySelector("#scissors").addEventListener("click", function() {
  handleClick("scissors");
});

// Reset the game
resetGame();