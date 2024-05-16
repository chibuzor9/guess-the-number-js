//Code Written by Chibuzor Emmanuel

'use strict'

// Selecting elements
const body = document.querySelector('body')
const again = document.querySelector('.again')
const message = document.querySelector('.message')
const check = document.querySelector('.check')
const guess = document.querySelector('.guess')
const score = document.querySelector('.score')
const number = document.querySelector('.number')
const highscore = document.querySelector('.highscore')

// Generating a random number
let actual_value = Math.trunc(Math.random() * 20) + 1

// Event Listeners
again.addEventListener('click', function () {
    message.textContent = 'Start guessing...'
    guess.value = ''
    score.textContent = 20
    body.style.backgroundColor = '#222'
})

check.addEventListener('click', function () {
    if (Number(score.textContent)) {
        if (guess.value == actual_value) {
            message.textContent = '🎉 Correct Number!'
            body.style.backgroundColor = '#60b347'
            number.textContent = actual_value
            check_highscore()
        } else {
            low_or_high(guess.value)
            score.textContent = Number(score.textContent) - 1
        }
    } else {
        message.textContent = '😭 You lost the game!'
        score.textContent = 0
        body.style.backgroundColor = '#ff0000'
    }
})

// Functions
function check_highscore() {
    let prev_highscore = Number(highscore.textContent)

    if (Number(score.textContent) > prev_highscore) {
        highscore.textContent = Number(score.textContent)
    }
}

function low_or_high(num) {
    if (num > actual_value) {
        message.textContent = '📈 Too High!'
    } else {
        message.textContent = '📉 Too Low!'
    }
}
