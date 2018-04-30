
//list of words for game
var wordList = ["DRIP", "CAPPACCINO", "BREW", "BARISTA", "LATTE", "STEAMED", "ESPRESSO", "CREAMER", "BLACK", "AMERICANO",
    "GROUNDS", "ROAST", "FILTER", "CAFFEINE", "THERMOS", "FROTH", "MOCHA"]

//choose random word from wordList
var randomWord = wordList[Math.floor(Math.random() * wordList.length)]

//make spaces for each letter of the randomWord chosen
var spaces = []
for (i = 0; i < randomWord.length; i++) {
    spaces.push("_");
}
console.log(randomWord);
//funtion runs when user presses a key
document.onkeyup = function (event) {
    //determines which key was pressed.
    var userGuess = event.key;
    //if user guess is equal to one of the letters inside randomWord//
    for (i = 0; i < randomWord.length; i++) {
        if (userGuess === randomWord[i]) {
            //update "_" with user's guess//
            spaces[i] = userGuess;
        }
    }
    console.log(spaces);
        
}

