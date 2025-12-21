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
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".")
            return "win"
        } else if (computerChoice === humanChoice) {
            console.log("It's a tie!")
            return "tie"
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice + "." )
            return "lose"
        }
    }
    if (humanSelection === "PAPER") {
        if (computerChoice === "rock") {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".")
            return "win"
        } else if (computerChoice === humanChoice) {
            console.log("It's a tie!")
            return "tie"
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice + "." )
            return "lose"
        }
    }
    if (humanSelection === "SCISSORS") {
        if (computerChoice === "paper") {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".")
            return "win"
        } else if (computerChoice === humanChoice) {
            console.log("It's a tie!")
            return "tie"
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice + "." )
            return "lose"
        }
    }
};

function calcHumanScore (result) {
    if (result === "win") {
        return humanScore = ++humanScore
    } else {
        return humanScore = humanScore
    }
};

function calcComputerScore (result) {
    if (result === "lose") {
        return computerScore = ++computerScore
    } else {
        return computerScore = computerScore
    }
};


//GAME FLOW STARTS HERE
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;
let rounds = 1
let result = playRound(humanChoice, computerChoice);

//Shows the result of the round
console.log("Human: "+calcHumanScore(result))
console.log("Computer: "+calcComputerScore(result))
rounds = ++rounds
console.log("Rounds: "+rounds)

//Plays another round and shows results again
computerChoice = getComputerChoice();
humanChoice = getHumanChoice();
result = playRound(humanChoice, computerChoice);

console.log("Human: "+calcHumanScore(result))
console.log("Computer: "+calcComputerScore(result))
rounds = ++rounds
console.log("Rounds: "+rounds)

// Write playGame function that repeats this for 5 rounds (repeat 4 more times)