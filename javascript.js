const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const btnContainers = document.querySelector("#btnContainers");
const messageBox = document.querySelector("#messageBox");
const currentScore = document.querySelector("#currentScore")
const winMessage = document.querySelector("#winMessage");

const playGame = function playGame(){
        let humanScore = 0;
        let computerScore = 0;

        const getComputerChoice = function getComputerChoice(){
                //a constant variable that randomly generates a number 0-1
                //if else statement 1/3 return rock, middle 1/3 return paper, upper 1/3 scissors
                const generateRandom = Math.random();
                if(generateRandom <= 0.33){
                        return "Rock";
                } else if(generateRandom <= 0.66){
                        return "Paper";
                } else{
                        return "Scissors";
                }
        }

        const playRound = function playRound(computerChoice, humanChoice){
                if(computerChoice == humanChoice){
                    messageBox.textContent = "Draw! Neither gets any points";
                    currentScore.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
                    console.log("Draw! Neither gets any points \n");
                }
                else if(computerChoice == "Paper" && humanChoice == "Rock"){
                    computerScore++;
                    messageBox.textContent = "You Lose! Paper beats Rock.";
                    currentScore.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
                    console.log("You Lose! Paper beats Rock. \n");
                    
                }
                else if(computerChoice == "Scissors" && humanChoice == "Paper"){
                    computerScore++;
                    messageBox.textContent = "You Lose! Scissors beats Paper.";
                    currentScore.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
                    console.log("You Lose! Scissors beats Paper \n");
                }
                else if(computerChoice == "Rock" && humanChoice == "Scissors"){
                    computerScore++;
                    messageBox.textContent = "You Lose! Rock beats Scissors";
                    currentScore.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
                    console.log("You Lose! Rock beats Scissors \n");
                    
                }
                else if(humanChoice == "Paper" && computerChoice == "Rock"){
                    humanScore++;
                    messageBox.textContent = "You Win! Paper beats Rock."; 
                    currentScore.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
                    console.log("You Win! Paper beats Rock. \n");
                    
                }
                else if(humanChoice == "Scissors" && computerChoice == "Paper"){
                    humanScore++;
                    messageBox.textContent = "You Win! Scissors beats Paper.";
                    currentScore.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
                    console.log("You Win! Scissors beats Paper. \n");
                    
                } 
                else if(humanChoice == "Rock" && computerChoice == "Scissors"){
                    humanScore++;
                    messageBox.textContent = "You Win! Rock beats Scissors.";
                    currentScore.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
                    console.log("You Win! Rock beats Scissors. \n");
                    
                } else{
                    computerScore++;
                    messageBox.textContent = "Disqualified!";
                    currentScore.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
                    console.log("Disqualified!")
                    
                }

                if(humanScore >= 5){
                        winMessage.textContent = `You Win! Your score is ${humanScore} and the Computer's score is ${computerScore}`
                        console.log(`----- You Win! Your score is ${humanScore} and the Computer's score is ${computerScore} -----`);
                }else if(computerScore >= 5){
                        winMessage.textContent = `You Lose! Your score is ${humanScore} and the Computer's score is ${computerScore}`
                        console.log(`----- You Lose! Your score is ${humanScore} and the Computer's score is ${computerScore} -----`);
                }
        }
        const humanInputListener = btnContainers.addEventListener("click", (event) => {
                const target = event.target;
                switch(target.id){
                        case "rockBtn":
                                playRound(getComputerChoice(), "Rock");
                                break;
                        case "paperBtn":
                                playRound(getComputerChoice(), "Paper");
                                break;
                        case "scissorsBtn":
                                playRound(getComputerChoice(), "Scissors");
                                break;
                }
        });

        
}

playGame();
