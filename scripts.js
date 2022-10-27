let computerSelection = getComputerChoice()
let playerScore = 0
let computerScore = 0
let gameScore = 0

function getPlayerChoice() {
    let playerChoices = prompt('Pick One: Rock, Paper, Scissors')
    let playerChoice = playerChoices.toLocaleLowerCase()
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
    const choices = ['rock', 'paper', 'scissors']
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
        console.log('draw')
    }
    if(computerSelection === 'rock' && playerSelection === 'paper') {
        console.log('player wins')
        return playerScore += 1
    }
    if(computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log('cpu wins')
        return computerScore += 1
    }
    if(computerSelection === 'paper' && playerSelection === 'scissors') {
        console.log('player wins')
        return playerScore += 1
    }
    if(computerSelection === 'paper' && playerSelection === 'rock') {
        console.log('cpu wins')
        return computerScore += 1
    }
    if(computerSelection === 'scissors' && playerSelection === 'rock') {
        console.log('player wins')
        return playerScore += 1
    }
    if(computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log('cpu wins')
        return computerScore += 1
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        let game = playRound(getPlayerChoice(), getComputerChoice())
        console.log(game)
    } if (computerScore > playerScore) {
        alert('cpu wins the set')
        console.log('cpu wins the set')
    } else if (computerScore == playerScore) {
        console.log('draw set')
        alert('draw set')
    } else {
        console.log('player wins the set')
        alert('player wins the set')
    }
}