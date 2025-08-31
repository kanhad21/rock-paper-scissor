function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);

  if (random == 0) {
    return "Rock";
  } else if (random == 1) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function getHumanChoice() {
  const playerChoice = prompt("Enter Rock,Paper, or Scissor");
  return playerChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose, paper beats rock");
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win, paper beats rock");
    humanScore++;
  } else if (humanChoice == "scissor" && computerChoice == "rock") {
    console.log("You lose, rock beats scissor");
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissor") {
    console.log("You win, rock beats scissor");
    humanScore++;
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    console.log("You win, scissor beats paper");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissor") {
    console.log("You lose, scissor beats paper");
    computerScore++;
  } else console.log("It's a tie");
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(computerScore, humanScore);
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 It's a tie game!");
  }
}

playGame();
