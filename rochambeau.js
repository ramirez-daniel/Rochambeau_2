// Stores the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Spock, 4 = Lizard
var playerChoice;
var computerChoice;

// Stores the lables for the choices
var choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];

// Variable to store the score
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0,0,0];

//Variable to score the matches
// score[0] = wins, score[1] = losses
var matches = [0,0];

// Stores the player's choice, then call's the function for storing the computer's choice
function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + choice);
    storeComputerChoice();
}

// Generate computer's random choice
function storeComputerChoice() {
    computerChoice = Math.floor(Math.random()*5);
    console.log("Computer choice = " + computerChoice);
}

// This is the function for playing the game
function playGame(){
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        updateScore(1);
        displayGameResult("tie")
    } else if (playerChoice == 0 && computerChoice == 2 || computerChoice == 4) {
        // Rock breaks scissors or kills lizard - a win!
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 1 && computerChoice == 0 || computerChoice == 3) {
        // Paper covers rock and beats Spock - a win!
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 2 && computerChoice == 1 || computerChoice == 4) {
        // Scissors cut paper and kills lizard - a win!
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 3 && computerChoice == 2 || computerChoice == 0) {
        //Spock beats rock and scissors - a win!
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 4 && computerChoice == 3 || computerChoice == 1) {
        //Lizard beats paper and Spock - a win!
        updateScore(0);
        displayGameResult("win")
    } else {
        // All other combinations are losses
        updateScore(2);
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

    updateMatchBoardBoard();
}

// Updates the score
function updateScore(val){
    ++score[val];
    console.log("The score is now " + score);
}

// Function for displaying the score
function updateMatchBoard(){
    document.getElementById("wins").textContent = matches[0];
    document.getElementById("losses").textContent = matches[1];
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
