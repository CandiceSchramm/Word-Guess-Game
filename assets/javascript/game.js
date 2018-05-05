





//list of words for game
var wordList = ["DRIP", "CAPPACCINO", "BREW", "BARISTA", "LATTE", "STEAMED", "ESPRESSO", "CREAMER", "BLACK", "AMERICANO",
    "GROUNDS", "ROAST", "FILTER", "CAFFEINE", "THERMOS", "FROTH", "MOCHA"]
//set guess limit
var guessesRemaining = 12;
//list letters already guessed
var wrongGuessList = []
//choose random word from wordList
var randomWord = wordList[Math.floor(Math.random() * wordList.length)]
console.log(randomWord);

//make spaces for each letter of the randomWord chosen
var spaces = []
for (i = 0; i < randomWord.length; i++) {
    spaces.push(" _ ");
}

//shows spaces on html
var wordDiv = document.getElementById("word");
wordDiv.textContent = ("Your Word is:  " + spaces.join(" "));

//shows guesses on html
var remainingGuessesDiv = document.getElementById("remaining-guesses");
remainingGuessesDiv.textContent = ("You have " + guessesRemaining + " remaining guesses");

var wrongLettersDiv = document.getElementById("guesses");
wrongLettersDiv.textContent = ("You've guessed: " + wrongGuessList);


//funtion runs when user presses a key
document.onkeyup = function (event) {
    //determines which key was pressed.
    var userKey = event.key;
    //change userKey to upper case
    var userGuess = userKey.toUpperCase();
    //set flag
    var letterMatchFlag = false;
    //if user guess is equal to one of the letters inside randomWord//
    for (i = 0; i < randomWord.length; i++) {
        if (userGuess === randomWord[i]) {
            //update "_" with user's guess//
            spaces[i] = userGuess;
            //show updated word with correct guess
            wordDiv.textContent = ("Your Word is:  " + spaces.join(" "));
            letterMatchFlag = true;
        }
    }
    //check to see if flag is false still, means their guess was not in the word
    if (letterMatchFlag === false) {
        //update wrongGuessList array
        wrongGuessList.push(userGuess);
        // update html to show wrongGuessList array
        wrongLettersDiv.textContent = ("You've guessed: " + wrongGuessList);
        // -1 from guessesRemaining
        if (guessesRemaining > 0) {
            guessesRemaining--;
        // update html to show updated guesses remaining
            remainingGuessesDiv.textContent = ("You have " + guessesRemaining + " remaining guesses");
        }
    }
    //if guesses remaining === 0, display word & show loss
    if (guessesRemaining === 0) {
        wordDiv.textContent = ("Your Word is:  " + randomWord);

    }
}





