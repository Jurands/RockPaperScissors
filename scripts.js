const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
const choices = [rock, paper, scissors]

const computerSelection = getComputerChoice()
const playerSelection = getPlayerChoice()

function getPlayerChoice() {
    let i = prompt('Your Choice?')
    return i
}


function getComputerChoice() {
    // return a random item from the choices array
   return choices[Math.floor(Math.random() * choices.length)]

}

function playRound(playerSelection, computerSelection) {
    playerSelection(), computerSelection()
    if (playerSelection === computerSelection) {
        return `It's a Tie! ${playerSelection} and ${computerSelection} are the same.`
    } 

    else if (playerSelection === rock && computerSelection == scissors){
        return `You Win! ${playerSelection} Beats ${computerSelection}`
    } 
    
    else if (playerSelection === rock && computerSelection == paper) {
        return `You Lose! ${computerSelection} Beats ${playerSelection}!`
    }
    
    else if (playerSelection === scissors && computerSelection == paper){
        return `You Win! ${playerSelection} Beats ${computerSelection}`
    } 
    
    else if (playerSelection === scissors && computerSelection == rock) {
        return `You Lose! ${computerSelection} Beats ${playerSelection}!`
    }
    
    else if (playerSelection === paper && computerSelection == rock){
        return `You Win! ${playerSelection} Beats ${computerSelection}`
    } 
    
    else if (playerSelection === paper && computerSelection == scissors) {
        return `You Lose! ${computerSelection} Beats ${playerSelection}!`
    }

    
}


    //tie, win, lose




    
    // player rock
    //     computer paper
    //     computer scissors
    // player paper
    //     computer rock
    //     computer scissors
    // player scissors
    //     computer rock
    //     computer paper