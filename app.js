let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
   
function convertToWord(letter){
    if(letter === 'r') return 'ROCK';
    if(letter === 's') return 'SCISSORS';
    if(letter === 'p') return 'PAPER';
}


function wins(user, computer){
    userScore++;
    // console.log('win');
    // console.log('userScore');
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(user) + ' beats ' + convertToWord(computer) + ' You Win!'
}

function lose(user, computer){
    computerScore++;
    // console.log('win');
    // console.log('userScore');
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(computer) + ' beats ' + convertToWord(user) + ' You Lose!'
}

function draw(user, computer){
    // console.log('draw');
    // console.log('win');
    // console.log('userScore');
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = 'Its A Draw!'

}

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// console.log(getComputerChoice());

function game(user_choice){
    const computerChoice = getComputerChoice();
   switch(user_choice + computerChoice) {
        case "rp":
        case "pr":
        case "sp":
            wins(user_choice, computerChoice)
            // console.log('user wins!');
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(user_choice, computerChoice)
        // console.log('computer wins!');
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(user_choice, computerChoice)
        // console.log('Its A Draw!');
        break;
   }
}

game();


function main(){
    rock_div.addEventListener('click', function(){
    game('r');
})

paper_div.addEventListener('click', function(){
    game('p');
})

scissors_div.addEventListener('click', function(){
    game('s');
})
}

main();
