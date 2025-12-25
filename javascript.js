//LIST OF ALL FUNCTIONS
function getComputerChoice() {
    let choiceNum = Math.floor((Math.random()*3) +1)
    // 1 = rock ; 2 = paper ; 3 = scissors
    if (choiceNum === 1) {
        return "rock"
    } else if (choiceNum === 2) {
        return "paper"
    } else if (choiceNum === 3) {
        return "scissors"
    }
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            return "win"
        } else if (computerChoice === humanChoice) {
            return "tie"
        } else {
            return "lose"
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            return "win"
        } else if (computerChoice === humanChoice) {
            return "tie"
        } else {
            return "lose"
        }
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            return "win"
        } else if (computerChoice === humanChoice) {
            return "tie"
        } else {
            return "lose"
        }
    }
};

function calcHumanScore (result) {
    if (result === "win") {
        humanScore = humanScore + 1
    } else {
        return;
    }
};

function calcComputerScore (result) {
    if (result === "lose") {
        computerScore = computerScore + 1
    } else {
        return;
    }
};

function updateScore() {
    humanScoreCounter.textContent = "Human: "+humanScore+" / 5"
    computerScoreCounter.textContent = "Computer: "+computerScore+" / 5"
    winner = determineWinner(humanScore, computerScore)
    if (winner === "human" || winner == "computer") {
        resultText.textContent = "You "+result+" the game! Refresh the page to play again..."
    } else {
    }
};

function determineWinner(humanScore, computerScore) {
    if (humanScore < 5 && computerScore < 5) {
        updateResult(result)
        return;
    } else if (humanScore >= 5) {
        isThereAWinner = true;
        removeButtons()
        return "human";
    } else {
        isThereAWinner = true;
        removeButtons()
        return "computer"
    }
};

function updateResult(result) {
    if (result === "win" || result === "lose") {
        resultText.textContent = "You "+result+" this round!"
    } else {
        resultText.textContent = "It's a tie!"
    }
};

function removeButtons() {
    rockButton.remove()
    paperButton.remove()
    scissorsButton.remove()
}





//GAME FLOW STARTS HERE
let humanScore = 0;
let computerScore = 0;
let rounds = 1
let humanChoice;
let computerChoice
let result;
let winner = ""
let isThereAWinner = false;

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let humanScoreCounter = document.querySelector(".human-score");
let computerScoreCounter = document.querySelector(".computer-score");
let resultText = document.querySelector(".result")

rockButton.addEventListener('click', () => {
    if (isThereAWinner === false) {
        humanChoice = "rock";
        computerChoice = getComputerChoice();
        result = playRound(humanChoice, computerChoice);
        calcHumanScore(result);
        calcComputerScore(result);
        updateScore();
    } else {
    }
});

paperButton.addEventListener('click', () => {
    if (isThereAWinner === false) {
        humanChoice = "paper";
        computerChoice = getComputerChoice();
        result = playRound(humanChoice, computerChoice);
        calcHumanScore(result);
        calcComputerScore(result);
        updateScore();
    } else {
    }
});

scissorsButton.addEventListener('click', () => {
    if (isThereAWinner === false) {
        humanChoice = "scissors";
        computerChoice = getComputerChoice();
        result = playRound(humanChoice, computerChoice);
        calcHumanScore(result);
        calcComputerScore(result);
        updateScore();
    } else {
    }
})

