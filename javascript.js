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


let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;
let result = playRound(humanChoice, computerChoice);

switch (result) {
    case "win":
        humanScore = ++humanScore
        break;
    case "tie":
        break;
    case "lose":
        computerScore = ++computerScore
        break;
};

console.log("Human: "+humanScore)
console.log("Computer: "+computerScore)

// Write playGame function that repeats this for 5 rounds (repeat 4 more times)