function getRandomComputerSelection() {
  var choices = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
  

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    var winningCombinations = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };
  
    if (playerSelection === computerSelection) {
      return "tie";
    }
  
    if (winningCombinations[playerSelection] === computerSelection) {
      return "player";
    }
  
    return "computer";
  }
  
  function game() {
    var playerScore = 0;
    var computerScore = 0;
  
    for (var round = 1; round <= 5; round++) {
      var playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
      var computerSelection = getRandomComputerSelection();
      
      var result = playRound(playerSelection, computerSelection);
      
      if (result === "player") {
        playerScore++;
        console.log("You win! " + playerSelection + " beats " + computerSelection);
      } else if (result === "computer") {
        computerScore++;
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
      } else {
        console.log("It's a tie!");
      }
    }
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Start the game
  game();
