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
    }
    else if((ComputerChoice === "rock" && userChoice === "paper") || (ComputerChoice === "scissors" && userChoice === "rock") || (ComputerChoice === "paper" && userChoice === "scissors")){
        console.log("User wins!");
    }
    else if(ComputerChoice === userChoice){
        console.log("It's a tie!")
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

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", start);

