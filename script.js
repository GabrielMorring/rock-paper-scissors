// get computer choice

function getComputerChoice () {
    const choiceNum = Math.random() * 100;
    
    if (choiceNum <= 33) return "rock";
    if (choiceNum <= 66) return "paper";
    return "scissors";
}

// get user choice 
function getUserChoice () {
    let choice;
   do {
    choice = prompt("Rock, Paper, or Scissors").toLowerCase();
   } while (choice !== "rock" && choice !== "paper" && choice !== "scissors") 
   
   return choice;
}


//play round


// play game
function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log(`It's a tie! \n Score: Player ${humanScore} Computer ${computerScore}`);
        return;
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        console.log(`Computer wins with paper! \n Score: Player ${humanScore} Computer ${computerScore}`);
        return;
    } 
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        console.log(`You Win! computer had scissors \n Score: Player ${humanScore} Computer ${computerScore}`);
        return;
    } 
    
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        console.log(`You Win! computer had rock \n Score: Player ${humanScore} Computer ${computerScore}`);
        return;
    } 
    if (humanChoice === "paper" && computerChoice === "paper") {
        console.log(`It's a tie! \n Score: Player ${humanScore} Computer ${computerScore}`);
        return;
    } 
    if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        console.log(`Computer wins with scissors! \n Score: Player ${humanScore} Computer ${computerScore}`);
        return;
    } 

    if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        console.log(`Computer wins with rock! \n Score: Player ${humanScore} Computer ${computerScore}`);
        return;
    } 
    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        console.log(`You Win! computer had paper \n Score: Player ${humanScore} Computer ${computerScore}`);
        return;
    } 
    if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log(`It's a tie! \n Score: Player ${humanScore} Computer ${computerScore}`);
        return;
    } 
}

    let userChoice;
    let computerChoice;
    
    for (let i = 0; i < 6; i++) {
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
    }
    
    if (humanScore === computerScore) {
        console.log("It's a tie      Boring");
        return;
    }

    let youWon = humanScore > computerScore;
    switch (youWon) {
        case true:
            console.log(`You Win!`);
            break;
        case false:
            console.log("Loser!!!!!!!!!!!!");
            break;
    }
    return;
    
    
}

playGame();