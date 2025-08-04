function playGame(){

function getUserChoice(){
    let Uchoice = prompt("Enter rock, paper or scissors!").toLowerCase();
    return Uchoice;
}

function getComputerChoice(){
    let choice
    let number = Math.floor(Math.random() * 3);
    if(number === 0){
        choice = "rock";
    }
    else if(number === 1){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }
    return choice;
}

let ComputerChoice = getComputerChoice();
let userChoice = getUserChoice();

console.log(ComputerChoice);
console.log(userChoice);

function game(){
    
    if((ComputerChoice === "rock" && userChoice === "scissors") || (ComputerChoice === "scissors" && userChoice === "paper") || (ComputerChoice === "paper" && userChoice === "rock")){
        console.log("Computer wins!");
        computerScore++;
        document.getElementById("computerScore").innerHTML =computerScore;
    }
    else if((ComputerChoice === "rock" && userChoice === "paper") || (ComputerChoice === "scissors" && userChoice === "rock") || (ComputerChoice === "paper" && userChoice === "scissors")){
        console.log("User wins!");
        userScore++;
        document.getElementById("playerScore").innerHTML = userScore;
    }
    else if(ComputerChoice === userChoice){
        console.log("It's a tie!")
        computerScore++;
        userScore++;
        document.getElementById("playerScore").innerHTML = userScore;
        document.getElementById("computerScore").innerHTML =computerScore;
    }
    
}


game();
}

function start(){
const rounds = document.getElementById("rounds");
const roundsNum = parseInt(rounds.value);
for(let i=0; i<roundsNum; i++){
    playGame();
}
}

let userScore = 0;
let computerScore = 0;

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", start);

