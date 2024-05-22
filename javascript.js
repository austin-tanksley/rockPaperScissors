// Set a number variable named scissors = 0
let scissors = 0;
// Set a number variable named rock = 0
let rock = 0;
// Set a number variable named paper = 0
let paper = 0; 

// Prompt user for with the message "Do you choose Rock, paper, or scissors?"
function getUserChoice() {
    let answer = prompt("Do you choose rock, paper or scissors.");
    return answer.toLowerCase();
}
//loop to ensure that user makes a correct choice.
let keepGoing = true;
while(keepGoing) {
    let userChoice = getUserChoice();
    // based on the user choice set the values to the rock, paper, and scissors to either 0,1, or 2.
    if (userChoice === 'rock') {
        rock = 1;
        scissors = 0;
        paper = 2;
        keepGoing = false;
    }
    else if (userChoice === 'paper') {
        paper = 1;
        rock = 0;
        scissors = 2;
        keepGoing = false;
    }
    else if (userChoice === 'scissors') {
        scissors = 1;
        paper = 0;
        rock = 2;
        keepGoing = false;
    }
    else {
        alert('Please choose either "Rock", "Paper", or "Scissors"');
    }
}

// create computer choice

let num = Math.random();
let compChoice = null;
let compChoiceStr = null;

if (num < .33) {
    compChoice = rock;
    compChoiceStr = 'Rock';
}
else if (num >= .33 && num < .66) {
    compChoice = paper
    compChoiceStr = 'Paper';
}
else {
    compChoice = scissors
    compChoiceStr = 'Scissors';
}

// Compare the computer choice to 1
// alert the user who won
if (compChoice < 1) {
    alert(`The computer chose ${compChoiceStr}. You won!`)
}
else if (compChoice > 1) {
    alert(`The computer chose ${compChoiceStr}. You lose!`)
}
else {
    alert (`The computer also chose ${compChoiceStr}. Its a tie!`)
}