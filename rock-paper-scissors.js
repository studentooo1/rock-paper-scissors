function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let pick = choices[randomIndex];
    return pick;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("It's a tie!");
        return("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose, Paper beats Rock");
        return("You Lose, Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win, Rock beats Scissors");
        return("You win, Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose, Rock beats Scissors");
        return("You Lose, Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win, Scissors beats Paper");
        return("You win, Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It's a tie!");
        return("It's a tie!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win, Paper beats Rock");
        return("You win, Paper beats Rock"); 
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose, Scissors beats Paper");
        return("You Lose, Scissors beats Paper");
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("It's a tie!");
        return("It's a tie!");
    } else {
        console.log("Sorry, invalid Input!");
        return("Sorry, invalid Input!");
    }
}


function game(){
    let roundOver = false;
    let rounds = 5;
    let score = 0;
    while (rounds > 0) {
        let playerSelection = prompt("enter pick").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result[4] === "w") {
            score++;
        }

        rounds--;
    }  
    console.log("you're score is " + score + "/5");
}

game()


 