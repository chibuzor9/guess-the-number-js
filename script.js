'use strict';

const again = document.querySelector('.again')
const message = document.querySelector('.message')
const check = document.querySelector('.check')
const guess = document.querySelector('.guess')
const score = document.querySelector('.score')
const number = document.querySelector('.number')
const highscore = document.querySelector('.highscore')

let actual_value = Math.trunc(Math.random() * 20) + 1;

again.addEventListener('click', function () {
    message.textContent = 'Start guessing...'
    guess.value = ''
    score.textContent = 20
})

check.addEventListener('click', function () {
    if (guess.value == actual_value) {
        message.textContent = '🎉 Correct Number!';
        document.body.style.backgroundColor = '#60b347';
        number.textContent = actual_value;
        check_highscore();
    } else {
        low_or_high(guess.value)
        score.textContent = Number(score.textContent) - 1
    }
})


function check_highscore() {
    let prev_highscore = Number(highscore.textContent)

    if (Number(score.textContent) > prev_highscore) {
        highscore.textContent = Number(score.textContent)
    }
}

function low_or_high(num) {
    if (num > actual_value) {
        message.textContent = '📈 Too High!';
    } else {
        message.textContent = '📉 Too Low!';
    }
}
