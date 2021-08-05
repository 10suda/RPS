let choices = ["rock", "paper", "scissors"];
let playerSelection;
//let computerSelection = computerPlay();
let computerSelection;
let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    while (choices[randomNumber] == playerSelection){
        randomNumber = Math.floor(Math.random()*3);
    }
    return choices[randomNumber];
}

function oneRound(playerSelection, computerSelection){
    if ((playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "scissors" && computerSelection == "paper")||
        (playerSelection == "paper" && computerSelection == "rock")) {
        
        return true;
    }
    else{
        return false;
    }
}

function gameOn(){
    computerSelection = computerPlay();
    const para = document.querySelector('p');
    if (oneRound(playerSelection, computerSelection)){
        playerScore++;
        para.textContent = (`You win the round!
You chose ${playerSelection.toLowerCase()} and the computer chose ${computerSelection}.
Your score is ${playerScore} and the computer's score is ${computerScore}.`);
     }
    else{
        computerScore++;
        para.textContent = (`You lose the round!
You chose ${playerSelection.toLowerCase()} and the computer chose ${computerSelection}.
Your score is ${playerScore} and the computer's score is ${computerScore}.`);
    }

}
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    if (button.id != 'reset'){
        playerSelection = button.id;
        gameOn();
    }
    else{
        computerScore = 0;
        playerScore = 0;
        const para = document.querySelector('p');
        para.textContent = "";
    }
  });
});
