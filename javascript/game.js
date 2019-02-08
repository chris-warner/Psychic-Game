var MaxGuesses = 10;
var wins = 0;
var losses = 0;
var score_guessesLeft = 10;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var score_guessesSoFar = [];

document.onkeyup = function (event) {
    var keypress = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = newLetter();
newLetter();
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
    score_guessesSoFar.push(keypress);
    
    //Write to the HTML file.
    updateDisplay();
}
function Refresh() {
    score_guessesSoFar = [];
    guessesLeft = 9;
    newLetter();
    score_guessesLeft=0;
    score_guessesSoFar=0;

}
function newLetter() {
    //math for generating random selection.
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
function updateDisplay() {
    document.getElementById("GuessesLeft").textContent = score_guessesLeft;
    document.getElementById("GuessesSoFar").textContent = score_guessesSoFar;
    document.getElementById("wins").textContent = wins;
    document.getElementById("Losses").textContent = losses;
}