const choices = ['rock', 'paper', 'scissors']
let playerSelection
let computerSelection

function getComputerChoice() {
    //generate a random number using the index of the choices array and return a string
    let randomNumber = choices[Math.floor(Math.random() *choices.length)]

    if(randomNumber === 1) {
        computerSelection = 'rock'
    }
    if(randomNumber === 2) {
        computerSelection = 'paper'
    }
    if(randomNumber === 3) {
        computerSelection = 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    //plays a single round of Rock Paper and Scissors and return a string with the result
    if(computerSelection === playerSelection) {
        result = "Its a Draw!"
    }
    if(computerSelection === 'rock' && playerSelection === 'paper') {
        result = "you WIN!"
    }
    if(computerSelection === 'rock' && playerSelection === 'scissors') {
        result = "you LOST!"
    }
    if(computerSelection === 'paper' && playerSelection === 'scissors') {
        result = "you WIN!"
    }
    if(computerSelection === 'paper' && playerSelection === 'rock') {
        result = "you LOST!"
    }
    if(computerSelection === 'scissors' && playerSelection === 'rock') {
        result = "you WIN!"
    }
    if(computerSelection === 'scissors' && playerSelection === 'paper') {
        result = "you LOST!"
    }
}