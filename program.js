// Create function to get a random choice
function getComputerChoice() {

//      Get a random number from one through three and store it in a variable called choice
        let choice = Math.floor(Math.random() * 3) + 1;

//      If the number stored in choice is equal to 1:
        if (choice === 1) {

//          Set choice variable to "Rock" and return it
            choice = "Rock";
            return choice;            
        }

//      If the number stored in choice is equal to 2:
        else if (choice === 2) {

//          Set choice variable to "Paper" and return it
            choice = "Paper";
            return choice;
        }

//      Otherwise:
        else {

//          Set choice variable to "Scissors" and return it
            choice = "Scissors";
            return choice;
        }
}
// console.log(getComputerChoice())

// console.log(getHumanChoice())

// Create two variables with the value of 0 to keep track of the player and computer scores

// Create function to keep track of scores and rounds
function playGame() {

let computerScore = 0;
let humanScore = 0;

function emptyScores() {
        computerScore = 0;
        humanScore = 0;
}

const results = document.querySelector(".results")
const humanScoreDisplay = document.querySelector(".humanScore")
const computerScoreDiplay = document.querySelector(".computerScore")

// Create function to play round that takes the human and computer choices as arguments
function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {

//              Display msg declaring a match
                results.textContent = "It's a tie!"
                return;
        }

//      If human choice is "Rock":
        else if (humanChoice === "Rock") {

//              And the computer choice is "Scissors":
                if (computerChoice === "Scissors") {

//                      Increment human score by one and display msg
                        ++humanScore
                        results.textContent = `You win! ${humanChoice} beats ${computerChoice}`
                        return;
                }

//              Otherwise:
                else {

//                      Increment computer score by one and display msg
                        ++computerScore
                        results.textContent = `You lose. ${computerChoice} beats ${humanChoice}`
                        return;
                }

        }

//      If human choise is "Paper":
        else if (humanChoice === "Paper") {

//              And the computer choice is "Rock":
                if (computerChoice === "Rock") {

//                      Increment human score by one and display msg
                        ++humanScore
                        results.textContent = `You win! ${humanChoice} beats ${computerChoice}`
                        return;
                }

//              Otherwise:
                else {

//                      Increment computer score by one and display msg
                        ++computerScore
                        results.textContent = `You lose. ${computerChoice} beats ${humanChoice}`
                        return;
                }
        }

//      If human choice is "Scissors":
        else {

//              And the computer choice is "Paper":
                if (computerChoice === "Paper") {

//                      Increment human score by one and display msg
                        ++humanScore
                        results.textContent = `You win! ${humanChoice} beats ${computerChoice}`
                        return;
                }

//              Otherwise:
                else {

//                      Increment computer score by one and display msg
                        ++computerScore
                        results.textContent = `You lose. ${computerChoice} beats ${humanChoice}`
                        return;
                }
        }

        
}

        const choices = document.querySelector(".choices")

        choices.addEventListener("click", (event) => {
                switch(event.target.textContent) {
                        case "Rock":
                                playRound("Rock", getComputerChoice())
                                break
                        case "Paper":
                                playRound("Paper", getComputerChoice())
                                break
                        case "Scissors":
                                playRound("Scissors", getComputerChoice())
                                break
                }

                humanScoreDisplay.textContent = `${humanScore}`;
                computerScoreDiplay.textContent = `${computerScore}`;

                if (humanScore === 5) {
                        results.textContent = "You are the winner!"
                        emptyScores()
                }
                if (computerScore === 5) {
                        results.textContent = "You lost :("
                        emptyScores()
                }

        })
}

playGame()

