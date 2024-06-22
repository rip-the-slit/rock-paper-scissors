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

console.log(getHumanChoice())