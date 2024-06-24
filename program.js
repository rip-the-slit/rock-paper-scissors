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

// Create a function to get the user's choice
function getHumanChoice() {

//      Get the user's input and store it in a variable called choice
        let choice = prompt("Rock, Paper or Scissors? You can also just type R, P or S respectively", '');
        choice = choice.toLowerCase();

//      Check if the input stored in choice matches any of the valid choices
        switch(choice) {

//          Check if the input is for "Rock"
            case "r":
            case "rock":

//              Set choice to the properly capitalized option and return it
                choice = "Rock";
                return choice;

//          Check if the input is for "Paper"
            case "p":
            case "paper":

//              Set choice to the properly capitalized option and return it
                choice = "Paper";
                return choice;

//          Check if the input is for "Scissors"
            case "s":
            case "scissors":

//              Set choice to the properly capitalized option and return it
                choice = "Scissors";
                return choice;

//          Otherwise return null
            default:
                return null;
        }
}

// console.log(getHumanChoice())

// Create two variables with the value of 0 to keep track of the player and computer scores

// Create function to keep track of scores and rounds
function playGame() {

let computerScore = 0;
let humanScore = 0;

// Create function to play round that takes the human and computer choices as arguments
function playRound(humanChoice, computerChoice) {

//      If human and computer choices are the same:
        if (humanChoice === null) {
                console.log("Enter a valid choice")
                return;
        }
        if (humanChoice === computerChoice) {

//              Display msg declaring a match
                console.log("It's a tie!")
                return;
        }

//      If human choice is "Rock":
        else if (humanChoice === "Rock") {

//              And the computer choice is "Scissors":
                if (computerChoice === "Scissors") {

//                      Increment human score by one and display msg
                        ++humanScore
                        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                        return;
                }

//              Otherwise:
                else {

//                      Increment computer score by one and display msg
                        ++computerScore
                        console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
                        return;
                }

        }

//      If human choise is "Paper":
        else if (humanChoice === "Paper") {

//              And the computer choice is "Rock":
                if (computerChoice === "Rock") {

//                      Increment human score by one and display msg
                        ++humanScore
                        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                        return;
                }

//              Otherwise:
                else {

//                      Increment computer score by one and display msg
                        ++computerScore
                        console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
                        return;
                }
        }

//      If human choice is "Scissors":
        else {

//              And the computer choice is "Paper":
                if (computerChoice === "Paper") {

//                      Increment human score by one and display msg
                        ++humanScore
                        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                        return;
                }

//              Otherwise:
                else {

//                      Increment computer score by one and display msg
                        ++computerScore
                        console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
                        return;
                }
        }
}

//      As long as the round count is less than 5
        for (let round = 0; round < 5; round++) {

//              Call the playRound function
                playRound(getHumanChoice(), getComputerChoice())
        }

//      If the humanScore is bigger than the computerScore:
        if (humanScore > computerScore) {

//              Show msg declaring the user as the winner
                console.log(`You won! ${humanScore} vs. ${computerScore}`)
        }

        else if (humanScore === computerScore) {
                console.log("It's a definitive tie.")
        }
//      Otherwise:
        else {
//              Show msg declaring the computer as the winner
                console.log(`You lost! ${humanScore} vs. ${computerScore}`)
        }
}

playGame()