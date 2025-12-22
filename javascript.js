let HUMANSCORE = 0;
let COMPUTERSCORE = 0;


function getComputerChoice(){
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

function getHumanChoice(){
        // a constant variable that prompts the user 1 for rock, 2 for paper, 3 for scissors.
        // if else statement 1 returns rock, 2 return paper and 3 returns scissors
        const userChoice = prompt("Choice:\n 1 : Rock, \n 2 : Paper, \n 3 : Scissors", "");
        if(userChoice == 1){
                return "Rock";
        } else if (userChoice == 2){
                return "Paper";
        } else if (userChoice == 3){
                return "Scissors";
        } else {
                alert("Invalid Choice");
        }
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playRound(computerChoice, humanChoice){
        //If both choices are the same then draw no one gets points
        // Rock beats Scissors
        // Scissors beats Paper
        // Paper Beats Rock
        // Paper loses to Scissors
        // Scissors Loses to Rock
        // Rock Loses to Paper
        if(computerChoice == humanChoice){
            console.log("Draw! Neither gets any points");
        }
        if(computerChoice == "Paper" && humanChoice == "Rock"){
            console.log("You Lose! Paper beats Rock.");
            COMPUTERSCORE++;
        }
        if(computerChoice == "Scissors" && humanChoice == "Paper"){
            console.log("You Lose! Scissors beats Paper")
            COMPUTERSCORE++;
        }
        if(computerChoice == "Rock" && humanChoice == "Scissors"){
            console.log("You Lose! Rock beats Scissors")
            COMPUTERSCORE++;
        }
        if(humanChoice == "Paper" && computerChoice == "Rock"){
            console.log("You Win! Paper beats Rock.");
            HUMANSCORE++;
        }
        if(humanChoice == "Scissors" && computerChoice == "Paper"){
            console.log("You Win! Scissors beats Paper")
            HUMANSCORE++;
        }
        if(humanChoice == "Rock" && computerChoice == "Scissors"){
            console.log("You Win! Rock beats Scissors")
            HUMANSCORE++;
        }
        console.log(`Human Score: ${HUMANSCORE}`);
        console.log(`Computer Score: ${COMPUTERSCORE}`);
}

playRound(computerChoice, humanChoice);


