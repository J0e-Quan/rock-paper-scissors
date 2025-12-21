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
    } else {
        console.log("getComputerChoice is broken");
    }
};

function getHumanChoice() {
    return prompt("Pick rock, paper or scissors!")
};

function playRound(humanChoice, computerChoice) {
    let humanSelection = humanChoice.toUpperCase()
    if (humanSelection === "ROCK") {
        if (computerChoice === "scissors") {
            console.log("You win this round! " + humanChoice + " beats " + computerChoice + ".")
            return "win"
        } else if (computerChoice === humanChoice) {
            console.log("It's a tie!")
            return "tie"
        } else {
            console.log("You lose this round! " + computerChoice + " beats " + humanChoice + "." )
            return "lose"
        }
    }
    if (humanSelection === "PAPER") {
        if (computerChoice === "rock") {
            console.log("You win this round! " + humanChoice + " beats " + computerChoice + ".")
            return "win"
        } else if (computerChoice === humanChoice) {
            console.log("It's a tie!")
            return "tie"
        } else {
            console.log("You lose this round! " + computerChoice + " beats " + humanChoice + "." )
            return "lose"
        }
    }
    if (humanSelection === "SCISSORS") {
        if (computerChoice === "paper") {
            console.log("You win this round! " + humanChoice + " beats " + computerChoice + ".")
            return "win"
        } else if (computerChoice === humanChoice) {
            console.log("It's a tie!")
            return "tie"
        } else {
            console.log("You lose this round! " + computerChoice + " beats " + humanChoice + "." )
            return "lose"
        }
    }
};

function calcHumanScore (result) {
    if (result === "win") {
        return 1
    } else {
        return 0
    }
};

function calcComputerScore (result) {
    if (result === "lose") {
        return 1
    } else {
        return 0
    }
};

function playGame(rounds) {
    if (rounds <= 5) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let roundResult = playRound(humanChoice, computerChoice);
        humanScore = humanScore + calcHumanScore(roundResult)
        computerScore = computerScore + calcComputerScore(roundResult)
        console.log("Human: "+humanScore)
        console.log("Computer: "+computerScore)        
        console.log("Rounds left: "+(5-rounds))
        return roundResult
    } else {
        if (humanScore > computerScore) {
            console.log("You won the game! Refresh this page to play again...")
            console.log("Human total: "+humanScore)
            console.log("Computer total: "+computerScore)
        } else if (humanScore < computerScore) {
            console.log("You lost the game! Refresh this page to play again...")
            console.log("Human total: "+humanScore)
            console.log("Computer total: "+computerScore)
        } else {
            console.log("It's a tie! Refresh this page to play again...")
            console.log("Human total: "+humanScore)
            console.log("Computer total: "+computerScore)            
        }
    }
}




//GAME FLOW STARTS HERE
let humanScore = 0;
let computerScore = 0;
let rounds = 1
let result;

result = playGame(rounds)
rounds = ++rounds

result = playGame(rounds)
rounds = ++rounds

result = playGame(rounds)
rounds = ++rounds

result = playGame(rounds)
rounds = ++rounds

result = playGame(rounds)
rounds = ++rounds

result = playGame(rounds)
rounds = ++rounds