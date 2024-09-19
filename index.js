function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice == 0){
        return "scissors"
    }else if (computerChoice == 1){
        return "rock"
    }else{
        return "paper"
    }
}
function getHumanChoice(){
    const humanChoice = prompt("Please choice rock-paper-scissors:")
    return humanChoice;
}
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    playRound(humanSelection, computerSelection);
}

for(let i=0;i<5;i++){
    playGame();
}


function playRound(humanChoice, computerChoice) {
    const humanResult = humanChoice.toLowerCase();

    if(humanResult === "scissors"){
        if(computerChoice === "rock"){
            computerScore +=1;
            console.log(`You lose! computer choice:${computerChoice} your choice:${humanResult} Rock beats Scissors`)
        }else if(computerChoice === "paper"){
            humanScore +=1;
            console.log(`You win! computer choice:${computerChoice} your choice:${humanResult} Scissors beats Paper `)
        }else{
            drawScore +=1;
            console.log("DRAW!")
        }
    }else if (humanResult === "rock"){
        if(computerChoice === "paper"){
            computerScore +=1;
            
            console.log(`You lose! computer choice:${computerChoice} your choice:${humanResult} Paper beats Rock`)
        }else if(computerChoice === "scissors"){
            humanScore +=1;
            console.log(`You win! computer choice:${computerChoice} your choice:${humanResult} Rock beats Scissors`)
            
        }else{
            drawScore +=1;
            console.log("DRAW!");
        }
    }else{
        if(computerChoice === "scissors"){
            computerScore +=1;
            console.log(`You lose! computer choice:${computerChoice} your choice:${humanResult} Scissors beats Paper`)
            
        }else if(computerChoice === "rock"){
            humanScore +=1;
            console.log(`You win! computer choice:${computerChoice} your choice:${humanResult} Paper beats Rock `)
        }else{
            drawScore +=1;
            console.log("DRAW!")
        }
    }
}
if(humanScore > computerScore){
    console.log(`Winner is you \nYour Score:${humanScore} \nComputer Score:${computerScore} \nDraw Score:${drawScore}`)
}else if (humanScore < computerScore){
    console.log(`You lose \nYour Score:${humanScore} \nComputer Score:${computerScore} \nDraw Score:${drawScore}`)
}else{
    console.log(`DRAW! Your Score:${humanScore} Computer Score:${computerScore} \n Draw Score:${drawScore}`)
}


