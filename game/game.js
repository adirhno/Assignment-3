/** @format */
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  Math.round(random);
  switch (random) {
    case 0:
      return "Rock";
      break;

    case 1:
      return "Paper";
      break;

    case 2:
      return "Scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  let option = 0;
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper") & (computerSelection == "rock")
  ) {
    option = 1;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (computerSelection == "rock" && playerSelection == "scissors")
  ) {
    option = 2;
  } else if (
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    option = 3;
  }

  switch (option) {
    case 1:
      if (playerSelection == "paper") {
        console.log("player won");
        player++;
      } else {
        console.log("computer won");
        computer++;
      }
      break;

    case 2:
      if (playerSelection == "rock") {
        console.log("player won");
        player++;
      } else {
        console.log("computer won");
        computer++;
      }
      break;

    case 3:
      if (playerSelection == "scissors") {
        console.log("player won");
        player++;
      } else {
        console.log("computer won");
        computer++;
      }
      break;

    default:
      console.log("its a draw");
      break;
  }
}

let computerSelection = "";
let playerSelection = "";
let computer = 0;
let player = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("enter your choose:").toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    console.log("Computer selection is " + computerSelection);
    console.log("Player selection is " + playerSelection);
    playRound(playerSelection, computerSelection);
  }

  if (player > computer) {
    console.log("player is the winner!");
  } else if (player == computer) {
    console.log("its a draw");
  } else {
    console.log("computer is the winner!");
  }
}
game();
