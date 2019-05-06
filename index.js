// Dependency for inquirer npm package
var inquirer = require("inquirer");
// -create an array with words to guess
var wordBank = ["stars", "moon", "mars", "venus", "jupiter", "nebula"];

// variable to store word in use
var wordInUse = "";
var guessesRemaining = 8;
var wins = 0;
var losses = 0;


// -for each word while in use,
//     -pull out word store in inUse variable
//      -split, then join with a <space>
//      -replace all letters with _

// -Take in user input
// -compare user input with letters in word

// -if user input is in the word,
//     -Console.log "CORRECT!"
//     -display word as Underscore with letters guessed replacing underscore (use .replace("_", userInput))
//     -- call function to check if all letters have been found
//     -if false
//         --call function to get user input
//     if true
//         --log "You have won!!"
//         -add point to wins
//         confirm "Play Again?"
//         -if YES
//             -call for new word playAgain
//         if NO
//             -show scores
//             Exit

// -else if NOT in word
//     -console.log "INCORRECT!"
//     - subtract number from guessesRemaining
//     -Display "#" guesses remaining

//     if guessesRemaining is > 0
//          --call function to get user input

//     if guessesRemaining is <= 0
//         -log "You ran out of guesses"

//          confirm "Play Again?"
//         -if YES
//             -call for new word playAgain
//         if NO
//             -show scores
//             Exit