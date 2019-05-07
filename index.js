// Dependency for inquirer npm package
var inquirer = require("inquirer");
// link Word constructor
var Word = require("./Word");
// To make it pretty!
var chalk = require('chalk');
var ansiAlign = require('ansi-align');
// -create an array with words to guess
var wordBank = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","The Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Congo","Costa Rica","Cote d'Ivoire","Croatia", "Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","The Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kenya","North Korea","South Korea", "Kosovo","Kuwait","Laos","Latvia","Lebanon","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Lucia","Samoa","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Sweden","Switzerland","Syria","Taiwan","Tanzania","Thailand","Togo","Tonga","Turkey","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Vatican City","Venezuela","Vietnam","Zambia","Zimbabwe"];

// variable to store word in use
var wordInUse = "";
var userInput = "";
var correctLetters = [];

var wins = 0;
var losses = 0;
var count = 0;

// Function the start game with instructions and confirm Start Game
var beginGame = function() {
  //Instructions
  console.log("\n" +chalk.bold.green("WORD GUESS GAME")+"\n");
  var text = chalk.magenta("How well do you know the world? Guess the letters to the correct word.  All words are names of countries.  You will be allowed 8 wrong guesses per word.  Good luck!!")
  console.log(text + "\n");

inquirer.prompt([
  {
   type: 'confirm',
   name: 'startGame',
   message: 'Would you like to play the game?'
  }
]).then(answers => {
    if (answers) {
      pickWord();
      getUserInput(); 
    } else {
      return;
    }
  
  
});
}

beginGame();

// Function to determine word in play
    // Math.random to assign ,each a number


 var pickWord = function() {
     var pickNum = Math.floor(Math.random() * wordBank.length);
    //  console.log(pickNum); 
     wordInUse = wordBank[pickNum];
    //  console.log(wordInUse);
     return wordInUse;

 } 

 
 var getUserInput = function() {
   
   
   
    
    inquirer.prompt([
        {
            type: 'input',
            name: 'userGuess',
            message: "Guess a Letter",
            validate: function(value) {
              var pass = value.match(/[a-z]/);
              if (pass) {
                return true;
              }
        
              return 'Please enter a valid letter';
            }
          }
    ]).then(answers => {
     
        userInput = answers.userGuess;
        
        let myWord = new Word(wordInUse);
       console.log(wordInUse);
        myWord.guessInput(userInput);
        myWord.displayWord();
        count++;

        getUserInput();
        
      });
      if (count < 8){
        console.log("You have " + count + " guesses remaining.");
    }
    else {
      console.log("You have run out of guesses");

// confirm play again
    }
    };


   


//  var startGame = function() {
     
//  }

 


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