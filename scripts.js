const choices = ["Rock", "Paper", "Scissors"]


function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length )
    return choices[random]
}