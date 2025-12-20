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
let computerChoice = getComputerChoice()


function getHumanChoice() {
    return prompt("Pick rock, paper or scissors!")
};
let humanChoice = getHumanChoice()

// Make var humanScore and computerScore (0 at first)
// Write function called playRound with parameters humanChoice and computerChoice
// Make humanChoice case-insensitive
// playRound should log result stating winnner
// ++ score of winner











// Write playGame function that repeats this for 5 rounds (repeat 4 more times)