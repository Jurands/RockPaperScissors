const choices = ['rock', 'paper', 'scissors']
// let playerSelection = getPlayerChoice()
let computerSelection = getComputerChoice()
let playerWins = "You Win!"
let computerWins = "Computer Wins!"
let draw = "Its a Draw!"


function getPlayerChoice() {
    let playerChoice = prompt()
    if (playerChoice === 'rock'){
        return(playerChoice)
    }
    if (playerChoice === 'paper'){
        return playerChoice
    }
    if (playerChoice === 'scissors'){
        return playerChoice
    }
    }

function getComputerChoice() {
    //generate a random number using the index of the choices array and return a string
    let randomNumber = choices[Math.floor(Math.random() *choices.length)]
    if(randomNumber === 1) {
        return 'rock'
    }
    if(randomNumber === 2) {
        return 'paper'
    }
    if(randomNumber === 3) {
        return 'scissors'
    }
    return randomNumber
}

function playRound(playerSelection, computerSelection) {
    //plays a single round of Rock Paper and Scissors and return a string with the result
    if(computerSelection === playerSelection) {
        return draw
    }
    if(computerSelection === 'rock' && playerSelection === 'paper') {
        return playerWins
    }
    if(computerSelection === 'rock' && playerSelection === 'scissors') {
        return computerWins
    }
    if(computerSelection === 'paper' && playerSelection === 'scissors') {
        return playerWins
    }
    if(computerSelection === 'paper' && playerSelection === 'rock') {
        return computerWins
    }
    if(computerSelection === 'scissors' && playerSelection === 'rock') {
        return playerWins
    }
    if(computerSelection === 'scissors' && playerSelection === 'paper') {
        return computerWins
    }
    
}

 function result() {
    //The playRound() function returns either a player Wins, Computer Wins, or draw
    //Use this function to keep track of those on the game() function.
    if (playerWins === computerWins) {
        console.log('DRAW')
    } else if (playerWins > computerWins) {
        console.log('The Player Wins the Set')
    } else {
        console.log('The Computer Wins the Set')
    }
 }

function game() {
    for (let i = 0; i < 5; i++) {
        let count = playRound(getPlayerChoice(), getComputerChoice())
        console.log(count)
    }

    result()

}