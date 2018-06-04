/**
 * Represents a player
 */
function Player(){
    this.choice = null;
}

var player = new Player();
var computer = new Player();

/**
 * Represents the choices
 */
var choices  = {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2,
    SPOCK: 3,
    LIZARD: 4
}

// Stores the score.
var score = {
    wins: 0,
    losses: 0,
    ties: 0
}

// Stores the player's choice, then call's the function for storing the computer's choice
function storePlayerChoice(choice) {
    player.choice = choice;
    console.log("My choice = " + player.choice);
    storeComputerChoice();
}

// Generate the computer's random choice
function storeComputerChoice() {
    // Generate computer's random choice
    computer.choice = Math.floor(Math.random()*5);
    console.log("Computer choice = " + computer.choice);
}

// This is the function for playing the game
function playGame(){
    // Here is the game ruleset algorithm
    if (player.choice == computer.choice) {
        // We have a tie!
        ++score.ties;
        displayGameResult("tie")
    } else if (player.choice == choices.ROCK && computer.choice == choices.SCISSORS || computer.choice == choices.LIZARD) {
        // Rock breaks scissors or kills lizard - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.PAPER && computer.choice == choices.ROCK || computer.choice == choices.SPOCK) {
        // Paper covers rock and beats Spock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.SCISSORS && computer.choice == choices.PAPER || computer.choice == choices.LIZARD) {
        // Scissors cut paper and kills lizard - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.SPOCK && computer.choice == choices.ROCK || computer.choice == choices.SCISSORS) {
        //Spock beats rock and scissors - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.LIZARD && computer.choice == choices.PAPER || computer.choicehoice == choices.SPOCK) {
        //Lizard beats paper and Spock - a win!
        ++score.wins;
        displayGameResult("win")
    } else {
        // All other combinations are losses
        ++score.losses;
        displayGameResult("lose")
    }
}

//Displays the result of the game
function displayGameResult(result){
    // Define an array of text labels for the choices 0, 1, 2, 3, 4;
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    // Add to the base message if it was a win, loss, or tie
    if (result === "win") {
        // Display that it was a win
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        // Display that it was a loss
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        // Display that it was a tie
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    displayScoreBoard();
}

// Function for displaying the score
function displayScoreBoard(winsId, lossesId, tiesId){
    document.getElementById(winsId).textContent = score.wins;
    document.getElementById(lossesId).textContent = score.losses;
    document.getElementById(tiesId).textContent = score.ties;
}

// The button elements
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var spockButton = document.getElementById("spock");
var lizardButton = document.getElementById("lizard");
var playButton = document.getElementById("play");

// Add the event handlers
rockButton.addEventListener('click', () => {storePlayerChoice(0)});
paperButton.addEventListener('click', () => {storePlayerChoice(1)});
scissorsButton.addEventListener('click', () => {storePlayerChoice(2)});
spockButton.addEventListener('click', () => {storePlayerChoice(3)});
lizardButton.addEventListener('click', () => {storePlayerChoice(4)});
playButton.addEventListener('click', () => {playGame()});
