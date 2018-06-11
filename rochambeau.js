var Rochambeau = {

    choices: {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
        SPOCK: 3,
        LIZARD: 4
    },

    score: {
        wins: 0,
        losses: 0,
        ties: 0
    },

    results: {
        WIN: 1,
        TIE: 0,
        LOSS: -1
    },

    player:  new Player(),

    computer: new Player(),

    // Stores the player's choice, then call's the function for storing the computer's choice
    storePlayerChoice: function(choice) {
        this.player.choice = choice;
        console.log("My choice = " + this.player.choice);
        this.storeComputerChoice();
    },

    // Generate the computer's random choice
    storeComputerChoice: function() {
        this.computer.choice = Math.floor(Math.random() * 5);
    },

    // This is the function for playing the game
    playGame: function(){
    // Here is the game ruleset algorithm
    if (this.player.choice == this.computer.choice) {
        // We have a tie!
        ++this.score.ties;
        displayGameResult("tie")
    } else if (this.player.choice == this.choices.ROCK && this.computer.choice == this.choices.SCISSORS || this.computer.choice == this.choices.LIZARD) {
        // Rock breaks scissors or kills lizard - a win!
        ++this.score.wins;
        displayGameResult("win")
    } else if (this.player.choice == this.choices.PAPER && this.computer.choice == this.choices.ROCK || this.computer.choice == this.choices.SPOCK) {
        // Paper covers rock and beats Spock - a win!
        ++this.score.wins;
        displayGameResult("win")
    } else if (this.player.choice == this.choices.SCISSORS && this.computer.choice == this.choices.PAPER || this.computer.choice == this.choices.LIZARD) {
        // Scissors cut paper and kills lizard - a win!
        ++this.score.wins;
        displayGameResult("win")
    } else if (this.player.choice == this.choices.SPOCK && this.computer.choice == this.choices.ROCK || this.computer.choice == this.choices.SCISSORS) {
        //Spock beats rock and scissors - a win!
        ++this.score.wins;
        displayGameResult("win")
    } else if (this.player.choice == this.choices.LIZARD && this.computer.choice == this.choices.PAPER || this.computer.choicehoice == this.choices.SPOCK) {
        //Lizard beats paper and Spock - a win!
        ++this.score.wins;
        displayGameResult("win")
    } else {
        // All other combinations are losses
        ++this.score.losses;
        displayGameResult("lose")
    }
    },

    //Displays the result of the game
    displayGameResult: function(result){
    // Define an array of text labels for the choices 0, 1, 2, 3, 4;
    // Create a message for the player
    message = "Your choice was " + this.player.choice + " and the computer's choice was " + this.computer.choice + ".";
    // Add to the base message if it was a win, loss, or tie
    if (this.result === "win") {
        // Display that it was a win
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (this.result === "lose") {
        // Display that it was a loss
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        // Display that it was a tie
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    displayScoreBoard();
    },

    // Function for displaying the score
    displayScoreBoard: function(winsId, lossesId, tiesId){
    document.getElementById(winsId).textContent = this.score.wins;
    document.getElementById(lossesId).textContent = this.score.losses;
    document.getElementById(tiesId).textContent = this.score.ties;
    },

    // The button elements
    rockButton: document.getElementById("rock"),

    paperButton: document.getElementById("paper")

}


    scissorsButton = document.getElementById("scissors");
    spockButton = document.getElementById("spock");
    lizardButton = document.getElementById("lizard");
    playButton = document.getElementById("play");

    // Add the event handlers
    rockButton.addEventListener('click', () => {storePlayerChoice(0)});
    paperButton.addEventListener('click', () => {storePlayerChoice(1)});
    scissorsButton.addEventListener('click', () => {storePlayerChoice(2)});
    spockButton.addEventListener('click', () => {storePlayerChoice(3)});
    lizardButton.addEventListener('click', () => {storePlayerChoice(4)});
    playButton.addEventListener('click', () => {playGame()});
