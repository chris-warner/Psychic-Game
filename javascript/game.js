var MaxGuesses = 10;
var wins = 0;
var losses = 0;
var score_guessesLeft = 10;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var score_guessesSoFar = [];
//Keypresses
document.onkeyup = function (event) {
    var keypress = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = newLetter();
    score_guessesSoFar.push(keypress);
    if (keypress == computerGuess) {
        wins++;
        alert("You won!");
        score_guessesLeft = 9;
        score_guessesSoFar.length = 0;
    } else if (score_guessesLeft == 0) {
        losses++;
        score_guessesLeft = 9;
        score_guessesSoFar.length = 0;
    } else if (keypress !== computerGuess) {
        score_guessesLeft--;
    }
    //Write to the HTML file.
    Update_HTML();
}

function Update_HTML() {
    var updatehtml = "<p>Guess What Letter I'm Thinking Of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + score_guessesLeft + "<p>Your Guesses so far: " +
        score_guessesSoFar + "</p>";
    document.querySelector("#psychic_game").innerHTML = updatehtml;
}

function newLetter() {
    //math for generating random selection.
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}