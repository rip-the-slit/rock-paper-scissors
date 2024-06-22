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
        if (choice === 2) {

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

console.log(getComputerChoice())