const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.userButton')
const welcomeScreen = document.getElementById('welcomeScreen')
const userInterface = document.getElementById('userInterface')
const startButton = document.getElementById('start')


const rock = '🪨'
const paper = '📄'
const scissors = '✂️'

let userChoice
let computerChoice
let result

startButton.addEventListener('click', () => {
    startGame()
})

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    let answer
    if(userChoice === 'rock') {
        answer = rock
    } if(userChoice === 'paper') {
        answer = paper
    } if(userChoice === 'scissors') {
        answer = scissors
    }
    userChoiceDisplay.textContent = answer
    generateComputerChoice()
    getResult()
}))

const startGame = () =>{
    welcomeScreen.classList.add('hidden')
    userInterface.classList.remove('hidden')
}

const generateComputerChoice = () => {
    let answer
    const randomNumber =  Math.floor(Math.random() * possibleChoices.length) + 1
    if(randomNumber === 1) {
        computerChoice = 'rock'
        answer = rock
    } if(randomNumber === 2) {
        computerChoice = 'paper'
        answer = paper
    } if(randomNumber === 3) {
        computerChoice = 'scissors'
        answer = scissors
    }

    computerChoiceDisplay.textContent = answer
}

const getResult = () => {
    if(computerChoice === userChoice) {
        result =  'Its a Draw'
    } if(computerChoice === 'rock' && userChoice === 'Paper'){
        result = 'You Won'
    } if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You Lost'
    } if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You Win'
    } if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You Lost'
    } if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You Win'
    } if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You Lost'
    }
    
    resultDisplay.textContent = result
}