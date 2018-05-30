// Stores the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors
var playerChoice;
var computerChoice;

// Stores the lables for the choices
var choices = ["Rock", "Paper", "Scissors"];

// Variable to store the score
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0,0,0];

// Stores the player's choice, then call's the function for storing the computer's choice
function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + choice);
    storeComputerChoice();
}

// Generate computer's random choice
function storeComputerChoice() {
    computerChoice = Math.floor(Math.random()*3);
    console.log("Computer choice = " + computerChoice);
}

// This is the function for playing the game
function playGame(){
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        updateScore(1);
        displayGameResult("tie")
    } else if (playerChoice == 0 && computerChoice == 2) {
        // Rock beats scissors - a win!
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 1 && computerChoice == 0) {
        // Paper beats scissors - a win!
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 2 && computerChoice == 1) {
        // Scissors beats paper - a win!
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
    // Define an array of text labels for the choices 0, 1, 2;
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

    updateScoreBoard();
}

// Updates the score
function updateScore(val){
    ++score[val];
    console.log("The score is now " + score);
}

// Function for displaying the score
function updateScoreBoard(){
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1];
}

// The button elements
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var playButton = document.getElementById("play");

// Add the event handlers
rockButton.addEventListener('click', () => {storePlayerChoice(0)});
paperButton.addEventListener('click', () => {storePlayerChoice(1)});
scissorsButton.addEventListener('click', () => {storePlayerChoice(2)});
playButton.addEventListener('click', () => {playGame()});
