
//Compuiter letter choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Game starts, variables at 0
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//Computer selects random letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//User 9 guesses
var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function() {
  document.querySelector('#let').innerHTML = "Letters So Far: " + guessedLetters.join(', ');
};

// Reset function
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

//On key function
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Psychic master!");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("No psychic here, good luck next time");
            reset();
        }
};
